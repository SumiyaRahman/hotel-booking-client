import React from "react";
import Banner from "../component/Banner/Banner";
import WelcomeSection from "../component/WelcomeSection";
import Reserve from "../component/Reserve/Reserve";
import AllRooms from "../component/AllRooms";
import Navbar from "../component/Banner/Navbar";
import Footer from "../component/Footer";
import { ToastContainer } from "react-toastify";
import Reviews from "../component/Reviews";
import { Helmet } from "react-helmet";

const MainLayout = () => {
  return (
    <div>
      <Helmet>
        <title>Hotel Serenity - Home</title>
        <meta
          name="description"
          content="Discover comfort and luxury at Hotel Serenity. Book your stay now!"
        />
        <meta name="keywords" content="hotel, booking, luxury, rooms" />
      </Helmet>
      <ToastContainer></ToastContainer>
      <div className="max-w-7xl mx-auto">
        <Navbar></Navbar>
      </div>
      <Banner></Banner>
      <div className="max-w-7xl mx-auto px-5">
        <WelcomeSection></WelcomeSection>
        <Reserve></Reserve>
        <AllRooms></AllRooms>
        <Reviews></Reviews>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
