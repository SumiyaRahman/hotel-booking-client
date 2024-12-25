import React from "react";
import { FaUserGroup } from "react-icons/fa6";
import { MdBorderLeft } from "react-icons/md";
import { useLoaderData } from "react-router-dom";
import Navbar from "../component/Banner/Navbar";
import Footer from "../component/Footer";

const RoomDetails = () => {
  const { name, image, description, guests, squareFeet, price } =
    useLoaderData();

  return (
    <section>
      <div className="max-w-7xl mx-auto py-5">
        <Navbar></Navbar>

        <div>
          <h1>{name}</h1>
        </div>
        
        {/* Similar Rooms */}
        
      </div>
      <Footer></Footer>
    </section>
  );
};

export default RoomDetails;
