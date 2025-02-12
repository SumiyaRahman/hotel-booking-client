import React from "react";
import Navbar from "../component/Banner/Navbar";
import about from "../assets/Images/Images/about.jpg";
import { GiHouseKeys } from "react-icons/gi";
import Footer from "../component/Footer";
import manager from "../assets/Images/Images/manager.jpg"
import sign from "../assets/Images/Images/sign.png"
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
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
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
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
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="uppercase play-fair text-4xl md:text-6xl leading-[4rem] text-white mt-2"
        >
          About Us
        </motion.h1>
        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-white leading-[1.4rem] mt-4 md:mt-6 text-xs md:text-base font-light tracking-wider w-full lg:w-1/2 mx-auto text-center"
        >
          Discover comfort and luxury at our hotel, where hospitality meets
          elegance. Experience a stay like never before with world-class
          amenities and services.
        </motion.p>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="flex flex-col xl:flex-row justify-center items-center gap-20 py-[100px] px-10"
      >
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="xl:relative w-full xl:w-2/5"
        >
          <motion.img 
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="w-full" 
            src={about} 
          />
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="xl:absolute bg-[#C19B77] w-full xl:w-60 text-center right-[-50px] top-[100px]"
          >
            <div className="flex justify-center py-5">
              <motion.p whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
                <GiHouseKeys className="text-white text-7xl" />
              </motion.p>
            </div>
            <motion.h1 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4, delay: 1 }}
              className="text-6xl font-semibold text-white play-fair mb-4"
            >
              +70
            </motion.h1>
            <p className="text-sm tracking-[0.2rem] text-white font-medium pb-9 uppercase">
              Rooms
            </p>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="w-full xl:w-3/5"
        >
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1 }}
            className="tracking-[0.5rem] text-xs font-medium text-[#C19B77] mb-6"
          >
            INN & SUITES
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.2 }}
            className="play-fair text-3xl md:text-5xl leading-[3rem] md:leading-[4rem] mb-5 text-[#1C1C1C]"
          >
            The Best Accommodation
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.4 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          >
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
          </motion.div>
          <motion.hr 
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="my-10" 
          />
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.8 }}
            className="flex flex-col md:flex-row items-center gap-5"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex gap-6"
            >
                <div>
                    <motion.img 
                      whileHover={{ scale: 1.1 }}
                      className="w-[70px] h-[70px] rounded-full" 
                      src={manager}  
                    />
                </div>
                <div>
                    <p className="play-fair font-medium tracking-[0.2rem] mb-3 text-lg">Ava Grant</p>
                    <small className="uppercase tracking-[0.2rem] text-xs">Hotel Manager</small>
                </div>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
                <img className="w-[400px]" src={sign} />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
      <Footer></Footer>
    </motion.div>
  );
};

export default About;
