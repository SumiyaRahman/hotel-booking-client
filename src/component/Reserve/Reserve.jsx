import React from "react";
import { BsTelephoneInbound } from "react-icons/bs";
import { motion } from "framer-motion";
import "./Reserve.css";

const Reserve = () => {
  return (
    <section className="bg-reserve py-10">
      <div className="flex flex-col lg:flex-row justify-around items-center play-fair text-white text-lg md:text-2xl md:text-3xl gap-6">
        <div className="text-center lg:text-left">
          <motion.p
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Reserve a Room Now
          </motion.p>
        </div>
        <div className="text-4xl md:text-5xl text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <BsTelephoneInbound />
          </motion.div>
        </div>
        <div className="text-center lg:text-left">
          <motion.p
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Direct Call +2 245 678 910
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Reserve;
