import React from "react";
import { FaUserGroup } from "react-icons/fa6";
import { MdBorderLeft } from "react-icons/md";
import { MdOutlineStarPurple500 } from "react-icons/md";

const AllRoomShowcase = ({ room }) => {
  const { name, image, guests, squareFeet, price, description } = room;

  return (
    <div className="border flex flex-col h-full">
      <div
        className="h-64 w-full bg-cover bg-center relative"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="bg-black bg-opacity-40 h-full w-full flex flex-col justify-end text-white relative">
          <div className="flex items-center gap-2 p-6">
            <p className="text-white text-sm font-light tracking-[0.1rem]">
              {name}
            </p>
            <div className="flex text-white text-sm">
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
      <div className="mt-6 px-7 flex-grow flex flex-col justify-between">
        <h1 className="text-3xl play-fair text-[#1C1C1C]">{name}</h1>
        <div className="flex items-center gap-3 mt-4 text-[#ACACAC]">
          <p className="uppercase text-sm font-light flex items-center gap-2">
            <span className="text-xl">
              <FaUserGroup />
            </span>{" "}
            {guests} <span className="ml-2 tracking-[0.2rem]">Guests</span>
          </p>
          <p className="uppercase text-sm font-light flex items-center gap-2">
            <span className="text-xl">
              <MdBorderLeft />
            </span>{" "}
            {squareFeet} <span className="ml-2 tracking-[0.2rem]">ft</span>
          </p>
        </div>
        <div className="my-4 leading-[1.5rem] text-sm text-[#ACACAC] font-light tracking-widest mb-12">
          <p>{description}</p>
        </div>
        <div className="mb-6">
          <p className="uppercase text-xs font-semibold tracking-[0.2rem] bg-[#C19B77] text-white border-2 border-[#C19B77] px-8 py-3 inline-block">
            Price {price} $
          </p>
        </div>
      </div>
    </div>
  );
};

export default AllRoomShowcase;
