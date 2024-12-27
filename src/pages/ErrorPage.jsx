import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom"; // To navigate using React Router

const ErrorPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "404 | Page Not Found";
  }, []);

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#C19B77] to-[#373737] text-white"
      style={{
        backgroundImage: "url('https://media.giphy.com/media/1gKXiTOJdqEnK/giphy.gif')", // Add your exciting GIF or image URL
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Helmet>
        <meta name="description" content="Oops! The page you are looking for does not exist." />
        <meta name="keywords" content="404, page not found, error" />
      </Helmet>
      <div className="text-center bg-black bg-opacity-50 p-10 rounded-lg">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-4xl mb-6">Page Not Found</h2>
        <p className="text-lg mb-8">
          Oops! The page you are looking for doesn't exist or has been moved.
        </p>
        <button
          onClick={() => navigate("/")}
          className="px-6 py-3 rounded-lg bg-[#C19B77] text-white font-semibold hover:bg-[#a78560] transition"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
