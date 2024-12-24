import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";
import Banner from "../component/Banner";
import BookingForm from "../component/BookingForm";
import WelcomeSection from "../component/WelcomeSection";

const MainLayout = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-5">
        <Navbar></Navbar>
      </div>
      <Banner></Banner>
      <BookingForm></BookingForm>
      <div className="max-w-5xl mx-auto px-5">
        <WelcomeSection></WelcomeSection>
      </div>
    </div>
  );
};

export default MainLayout;
