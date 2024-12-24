import React from "react";
import { BsTelephoneInbound } from "react-icons/bs";
import "./Reserve.css";

const Reserve = () => {
  return (
    <section className="bg-reserve py-10">
      <div className="flex flex-col lg:flex-row justify-around items-center play-fair text-white text-2xl md:text-3xl gap-6">
      <div className="text-center lg:text-left">
        <p>Reserve a Room Now</p>
      </div>
      <div className="text-4xl md:text-5xl text-center lg:text-left">
        <BsTelephoneInbound />
      </div>
      <div className="text-center lg:text-left">
        <p>Direct Call +2 245 678 910</p>
      </div>
      </div>
    </section>
  );
};

export default Reserve;
