import React from "react";
import Banner from "../component/Banner/Banner";
import BookingForm from "../component/BookingForm";
import WelcomeSection from "../component/WelcomeSection";
import Reserve from "../component/Reserve/Reserve";
import AllRooms from "../component/AllRooms";

const MainLayout = () => {
  return (
    <div>
      <Banner></Banner>
      <BookingForm></BookingForm>
      <div className="max-w-7xl mx-auto px-5">
        <WelcomeSection></WelcomeSection>
        <Reserve></Reserve>
        <AllRooms></AllRooms>
      </div>
    </div>
  );
};

export default MainLayout;
