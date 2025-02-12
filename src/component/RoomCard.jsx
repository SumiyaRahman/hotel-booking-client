import React from "react";
import { FaUserGroup } from "react-icons/fa6";
import { MdBorderLeft } from "react-icons/md";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const RoomCard = ({ room }) => {
  const { _id, name, image, guests, squareFeet, description } = room;
  const navigate = useNavigate();

  return (
    <div className="border flex flex-col h-full cursor-pointer hover:shadow-2xl transition-all duration-300 rounded-xl overflow-hidden" onClick={() => navigate(`/rooms/${_id}`)}>
      <div
        className="h-64 sm:h-72 md:h-80 w-full bg-cover bg-center relative transform transition-transform duration-500 hover:scale-105"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="bg-gradient-to-t from-black/70 to-transparent h-full w-full flex flex-col justify-end text-white relative">
          <div className="flex items-center gap-2 p-6">
            <p className="text-white text-sm sm:text-base font-light tracking-[0.1rem]">
              {name}
            </p>
            <div className="flex text-white text-sm sm:text-base text-yellow-400">
              <p>
                <MdOutlineStarPurple500 />
              </p>
              <p>
                <MdOutlineStarPurple500 />
              </p>
              <p>
                <MdOutlineStarPurple500 />
              </p>
              <p>
                <MdOutlineStarPurple500 />
              </p>
              <p>
                <MdOutlineStarPurple500 />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 px-4 sm:px-7 flex-grow flex flex-col justify-between bg-white">
        <h1 className="text-xl md:text-3xl play-fair text-[#1C1C1C] hover:text-[#C19B77] transition-colors">{name}</h1>
        <div className="flex items-center gap-3 mt-4 text-[#ACACAC]">
          <p className="uppercase text-xs md:text-sm font-light flex items-center gap-2 hover:text-[#C19B77] transition-colors">
            <span className="text-base md:text-xl">
              <FaUserGroup />
            </span>{" "}
            {guests} <span className="ml-1 md:ml-2 tracking-[0.2rem]">Guests</span>
          </p>
          <p className="uppercase text-xs md:text-sm font-light flex items-center gap-2 hover:text-[#C19B77] transition-colors">
            <span className="text-base md:text-xl">
              <MdBorderLeft />
            </span>{" "}
            {squareFeet} <span className="ml-1 md:ml-2 tracking-[0.2rem]">ft</span>
          </p>
        </div>
        <div className="my-4 leading-[1.2rem] md:leading-[1.5rem] text-xs md:text-sm text-[#ACACAC] font-light tracking-widest mb-6 md:mb-12">
          <p className="line-clamp-3 hover:line-clamp-none transition-all duration-300">{description}</p>
        </div>
        <div className="mb-6">
          <button className="w-full uppercase text-xs md:text-sm font-semibold tracking-[0.3rem] text-[#C19B77] border-2 border-[#C19B77] px-4 py-2 md:px-8 md:py-3 inline-block hover:bg-[#C19B77] hover:text-white transition-all duration-300 rounded-md">
            Book now
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;