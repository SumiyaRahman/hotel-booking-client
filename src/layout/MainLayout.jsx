import React from "react";
import Banner from "../component/Banner/Banner";
import WelcomeSection from "../component/WelcomeSection";
import Reserve from "../component/Reserve/Reserve";
import AllRooms from "../component/AllRooms";
import Navbar from "../component/Banner/Navbar";
import Footer from "../component/Footer";
import { ToastContainer } from "react-toastify";

const MainLayout = () => {
  return (
    <div>
      <ToastContainer></ToastContainer>
      <div className="max-w-7xl mx-auto">
        <Navbar></Navbar>
      </div>
      <Banner></Banner>
      <div className="max-w-7xl mx-auto px-5">
        <WelcomeSection></WelcomeSection>
        <Reserve></Reserve>
        <AllRooms></AllRooms>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
