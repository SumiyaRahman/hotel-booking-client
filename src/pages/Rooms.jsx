import React, { useEffect, useState } from "react";
import AllRoomShowcase from "./AllRoomShowcase";
import Navbar from "../component/Banner/Navbar";
import Footer from "../component/Footer";
import { Helmet } from "react-helmet";

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

        const response = await fetch(`http://localhost:5000/rooms/filter?${query}`);
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

      <div className="max-w-7xl mx-auto px-5">
        <Navbar></Navbar>
        <div>
          <h1 className="play-fair text-5xl leading-[4rem] mb-5 text-[#1C1C1C] text-center py-10">
            All Rooms
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
