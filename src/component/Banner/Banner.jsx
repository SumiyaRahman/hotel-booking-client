import React from "react";
import "./Banner.css";
import { motion, AnimatePresence } from "framer-motion";

const Banner = () => {
  return (
    <motion.div 
      className="carousel w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Slide 1 */}
      <div id="slide1" className="carousel-item relative w-full min-h-[100vh]">
        <motion.div 
          className="bg-img"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[100vh] flex items-center">
            <motion.div 
              className="w-full text-center"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.p 
                className="uppercase text-[#C19B77] text-xs sm:text-sm font-semibold tracking-[0.3rem] mb-6"
                whileHover={{ scale: 1.1 }}
              >
                Book your room now!
              </motion.p>
              <motion.h1 
                className="play-fair text-3xl sm:text-5xl md:text-7xl font-semibold text-white leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                {["Luxury", "Comfort", "Serenity"].map((word, i) => (
                  <motion.span
                    key={i}
                    className="inline-block mr-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.2 + 1 }}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.h1>
            </motion.div>
          </div>
        </motion.div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <motion.a 
            href="#slide3" 
            className="btn btn-circle bg-[#C19B77]/50 hover:bg-[#C19B77] border-none"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            ❮
          </motion.a>
          <motion.a 
            href="#slide2" 
            className="btn btn-circle bg-[#C19B77]/50 hover:bg-[#C19B77] border-none"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            ❯
          </motion.a>
        </div>
      </div>

      {/* Slide 2 */}
      <div id="slide2" className="carousel-item relative w-full min-h-[100vh]">
        <motion.div 
          className="slide-2"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[100vh] flex items-center">
            <motion.div 
              className="w-full text-center"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.p 
                className="uppercase text-[#C19B77] text-xs sm:text-sm font-semibold tracking-[0.3rem] mb-6"
                whileHover={{ scale: 1.1 }}
              >
                Book your room now!
              </motion.p>
              <motion.h1 
                className="play-fair text-3xl sm:text-5xl md:text-7xl font-semibold text-white leading-tight"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                Experience Ultimate Comfort
              </motion.h1>
            </motion.div>
          </div>
        </motion.div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <motion.a 
            href="#slide1" 
            className="btn btn-circle bg-[#C19B77]/50 hover:bg-[#C19B77] border-none"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            ❮
          </motion.a>
          <motion.a 
            href="#slide3" 
            className="btn btn-circle bg-[#C19B77]/50 hover:bg-[#C19B77] border-none"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            ❯
          </motion.a>
        </div>
      </div>

      {/* Slide 3 */}
      <div id="slide3" className="carousel-item relative w-full min-h-[100vh]">
        <motion.div 
          className="slide-3"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[100vh] flex items-center">
            <motion.div 
              className="w-full text-center"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.p 
                className="uppercase text-[#C19B77] text-xs sm:text-sm font-semibold tracking-[0.3rem] mb-6"
                whileHover={{ scale: 1.1 }}
              >
                Book your room now!
              </motion.p>
              <motion.h1 
                className="play-fair text-3xl sm:text-5xl md:text-7xl font-semibold text-white leading-tight"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Your Perfect Stay Awaits You
              </motion.h1>
            </motion.div>
          </div>
        </motion.div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <motion.a 
            href="#slide2" 
            className="btn btn-circle bg-[#C19B77]/50 hover:bg-[#C19B77] border-none"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            ❮
          </motion.a>
          <motion.a 
            href="#slide1" 
            className="btn btn-circle bg-[#C19B77]/50 hover:bg-[#C19B77] border-none"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            ❯
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default Banner;
