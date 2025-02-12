import React from "react";
import { FaFacebook, FaPinterest, FaTwitter } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { LuClockAlert } from "react-icons/lu";
import { MdOutlineMarkEmailUnread, MdOutlinePhoneInTalk } from "react-icons/md";
import garden from '../assets/Images/Room Images/garden view.jpg'
import honey from '../assets/Images/Room Images/honeymoon suite.jpg'
import ocean from '../assets/Images/Room Images/ocean view.jpg'
import family from '../assets/Images/Room Images/family suite.jpg'
import deluxe from '../assets/Images/Room Images/deluxe suite.jpg'
import loft from '../assets/Images/Room Images/loft room.jpg'
import cabana from '../assets/Images/Room Images/cabana room.jpg'
import studio from '../assets/Images/Room Images/studio room.jpg'
import twin from '../assets/Images/Room Images/twin room.jpg'
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="mt-[100px]">
      <footer className="bg-gradient-to-b from-[#373737] to-[#2D2D2D] text-white">
        <div className="max-w-7xl mx-auto">
          {/* Top Wave Design */}
          <div className="h-16 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNDQwIDMyMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+PHBhdGggZmlsbD0iI0JBOEE3MCIgZD0iTTAgMGgxNDQwdjE2MEwwIDMyMHoiLz48L3N2Zz4=')] bg-cover"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 py-16 md:py-[100px] px-6 md:px-10">
            {/* About Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="transform hover:scale-105 transition duration-300"
            >
              <h4 className="play-fair text-2xl tracking-[0.1rem] text-[#BA8A70] mb-6">About Us</h4>
              <p className="py-3 md:py-5 font-light tracking-wider leading-[1.3rem] md:leading-[1.7rem] text-xs md:text-sm hover:text-[#BA8A70] transition-colors duration-300">
                At Hotel Serenity, we are dedicated to offering you a luxurious and comfortable experience. Our team strives to provide personalized service and world-class amenities, making your stay unforgettable.
              </p>
              <div className="bg-[#BA8A70] inline-block px-4 py-3 rounded-lg shadow-lg transform hover:translate-y-[-5px] transition duration-300">
                <ul className="flex gap-6 text-white text-lg">
                  <motion.li whileHover={{ scale: 1.2 }}>
                    <a className="cursor-pointer hover:text-[#373737] transition-colors duration-300" href="https://www.facebook.com" target="_blank">
                      <FaFacebook />
                    </a>
                  </motion.li>
                  <motion.li whileHover={{ scale: 1.2 }}>
                    <a className="cursor-pointer hover:text-[#373737] transition-colors duration-300" href="https://www.twitter.com" target="_blank">
                      <FaTwitter />
                    </a>
                  </motion.li>
                  <motion.li whileHover={{ scale: 1.2 }}>
                    <a className="cursor-pointer hover:text-[#373737] transition-colors duration-300" href="https://www.pinterest.com" target="_blank">
                      <FaPinterest />
                    </a>
                  </motion.li>
                </ul>
              </div>
            </motion.div>

            {/* Contact Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="transform hover:scale-105 transition duration-300"
            >
              <h4 className="play-fair text-2xl tracking-[0.1rem] text-[#BA8A70] mb-6">All Contacts</h4>
              <ul className="space-y-6 mt-5">
                <motion.li whileHover={{ x: 10 }} className="flex items-center text-sm md:text-base font-light tracking-wider gap-4 hover:text-[#BA8A70] transition-colors duration-300">
                  <span className="text-xl text-[#BA8A70]"><IoLocationOutline /></span>
                  <span>111 8th Ave, New York U.S.A.</span>
                </motion.li>
                <motion.li whileHover={{ x: 10 }} className="flex items-center text-sm md:text-base font-light tracking-wider gap-4 hover:text-[#BA8A70] transition-colors duration-300">
                  <span className="text-xl text-[#BA8A70]"><MdOutlinePhoneInTalk /></span>
                  <span>Reserve +1-202-555-0153</span>
                </motion.li>
                <motion.li whileHover={{ x: 10 }} className="flex items-center text-sm md:text-base font-light tracking-wider gap-4 hover:text-[#BA8A70] transition-colors duration-300">
                  <span className="text-xl text-[#BA8A70]"><MdOutlineMarkEmailUnread /></span>
                  <span>serenestay@gmail.com</span>
                </motion.li>
                <motion.li whileHover={{ x: 10 }} className="flex items-center text-sm md:text-base font-light tracking-wider gap-4 hover:text-[#BA8A70] transition-colors duration-300">
                  <span className="text-xl text-[#BA8A70]"><LuClockAlert /></span>
                  <span>08 am - 06 pm Sunday closed</span>
                </motion.li>
              </ul>
            </motion.div>

            {/* Subscribe Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="transform hover:scale-105 transition duration-300"
            >
              <h4 className="play-fair text-2xl tracking-[0.1rem] text-[#BA8A70] mb-6">Subscribe</h4>
              <p className="py-3 md:py-5 font-light tracking-wider leading-[1.3rem] md:leading-[1.7rem] text-xs md:text-sm hover:text-[#BA8A70] transition-colors duration-300">
                Stay up to date with the latest offers and news from Hotel Serenity. Subscribe to our newsletter for exclusive deals.
              </p>
              <div className="space-y-4">
                <input
                  className="w-full px-4 py-3 rounded-lg bg-[#2D2D2D] border border-[#BA8A70] focus:outline-none focus:ring-2 focus:ring-[#BA8A70] text-sm transition duration-300"
                  placeholder="Insert Your Email"
                  type="email"
                />
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-3 px-8 bg-[#BA8A70] rounded-lg uppercase tracking-[0.2rem] text-sm hover:bg-[#9d7660] transition duration-300 shadow-lg"
                >
                  Subscribe
                </motion.button>
              </div>
            </motion.div>

            {/* Gallery Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="transform hover:scale-105 transition duration-300"
            >
              <h4 className="play-fair text-2xl tracking-[0.1rem] text-[#BA8A70] mb-6">Gallery</h4>
              <div className="grid grid-cols-3 gap-3">
                {[garden, honey, ocean, family, deluxe, loft, cabana, studio, twin].map((img, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    className="overflow-hidden rounded-lg"
                  >
                    <img src={img} className="w-full h-20 object-cover hover:opacity-80 transition duration-300" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Copyright Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="py-4 px-6 bg-[#2D2D2D] border-t border-[#BA8A70]/30"
        >
          <p className="text-center text-sm font-light tracking-wider text-[#BA8A70]">
            &copy; {new Date().getFullYear()} Hotel Serene Stays - All Rights Reserved
          </p>
        </motion.div>
      </footer>
    </div>
  );
};

export default Footer;
