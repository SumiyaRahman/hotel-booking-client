import React from "react";
import garden from "../assets/Images/Room Images/garden view.jpg";
import honey from "../assets/Images/Room Images/honeymoon suite.jpg";
import ocean from "../assets/Images/Room Images/ocean view.jpg";
import cabana from "../assets/Images/Room Images/cabana room.jpg";
import deluxe from "../assets/Images/Room Images/deluxe suite.jpg";
import family from "../assets/Images/Room Images/family suite.jpg";
import loft from "../assets/Images/Room Images/loft room.jpg";
import studio from "../assets/Images/Room Images/studio room.jpg";
import twin from "../assets/Images/Room Images/twin room.jpg";
import Navbar from "../component/Banner/Navbar";
import Footer from "../component/Footer";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

const Gallery = () => {
  return (
    <div>
      <Helmet>
        <title>Hotel Serenity - Gallery</title>
        <meta
          name="description"
          content="Explore our gallery to see the beautiful rooms and amenities of Hotel Serenity."
        />
        <meta name="keywords" content="gallery, hotel, rooms, amenities" />
      </Helmet>

      <Navbar></Navbar>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.66), rgba(0, 0, 0, 0.37)), url('https://images.pexels.com/photos/2869215/pexels-photo-2869215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
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
          Explore Our Gallery
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-white leading-[1.4rem] mt-4 md:mt-6 text-xs md:text-base font-light tracking-wider w-full lg:w-1/2 mx-auto text-center"
        >
          Discover the elegance and comfort of our carefully designed rooms
          and suites
        </motion.p>
      </motion.div>
      <div className="max-w-7xl mx-auto px-5 pt-32">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4"
        >
          {[
            garden,
            honey,
            ocean,
            cabana,
            deluxe,
            family,
            loft,
            studio,
            twin,
          ].map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={image}
                alt={`Room ${index + 1}`}
                className="w-full h-[300px] object-cover transform transition-transform duration-500 hover:scale-110"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Gallery;
