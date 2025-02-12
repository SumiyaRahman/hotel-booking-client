import React from "react";
import Navbar from "../component/Banner/Navbar";
import { useNavigate } from "react-router-dom";
import Footer from "../component/Footer";
import { motion } from "framer-motion";

const Contact = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-b from-white to-[#f8f4f1]"
    >
      <div className="mx-auto max-w-7xl">
        <Navbar></Navbar>
      </div>
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
          Contact
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-white leading-[1.4rem] mt-4 md:mt-6 text-xs md:text-base font-light tracking-wider w-full lg:w-1/2 mx-auto text-center"
        >
          Get in touch with us for any inquiries or bookings. Our team is here
          to assist you with your stay and provide the best service possible.
        </motion.p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-24"
      >
        <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5"
          >
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="tracking-[0.5rem] text-xs font-medium text-[#C19B77] mb-6"
            >
              RESERVE A ROOM
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="play-fair text-4xl md:text-5xl font-semibold text-[#373737]"
            >
              Get In Touch
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-[#ACACAC] text-sm font-light tracking-[0.1rem] leading-[1.6rem] my-10"
            >
              Our team is always ready to assist you with any questions or
              concerns you may have. Whether you're planning a stay with us or
              simply need more information, don't hesitate to reach out. We are
              here to make your experience exceptional and ensure you have
              everything you need. Get in touch with us, and we'll be happy to
              help you with your booking, special requests, or any other
              inquiries you may have.
            </motion.p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/rooms")}
              className="bg-[#373737] text-white uppercase text-xs font-semibold tracking-[0.3rem] px-8 py-3 hover:bg-gray-700 transition-all duration-300 rounded-full shadow-lg hover:shadow-xl"
            >
              View All
            </motion.button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white p-8 rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300"
          >
            <form className="space-y-6">
              <div className="relative">
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="w-full bg-gray-50 border-none rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-[#C19B77] placeholder:text-gray-400 transition-all duration-300 text-gray-700"
                />
              </div>

              <div className="relative">
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  name="email" 
                  placeholder="Email"
                  className="w-full bg-gray-50 border-none rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-[#C19B77] placeholder:text-gray-400 transition-all duration-300 text-gray-700"
                />
              </div>

              <div className="relative">
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  name="message"
                  placeholder="Message"
                  className="w-full bg-gray-50 border-none rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-[#C19B77] placeholder:text-gray-400 transition-all duration-300 h-40 resize-none text-gray-700"
                ></motion.textarea>
              </div>

              <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: '#a78560' }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-[#C19B77] text-white py-4 px-8 rounded-lg play-fair uppercase tracking-[0.1rem] text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Send Message</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>
      <Footer></Footer>
    </motion.div>
  );
};

export default Contact;
