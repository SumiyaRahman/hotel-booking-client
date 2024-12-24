import React, { useEffect, useState } from "react";
import RoomCard from "./RoomCard";
import { useNavigate } from "react-router-dom";

const AllRooms = () => {
  const [rooms, setRooms] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    fetch("http://localhost:5000/rooms")
      .then((res) => res.json())
      .then((data) => {
        console.log(data); // Check response in the console
        setRooms(data.slice(0, 3)); 
      })
      .catch((err) => console.log("Error:", err)); // Log errors
  }, []);

  return (
    <section>
      <div className="flex flex-col lg:flex-row justify-between items-center pt-20 bg-white">
        {/* Left Section */}
        <div className="w-full lg:w-1/3">
          <p className="tracking-[0.4rem] text-sm font-medium text-[#C19B77] mb-6">
            Accommodations
          </p>
          <h1 className="play-fair text-5xl leading-[4rem] mb-5 text-[#1C1C1C]">
            All Rooms
          </h1>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-2/3 flex flex-col lg:flex-row items-center justify-between">
          <p className="leading-[1.9rem] text-sm text-[#ACACAC] font-light tracking-widest mb-12 lg:w-2/3">
            Quisque vitae posuere libero. Phasellus feugiat erat sit amet dui
            condimentum imperdiet. Ut at
            <a
              href="#"
              className="underline text-gray-500 hover:text-gray-800 "
            >
              libero nec ligula fringilla dictum
            </a>
            sit amet id dui. Integer gravida dolor elit, sit amet vestibulum mi
            elementum eget.
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
