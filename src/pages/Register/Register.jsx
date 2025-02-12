import React, { useContext, useState } from "react";
import AuthContext from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../component/Banner/Navbar";
import Footer from "../../component/Footer";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
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
      <div 
        className="min-h-screen flex justify-center items-center pt-40 pb-20 px-4"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.3)), url('https://images.pexels.com/photos/2869215/pexels-photo-2869215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="card w-full max-w-lg backdrop-blur-md bg-white/30 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] p-10 rounded-3xl border border-white/20"
        >
          <form onSubmit={handleRegister} className="space-y-7">
            <motion.h1 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold text-white text-center mb-10 play-fair"
            >
              Create Account
            </motion.h1>

            <div className="grid grid-cols-2 gap-6">
              {/* First Name Input */}
              <motion.div 
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="form-control relative"
              >
                <label className="label">
                  <span className="label-text text-white font-medium tracking-wide">First Name</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="Enter your first name"
                  className="input h-12 bg-white/10 border-2 border-white/20 text-white placeholder:text-gray-300 backdrop-blur-sm focus:bg-white/20 focus:border-white transition-all duration-300 rounded-xl px-4"
                  required
                />
              </motion.div>

              {/* Last Name Input */}
              <motion.div 
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="form-control relative"
              >
                <label className="label">
                  <span className="label-text text-white font-medium tracking-wide">Last Name</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Enter your last name"
                  className="input h-12 bg-white/10 border-2 border-white/20 text-white placeholder:text-gray-300 backdrop-blur-sm focus:bg-white/20 focus:border-white transition-all duration-300 rounded-xl px-4"
                  required
                />
              </motion.div>

              {/* Email Input */}
              <motion.div 
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="form-control relative"
              >
                <label className="label">
                  <span className="label-text text-white font-medium tracking-wide">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="input h-12 bg-white/10 border-2 border-white/20 text-white placeholder:text-gray-300 backdrop-blur-sm focus:bg-white/20 focus:border-white transition-all duration-300 rounded-xl px-4"
                  required
                />
              </motion.div>

              {/* Photo URL Input */}
              <motion.div 
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="form-control relative"
              >
                <label className="label">
                  <span className="label-text text-white font-medium tracking-wide">Profile Photo URL</span>
                </label>
                <input
                  type="url"
                  name="photoURL"
                  placeholder="Enter your profile photo URL"
                  className="input h-12 bg-white/10 border-2 border-white/20 text-white placeholder:text-gray-300 backdrop-blur-sm focus:bg-white/20 focus:border-white transition-all duration-300 rounded-xl px-4"
                  value={photoURL}
                  onChange={(e) => setPhotoURL(e.target.value)}
                />
              </motion.div>

              {/* Password Input */}
              <motion.div 
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="form-control relative col-span-2"
              >
                <label className="label">
                  <span className="label-text text-white font-medium tracking-wide">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="input h-12 bg-white/10 border-2 border-white/20 text-white placeholder:text-gray-300 backdrop-blur-sm focus:bg-white/20 focus:border-white transition-all duration-300 rounded-xl px-4"
                  required
                />
                {error && <p className="text-red-300 text-sm mt-2 font-medium">{error}</p>}
              </motion.div>
            </div>

            {/* Submit Button */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="form-control mt-8"
            >
              <button className="btn h-12 bg-gradient-to-r from-[#c19b77] to-[#a17c5c] hover:from-[#a17c5c] hover:to-[#8b6346] text-white font-bold text-xl border-none transition-all duration-500 transform hover:scale-[1.02] rounded-xl shadow-lg hover:shadow-xl">
                Register
              </button>
            </motion.div>

            <p className="text-sm font-medium text-center text-white mt-8">
              Already Have An Account?{" "}
              <Link
                to="/signin"
                className="text-[#c19b77] hover:text-[#a17c5c] font-semibold underline decoration-2 underline-offset-2 transition-colors"
              >
                Sign In
              </Link>
            </p>
          </form>
        </motion.div>
      </div>
      {/* <Footer></Footer> */}
    </motion.div>
  );
};

export default Register;
