import React, { useEffect, useState } from "react";
import AllRoomShowcase from "./AllRoomShowcase";
import Navbar from "../component/Banner/Navbar";
import Footer from "../component/Footer";

const Rooms = () => {
    const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/rooms")
      .then((res) => res.json())
      .then((data) => {
        setRooms(data); // Show all 10 rooms
      })
      .catch((err) => console.log("Error:", err));
  }, []);

  return (
    <section>
        <div className="max-w-7xl mx-auto px-5">
        <Navbar></Navbar>
      <div>
        <h1 className="play-fair text-5xl leading-[4rem] mb-5 text-[#1C1C1C] text-center py-10">
          All Rooms
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-10">
        {rooms.map((room) => (
            <AllRoomShowcase key={room._id} room={room}></AllRoomShowcase>
        ))}
      </div>
        </div>
      <Footer></Footer>
    </section>
  );
};

export default Rooms;
