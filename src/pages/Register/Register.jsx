import React, { useContext, useState } from "react";
import AuthContext from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../component/Banner/Navbar";
import Footer from "../../component/Footer";
import { Helmet } from "react-helmet";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState(""); // State for photo URL
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Use navigate hook

  // Handle Register Submission
  const handleRegister = (e) => {
    e.preventDefault();

    // Get form values
    const form = e.target;
    const firstName = form.firstName.value.trim();
    const lastName = form.lastName.value.trim();
    const email = form.email.value.trim(); // Trim whitespace
    const password = form.password.value;

    // Email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Invalid email address.");
      return;
    }

    // Password validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      setError(
        "Password must have at least one uppercase letter, one lowercase letter, and be at least 6 characters long."
      );
      return;
    }

    // Clear previous errors
    setError("");

    // Create User with Firebase
    createUser(email, password)
      .then((result) => {
        console.log("User created successfully:", result.user);

        // Add user data to database, including photoURL
        fetch('https://hotel-booking-server-one-nu.vercel.app/addUser', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
            name: `${firstName} ${lastName}`,
            photoURL: photoURL || '', // Save photoURL (if provided)
            providerId: "email-password",
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.message === "User added successfully") {
              alert("User successfully added to the database");
            } else {
              alert("User already exists");
            }
          });

        form.reset(); // Reset the form after successful registration
        navigate("/"); // Redirect to home page
      })
      .catch((error) => {
        console.log("Firebase Error:", error.message);
        setError(error.message); // Display Firebase error message
      });
  };

  return (
    <div>
      <Helmet>
        <title>Hotel Serenity - Register</title>
        <meta
          name="description"
          content="Register for a new account to book rooms at Hotel Serenity."
        />
        <meta name="keywords" content="register, hotel, booking, account" />
      </Helmet>
      <div className="max-w-7xl mx-auto">
        <Navbar></Navbar>
      </div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse gap-10 items-center">
          <div className="text-center lg:text-left w-1/3">
            {/* You can add Lottie animations here */}
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleRegister} className="card-body">
              <h1 className="text-5xl font-bold text-[#373737]">Register now!</h1>

              {/* First Name Input */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">First Name</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="Enter your first name"
                  className="input input-bordered"
                  required
                />
              </div>

              {/* Last Name Input */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Last Name</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Enter your last name"
                  className="input input-bordered"
                  required
                />
              </div>

              {/* Email Input */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="input input-bordered"
                  required
                />
              </div>

              {/* Photo URL Input */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Profile Photo URL</span>
                </label>
                <input
                  type="url"
                  name="photoURL"
                  placeholder="Enter your profile photo URL"
                  className="input input-bordered"
                  value={photoURL}
                  onChange={(e) => setPhotoURL(e.target.value)}
                />
              </div>

              {/* Password Input */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="input input-bordered"
                  required
                />

                {/* Error Message Display */}
                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
              </div>

              {/* Submit Button */}
              <div className="form-control mt-6">
                <button className="btn bg-[#c19b77] text-white font-bold text-xl ">
                  Register
                </button>
              </div>
            </form>
            <p className="text-xs md:text-sm font-medium text-center text-[#403F3F] pb-5">
              Already Have An Account?{" "}
              <Link to="/signin" className="text-[#c19b77] font-semibold underline">
                Signin
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Register;
