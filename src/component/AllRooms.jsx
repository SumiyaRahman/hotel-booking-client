import React, { useEffect, useState } from "react";
import RoomCard from "./RoomCard";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const AllRooms = () => {
  const navigate = useNavigate();

  const { data: rooms = [] } = useQuery({
    queryKey: ['rooms'],
    queryFn: async () => {
      const response = await axios.get('https://hotel-booking-server-one-nu.vercel.app/rooms');
      return response.data.slice(0, 6); // Show only first 6 rooms
    }
  });

  return (
    <section className="px-4 md:px-8 lg:px-16 py-12 md:py-20">
      <div className="flex flex-col lg:flex-row justify-between items-center pt-20 bg-white">
        {/* Left Section */}
        <div className="w-full lg:w-1/3">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="tracking-[0.4rem] text-sm font-medium text-[#C19B77] mb-3 md:mb-6 uppercase"
          >
            Accommodations
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="play-fair text-3xl md:text-5xl leading-[3rem] md:leading-[4rem] mb-5 text-[#1C1C1C]"
          >
            All Rooms
          </motion.h1>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-2/3 flex flex-col lg:flex-row items-center justify-between">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="leading-[1.6rem] md:leading-[1.9rem] text-xs md:text-sm text-[#ACACAC] font-light tracking-widest mb-8 md:mb-12 lg:w-2/3"
          >
            At Hotel Serenity, we offer a range of rooms designed to meet the needs of all our guests. Whether you're here for a short stay or a long retreat, each of our rooms provides the perfect balance of luxury, comfort, and modern amenities to ensure an unforgettable stay.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#C19B77" }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            onClick={() => navigate("/rooms")}
            className="bg-[#373737] text-white uppercase text-xs font-semibold tracking-[0.3rem] px-8 py-3 rounded-sm shadow-lg transform transition-all duration-300"
          >
            View All
          </motion.button>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mt-16"
      >
        {rooms.map((room, index) => (
          <motion.div
            key={room._id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="transform transition-all duration-300 hover:shadow-xl"
          >
            <RoomCard room={room} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default AllRooms;
