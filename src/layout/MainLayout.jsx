import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";
import Banner from "../component/Banner";
import BookingForm from "../component/BookingForm";

const MainLayout = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <Navbar></Navbar>
      </div>
      <Banner></Banner>
      <BookingForm></BookingForm>
      <div className="max-w-7xl mx-auto">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
