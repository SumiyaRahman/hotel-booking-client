import React from "react";

const AllRooms = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-between items-center py-20 bg-white">
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
          <a href="#" className="underline text-gray-500 hover:text-gray-800 ">
            libero nec ligula fringilla dictum
          </a>
          sit amet id dui. Integer gravida dolor elit, sit amet vestibulum mi
          elementum eget.
        </p>
        <button className="bg-[#373737] text-white uppercase text-xs font-semibold tracking-[0.3rem] px-8 py-3 hover:bg-gray-700">
          View All
        </button>
      </div>
    </section>
  );
};

export default AllRooms;
