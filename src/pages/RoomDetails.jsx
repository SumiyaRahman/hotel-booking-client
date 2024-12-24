import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaUserGroup } from "react-icons/fa6";
import { MdBorderLeft } from "react-icons/md";

const RoomDetails = () => {
  const { id } = useParams();
  const [room, setRoom] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/rooms/${id}`)
      .then((res) => res.json())
      .then((data) => setRoom(data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!room) {
    return <p>Loading...</p>;
  }

  const { name, image, guests, squareFeet, price, description } = room;

  return (
    <section className="max-w-7xl mx-auto py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Image Section */}
        <div>
          <img src={image} alt={name} className="w-full rounded-lg" />
        </div>
        {/* Details Section */}
        <div>
          <h1 className="text-4xl font-bold play-fair">{name}</h1>
          <p className="mt-4 text-lg text-gray-500">{description}</p>
          <div className="flex items-center gap-4 mt-6">
            <p className="flex items-center gap-2 text-sm text-gray-600">
              <FaUserGroup /> {guests} Guests
            </p>
            <p className="flex items-center gap-2 text-sm text-gray-600">
              <MdBorderLeft /> {squareFeet} ft
            </p>
            <p className="text-sm text-gray-600">${price}/night</p>
          </div>
          <button className="mt-6 px-6 py-3 bg-[#C19B77] text-white uppercase text-sm font-bold tracking-widest">
            Book Now
          </button>
        </div>
      </div>
      {/* Similar Rooms */}
      <div className="mt-20">
        <h2 className="text-3xl font-semibold play-fair mb-6">Similar Rooms</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-200 h-40 rounded-lg"></div>
          <div className="bg-gray-200 h-40 rounded-lg"></div>
          <div className="bg-gray-200 h-40 rounded-lg"></div>
        </div>
      </div>
    </section>
  );
};

export default RoomDetails;
