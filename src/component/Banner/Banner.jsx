import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="bg-img">
      <div className="max-w-7xl mx-auto px-5">
        <div className="pt-[200px]">
          <p className="uppercase text-[#C19B77] text-xs font-semibold tracking-[0.3rem]">
            Book your room now!
          </p>
          <h1 className="play-fair text-7xl font-semibold mt-10 leading-[3.5rem] text-white">Luxury</h1>
          <h1 className="play-fair text-7xl font-semibold mt-10 leading-[3.5rem] text-white">Comfort Serenity</h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;   