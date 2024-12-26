import React, { useContext, useState } from "react";
import AuthContext from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Navbar from "../../component/Banner/Navbar";
import Footer from "../../component/Footer";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Use navigate hook

  // Handle Register Submission
  const handleRegister = (e) => {
    e.preventDefault();

    // Get form values
    const form = e.target;
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
              <h1 className="text-5xl font-bold text-[#373737]">
                Register now!
              </h1>

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
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Register;
