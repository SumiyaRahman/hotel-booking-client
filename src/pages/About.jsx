import React from "react";
import Navbar from "../component/Banner/Navbar";

const About = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `linear-gradient(to top, 
                     rgba(0, 0, 0, 0.66),rgba(0, 0, 0, 0.37)),
                    url('https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
          height: "60vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <Navbar></Navbar>
        </div>
        <h1 className="play-fair text-7xl leading-[4rem] mt-40 text-white text-center">
          About Us
        </h1>
      </div>
    </div>
  );
};

export default About;
