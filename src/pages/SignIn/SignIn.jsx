import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import google from '../../assets/Images/Images/google.png'
import github from '../../assets/Images/Images/github.png'
import Navbar from "../../component/Banner/Navbar";
import Footer from "../../component/Footer";

const SignIn = () => {
  const { signInUser, signInWithGoogle, signInWithGitHub } = useContext(AuthContext);
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state || "/"; // Default redirect to home

  // Handle Sign In Submission
  const handleSignIn = (e) => {
    e.preventDefault();

    // Get form values
    const form = e.target;
    const email = form.email.value.trim(); // Trim whitespace
    const password = form.password.value;

    // Clear previous errors
    setError("");

    // Sign in with Firebase
    signInUser(email, password)
      .then((result) => {
        console.log("User signed in successfully:", result.user);
        navigate(from); // Redirect to intended page or home
      })
      .catch((error) => {
        console.log("Firebase Error:", error.message);
        setError(error.message); // Display Firebase error message
      });
  };

  // Handle Google Sign In
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log("Google Sign-in successful:", result.user);
        navigate(from); // Redirect to intended page or home
      })
      .catch((error) => {
        console.log("Google Sign-in error:", error.message);
        setError(error.message);
      });
  };

  // Handle GitHub Sign In
  const handleGitHubSignIn = () => {
    signInWithGitHub()
      .then((result) => {
        console.log("GitHub Sign-in successful:", result.user);
        navigate(from); // Redirect to intended page or home
      })
      .catch((error) => {
        console.log("GitHub Sign-in error:", error.message);
        setError(error.message);
      });
  };

  return (
    <div>
        <div className="max-w-7xl mx-auto">
            <Navbar></Navbar>
        </div>
        <div className="hero min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-lg shadow-2xl p-8">
        <form onSubmit={handleSignIn} className="space-y-4">
          <h1 className="text-5xl font-bold text-[#373737] text-center mb-6">
            Sign In
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
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </div>
          {/* Forgot Password */}
          <div className="mb-4 text-right">
              <a href="#" className="text-[#373737] hover:underline text-xs">
                Forgot Password?
              </a>
            </div>

          {/* Submit Button */}
          <div className="form-control">
            <button className="btn bg-[#c19b77] text-white font-bold text-xl ">
              Sign In
            </button>
          </div>
        </form>
        
        {/* Google Login Button */}
        <div className="form-control mt-4">
          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="btn bg-white border-[#373737] rounded shadow-none text-sm md:text-lg font-medium w-full flex items-center justify-center gap-2"
          >
            <img src={google} className="h-5 w-5" />
            <span className="text-[#373737] font-medium">
              Sign in with Google
            </span>
          </button>
        </div>

        {/* GitHub Login Button */}
        <div className="form-control mt-4">
          <button
            type="button"
            onClick={handleGitHubSignIn}
            className="btn bg-white border-[#373737] rounded shadow-none text-sm md:text-lg font-medium w-full flex items-center justify-center gap-2"
          >
            <img src={github} className="h-5 w-5" />
            <span className="text-[#373737] font-medium">
              Sign in with GitHub
            </span>
          </button>
        </div>
      </div>
    </div>
        <Footer></Footer>
    </div>
  );
};

export default SignIn;
