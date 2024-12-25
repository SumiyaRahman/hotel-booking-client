import React from "react";
import { FaUserGroup } from "react-icons/fa6";
import { MdBorderLeft } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const AllRoomShowcase = ({ room }) => {
  const { _id, name, image, guests, squareFeet, price } = room;
  const navigate = useNavigate();

  return (
    <div
      className="h-64 w-full bg-cover bg-center relative"
      style={{ backgroundImage: `url(${image})` }}
      onClick={() => navigate(`/rooms/${_id}`)}
    >
      <div className="bg-black bg-opacity-40 h-full w-full flex flex-col justify-end text-white relative">
        <div className="flex justify-end">
          <div className="absolute bg-[#C19B77] text-center w-32 top-[30px]">
            <button onClick={() => navigate(`/rooms/${_id}`)} className=" py-2 tracking-[0.2rem] text-xs">Book Now</button>
          </div>
        </div>
        <div className="pl-6 pb-6">
          <h3 className="text-2xl font-normal play-fair mb-3">{name}</h3>
          <div className="flex items-center gap-3">
            <p className="uppercase text-xs font-light flex items-center gap-2">
              <span className="text-xl">
                <FaUserGroup />
              </span>{" "}
              {guests} <span className="ml-2 tracking-[0.2rem]">Guests</span>
            </p>
            <p className="uppercase text-xs font-light flex items-center gap-2">
              <span className="text-xl">
                <MdBorderLeft />
              </span>{" "}
              {squareFeet} <span className="ml-2 tracking-[0.2rem]">ft</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllRoomShowcase;
