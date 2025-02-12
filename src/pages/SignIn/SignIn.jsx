import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import google from "../../assets/Images/Images/google.png";
import github from "../../assets/Images/Images/github.png";
import Navbar from "../../component/Banner/Navbar";
import Footer from "../../component/Footer";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

const SignIn = () => {
  const { signInUser, signInWithGoogle, signInWithGitHub } =
    useContext(AuthContext);
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
        const user = {email: email}
        axios.post('https://hotel-booking-server-one-nu.vercel.app/jwt', user)
        .then(data => {
          console.log(data);
        })
        // navigate(from); // Redirect to intended page or home
      })
      .catch((error) => {
        navigate(from); // Display Firebase error message
      });
  };

  const handleGoogleSignIn = async () => {
    try {
      // Call the Google sign-in function
      const result = await signInWithGoogle();

      // Log the result for debugging
      console.log("Google Sign-in result:", result);

      // Use `result` directly to fetch the user
      const user = result.user; // Access user directly

      if (user) {
        console.log("Google Sign-in successful:", user);

        // Save user to MongoDB (already implemented in AuthProvider)
        const userData = {
          uid: user.uid,
          email: user.email,
          name: user.displayName || "Anonymous",
          photo: user.photoURL || "https://via.placeholder.com/150",
        };

        const response = await fetch("https://hotel-booking-server-one-nu.vercel.app/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        });

        const data = await response.json();
        console.log("User saved to MongoDB:", data);

        // Redirect only after successful MongoDB save
        navigate(from); // Redirect to home page or intended page
      } else {
        throw new Error("Google Sign-in failed. No user returned.");
      }
    } catch (error) {
      navigate(from);
      setError(error.message); // Show error to user
    }
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>Hotel Serenity - Sign In</title>
        <meta
          name="description"
          content="Sign in to your Hotel Serenity account to access your bookings."
        />
        <meta name="keywords" content="login, hotel, serenity, sign in" />
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
          <form onSubmit={handleSignIn} className="space-y-7">
            <motion.h1 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold text-white text-center mb-10 play-fair"
            >
              Welcome Back
            </motion.h1>

            {/* Email Input */}
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
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

            {/* Password Input */}
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="form-control relative"
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

            {/* Forgot Password */}
            <div className="text-right">
              <a href="#" className="text-white/80 hover:text-white text-sm transition-colors hover:underline">
                Forgot Password?
              </a>
            </div>

            {/* Submit Button */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="form-control mt-8"
            >
              <button className="btn h-12 bg-gradient-to-r from-[#c19b77] to-[#a17c5c] hover:from-[#a17c5c] hover:to-[#8b6346] text-white font-bold text-xl border-none transition-all duration-500 transform hover:scale-[1.02] rounded-xl shadow-lg hover:shadow-xl">
                Sign In
              </button>
            </motion.div>
          </form>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/20"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 text-white/80 bg-transparent backdrop-blur-sm">Or continue with</span>
            </div>
          </div>

          {/* Google Login Button */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="form-control"
          >
            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="btn h-12 bg-white hover:bg-gray-50 border-none rounded-xl shadow-lg text-base font-medium w-full flex items-center justify-center gap-3 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl"
            >
              <img src={google} className="h-6 w-6" />
              <span className="text-gray-700 font-medium">
                Sign in with Google
              </span>
            </button>
          </motion.div>

          {/* GitHub Login Button */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="form-control mt-4"
          >
            <button
              type="button"
              onClick={handleGitHubSignIn}
              className="btn h-12 bg-[#24292e] hover:bg-[#1a1e22] text-white border-none rounded-xl shadow-lg text-base font-medium w-full flex items-center justify-center gap-3 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl"
            >
              <img src={github} className="h-6 w-6" />
              <span className="font-medium">
                Sign in with GitHub
              </span>
            </button>

            <p className="text-sm font-medium text-center text-white mt-8">
              Don't Have An Account?{" "}
              <Link
                to="/register"
                className="text-[#c19b77] hover:text-[#a17c5c] font-semibold underline decoration-2 underline-offset-2 transition-colors"
              >
                Register
              </Link>
            </p>
          </motion.div>
        </motion.div>
      </div>
      {/* <Footer></Footer> */}
    </motion.div>
  );
};

export default SignIn;
