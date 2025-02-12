import React, { useEffect, useState } from "react";
import AllRoomShowcase from "./AllRoomShowcase";
import Navbar from "../component/Banner/Navbar";
import Footer from "../component/Footer";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  // Fetch rooms based on price filter
  useEffect(() => {
    const fetchRooms = async () => {
      try {
        // Build the filter query string
        let query = "";
        if (minPrice) query += `minPrice=${minPrice}&`;
        if (maxPrice) query += `maxPrice=${maxPrice}&`;

        const response = await fetch(`https://hotel-booking-server-one-nu.vercel.app/rooms/filter?${query}`);
        const data = await response.json();
        setRooms(data); // Set the filtered rooms
      } catch (error) {
        console.error("Error fetching rooms:", error);
      }
    };

    fetchRooms();
  }, [minPrice, maxPrice]); // Re-run the effect when filters change

  const handleFilterChange = (e) => {
    // Handle change for minPrice and maxPrice
    if (e.target.name === "minPrice") {
      setMinPrice(e.target.value);
    } else if (e.target.name === "maxPrice") {
      setMaxPrice(e.target.value);
    }
  };

  return (
    <section>
      <Helmet>
  <title>Hotel Serenity - All Rooms</title>
  <meta
    name="description"
    content="Explore the rooms available at Hotel Serenity and find the perfect one for you."
  />
  <meta name="keywords" content="rooms, hotel, serenity, explore, book" />
</Helmet>


<Navbar></Navbar>

<motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.66), rgba(0, 0, 0, 0.37)), url('https://images.pexels.com/photos/2869215/pexels-photo-2869215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
          height: "60vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="flex flex-col justify-center items-center px-5"
      >
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="uppercase play-fair text-4xl md:text-6xl leading-[4rem] text-white mt-2"
        >
          All Rooms
        </motion.h1>
        {/* <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-white leading-[1.4rem] mt-4 md:mt-6 text-xs md:text-base font-light tracking-wider w-full lg:w-1/2 mx-auto text-center"
        >
          Discover the elegance and comfort of our carefully designed rooms
          and suites
        </motion.p> */}
      </motion.div>

      <div className="max-w-7xl mx-auto px-5">
        <div>
          <h1 className="play-fair text-5xl leading-[4rem] mb-5 text-[#1C1C1C] text-center py-10">
            
          </h1>
        </div>

        {/* Filter Form */}
        <div className="flex justify-center gap-4 mb-8">
          <div>
            <label className="mr-2">Min Price:</label>
            <input
              type="number"
              name="minPrice"
              value={minPrice}
              onChange={handleFilterChange}
              className="border p-2 rounded"
              placeholder="Min Price"
            />
          </div>
          <div>
            <label className="mr-2">Max Price:</label>
            <input
              type="number"
              name="maxPrice"
              value={maxPrice}
              onChange={handleFilterChange}
              className="border p-2 rounded"
              placeholder="Max Price"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-10">
          {rooms.length > 0 ? (
            rooms.map((room) => (
              <AllRoomShowcase key={room._id} room={room}></AllRoomShowcase>
            ))
          ) : (
            <p>No rooms available.</p>
          )}
        </div>
      </div>
      <Footer></Footer>
    </section>
  );
};

export default Rooms;
