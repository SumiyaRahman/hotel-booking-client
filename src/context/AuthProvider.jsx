import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  GithubAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../firebase/firebase.init";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // --------------------------------
  // Save User Data to MongoDB
  // --------------------------------
  const saveUserToDB = async (user) => {
  const userData = {
    uid: user.uid,
    email: user.email,
    name: user.displayName || "Anonymous",
    photo: user.photoURL || "https://via.placeholder.com/150",
  };

  try {
    const response = await fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      // Log the error response for debugging
      const errorData = await response.json();
      console.error("MongoDB API Error:", errorData);
      throw new Error(errorData.error || "Failed to save user to MongoDB");
    }

    const result = await response.json();
    console.log("User saved to MongoDB:", result);
  } catch (error) {
    console.error("Failed to save user to MongoDB:", error.message);
  }
};


  // --------------------------------
  // Email and Password Authentication
  // --------------------------------
  const createUser = async (email, password, photoURL) => {
    setLoading(true);
  
    try {
      // Create user in Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
  
      console.log("Firebase User Created:", user); // Debug log
  
      // Prepare user data for MongoDB, including photoURL if available
      const userData = {
        uid: user.uid, // Firebase UID
        email: user.email,
        name: user.displayName || "Anonymous", // Default name if not provided
        photoURL: photoURL || user.photoURL || "https://via.placeholder.com/150", // Default photo if not provided
      };
  
      // Save user to MongoDB
      const response = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
  
      const result = await response.json();
      console.log("User saved to MongoDB:", result); // Debug log
  
      setLoading(false);
      return user; // Return user for further use if needed
    } catch (error) {
      console.error("Error in user creation:", error.message); // Handle errors
      setLoading(false);
      throw error; // Rethrow error for handling elsewhere
    }
};


  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {
        saveUserToDB(userCredential.user); // Save user to DB after login
      }
    );
  };

  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  // --------------------------------
  // Google Authentication
  // --------------------------------
  const googleProvider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider).then((result) => {
      saveUserToDB(result.user); // Save user to DB after Google login
    });
  };

  // --------------------------------
  // GitHub Authentication
  // --------------------------------
  const githubProvider = new GithubAuthProvider();
  const signInWithGitHub = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider).then((result) => {
      saveUserToDB(result.user); // Save user to DB after GitHub login
    });
  };

  // --------------------------------
  // Monitor Authentication State
  // --------------------------------
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        saveUserToDB(currentUser); // Save user if already logged in
      }
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  // --------------------------------
  // Provide Context
  // --------------------------------
  const authInfo = {
    user,
    loading,
    createUser,
    signInUser,
    signOutUser,
    signInWithGoogle,
    signInWithGitHub,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
