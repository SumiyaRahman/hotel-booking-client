import React, { useEffect, useState } from "react";
import RoomCard from "./RoomCard";
import { useNavigate } from "react-router-dom";

const AllRooms = () => {
  const [rooms, setRooms] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://hotel-booking-server-one-nu.vercel.app/rooms")
      .then((res) => res.json())
      .then((data) => {
        console.log(data); // Check response in the console
        setRooms(data.slice(0, 6)); // Show only first 6 rooms
      })
      .catch((err) => console.log("Error:", err)); // Log errors
  }, []);

  return (
    <section>
      <div className="flex flex-col lg:flex-row justify-between items-center pt-20 bg-white">
        {/* Left Section */}
        <div className="w-full lg:w-1/3">
          <p className="tracking-[0.4rem] text-sm font-medium text-[#C19B77] mb-3 md:mb-6">
            Accommodations
          </p>
          <h1 className="play-fair text-3xl md:text-5xl leading-[4rem] mb-2 md:mb-5 text-[#1C1C1C]">
            All Rooms
          </h1>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-2/3 flex flex-col lg:flex-row items-center justify-between">
          <p className="leading-[1.6rem] md:leading-[1.9rem] text-xs md:text-sm text-[#ACACAC] font-light tracking-widest mb-8 md:mb-12 lg:w-2/3">
            At Hotel Serenity, we offer a range of rooms designed to meet the needs of all our guests. Whether you're here for a short stay or a long retreat, each of our rooms provides the perfect balance of luxury, comfort, and modern amenities to ensure an unforgettable stay.
          </p>
          <button
            onClick={() => navigate("/rooms")}
            className="bg-[#373737] text-white uppercase text-xs font-semibold tracking-[0.3rem] px-8 py-3 hover:bg-gray-700"
          >
            View All
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-10">
        {rooms.map((room) => (
          <RoomCard key={room._id} room={room}></RoomCard>
        ))}
      </div>
    </section>
  );
};

export default AllRooms;
