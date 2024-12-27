import React from "react";
import Navbar from "../component/Banner/Navbar";
import about from "../assets/Images/Images/about.jpg";
import { GiHouseKeys } from "react-icons/gi";
import Footer from "../component/Footer";
import manager from "../assets/Images/Images/manager.jpg"
import sign from "../assets/Images/Images/sign.png"
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <div>
        <Helmet>
        <title>Hotel Serenity - About Us</title>
        <meta
          name="description"
          content="Learn more about Hotel Serenity, where luxury meets comfort."
        />
        <meta name="keywords" content="about, hotel, serenity, luxury, comfort" />
      </Helmet>
      <div className="mx-auto max-w-7xl">
        <Navbar></Navbar>
      </div>
      <div
        style={{
          backgroundImage: `linear-gradient(to top, 
                     rgba(0, 0, 0, 0.66),rgba(0, 0, 0, 0.37)),
                    url('https://images.pexels.com/photos/2869215/pexels-photo-2869215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
          height: "60vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="flex flex-col justify-center items-center px-5"
      >
        <h1 className="uppercase play-fair text-4xl md:text-6xl leading-[4rem] text-white mt-2">
          About Us
        </h1>
        {/* Subtitle */}
        <p className="text-white leading-[1.4rem] mt-4 md:mt-6 text-xs md:text-base font-light tracking-wider w-full lg:w-1/2 mx-auto text-center">
          Discover comfort and luxury at our hotel, where hospitality meets
          elegance. Experience a stay like never before with world-class
          amenities and services.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row justify-center items-center gap-20 py-[100px] px-10">
        <div className="xl:relative w-full xl:w-2/5">
          <img className="w-full" src={about} />
          <div className="xl:absolute bg-[#C19B77] w-full xl:w-60 text-center right-[-50px] top-[100px]">
            <div className="flex justify-center py-5">
              <p>
                <GiHouseKeys className="text-white text-7xl" />
              </p>
            </div>
            <h1 className="text-6xl font-semibold text-white play-fair mb-4">
              +70
            </h1>
            <p className="text-sm tracking-[0.2rem] text-white font-medium pb-9 uppercase">
              Rooms
            </p>
          </div>
        </div>

        <div className="w-full xl:w-3/5">
          <p className="tracking-[0.5rem] text-xs font-medium text-[#C19B77] mb-6">
            INN & SUITES
          </p>
          <h1 className="play-fair text-3xl md:text-5xl leading-[3rem] md:leading-[4rem] mb-5 text-[#1C1C1C]">
            The Best Accommodation
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <p className="leading-[1.5rem] md:leading-[1.9rem] text-xs md:text-sm text-[#ACACAC] font-light tracking-widest">
              At Hotel Serenity, we believe in creating a peaceful sanctuary for our guests. Whether you are here for a romantic getaway or a family vacation, our rooms offer the perfect blend of comfort, luxury, and modern amenities.
              </p>
            </div>
            <div>
              <p className="leading-[1.5rem] md:leading-[1.9rem] text-xs md:text-sm text-[#ACACAC] font-light tracking-widest">
              Indulge in exceptional service and a serene atmosphere, all designed to meet your needs and exceed your expectations. From spacious suites to top-tier dining, your experience at Hotel Serenity will be one to remember.
              </p>
            </div>
            <div>
              <p className="leading-[1.5rem] md:leading-[1.9rem] text-xs md:text-sm text-[#ACACAC] font-light tracking-widest">
              Whether you're here to relax or explore the surroundings, Hotel Serenity offers a range of services to suit every guest. Discover the true meaning of luxury and relaxation.
              </p>
            </div>
            <div>
              <p className="leading-[1.5rem] md:leading-[1.9rem] text-xs md:text-sm text-[#ACACAC] font-light tracking-widest">
              Our dedicated staff is here to assist you, ensuring a seamless experience from check-in to check-out. Experience world-class hospitality that will make you feel right at home.
              </p>
            </div>
          </div>
          <hr className="my-10" />
          <div className="flex flex-col md:flex-row items-center gap-5">
            <div className="flex gap-6">
                <div>
                    <img className="w-[70px] h-[70px] rounded-full" src={manager}  />
                </div>
                <div>
                    <p className="play-fair font-medium tracking-[0.2rem] mb-3 text-lg">Ava Grant</p>
                    <small className="uppercase tracking-[0.2rem] text-xs">Hotel Manager</small>
                </div>
            </div>
            <div>
                <img className="w-[400px]" src={sign} />
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default About;
