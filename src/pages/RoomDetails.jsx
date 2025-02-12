import React, { useEffect, useState, useContext } from "react";
import { MdBorderLeft } from "react-icons/md";
import { MdOutlineBalcony } from "react-icons/md";
import { useParams } from "react-router-dom"; // <-- Use params to get ID from URL
import Navbar from "../component/Banner/Navbar";
import Footer from "../component/Footer";
import AuthContext from "../context/AuthContext";
import BookingWidget from "../component/BookingWidget";
import { IoBedOutline, IoWifiOutline } from "react-icons/io5";
import { IoTvOutline } from "react-icons/io5";
import { BiDollar } from "react-icons/bi";
import deluxe from "../assets/Images/Room Images/deluxe suite.jpg";
import honey from "../assets/Images/Room Images/honeymoon suite.jpg";
import { HiOutlineUsers } from "react-icons/hi";
import { IoDocumentAttachOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const RoomDetails = () => {
  const { user } = useContext(AuthContext);
  const uid = user?.uid;
  const { id } = useParams(); // <-- Get room ID from URL
  const [room, setRoom] = useState(null); // State for storing room data
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true); // State for loading indicator
  const [error, setError] = useState(null); // State for error handling

  // Fetch room details
  useEffect(() => {
    const fetchRoomDetails = async () => {
      try {
        const response = await fetch(
          `https://hotel-booking-server-one-nu.vercel.app/rooms/${id}/details`
        ); // Correct endpoint

        if (!response.ok) {
          throw new Error("Failed to fetch room details.");
        }

        const data = await response.json();
        setRoom(data.room); // Set room details
        setReviews(data.reviews); // Set reviews from response
        setLoading(false);
      } catch (err) {
        console.error("Error fetching room details:", err.message);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchRoomDetails(); // Call fetch function
  }, [id]); // Dependency: re-fetch if ID changes

  // Show loading state
  if (loading) {
    return <p className="text-center py-10">Loading...</p>;
  }

  // Show error if fetch fails
  if (error) {
    return <p className="text-center py-10 text-red-500">Error: {error}</p>;
  }

  // Destructure room data if available
  const { _id, name, image, description, guests, squareFeet, price, features } =
    room || {};

  return (
    <section>
      <div className="max-w-7xl mx-auto py-5 px-5">
        <Navbar></Navbar>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)), url('${image || "https://images.pexels.com/photos/2869215/pexels-photo-2869215.jpeg"}')`,
          height: "70vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed"
        }}
        className="flex flex-col justify-center items-center px-5"
      >
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="uppercase play-fair text-5xl md:text-7xl leading-[4rem] text-white mt-2 text-center font-bold"
        >
          {name || "Room Details"}
        </motion.h1>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto py-20 px-5"
      >
        <div>
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl play-fair font-semibold mb-4 text-gray-800"
          >
            {name}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-600 font-light text-base md:text-lg tracking-wide leading-relaxed"
          >
            {description}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col xl:flex-row gap-12 mt-12"
          >
            {/* Image and Main Content */}
            <div className="w-full xl:w-2/3">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl overflow-hidden shadow-2xl"
              >
                <img src={image} alt={name} className="w-full h-[500px] object-cover" />
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12 bg-gray-50 p-8 rounded-xl shadow-lg"
              >
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center justify-center space-x-4 p-4 bg-white rounded-lg shadow"
                >
                  <HiOutlineUsers className="text-3xl text-[#C19B77]" />
                  <span className="text-gray-700 font-medium tracking-wide">{guests} Guests</span>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center justify-center space-x-4 p-4 bg-white rounded-lg shadow"
                >
                  <MdBorderLeft className="text-3xl text-[#C19B77]" />
                  <span className="text-gray-700 font-medium tracking-wide">{squareFeet} ft²</span>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center justify-center space-x-4 p-4 bg-white rounded-lg shadow"
                >
                  <BiDollar className="text-3xl text-[#C19B77]" />
                  <span className="text-gray-700 font-medium tracking-wide">${price}/night</span>
                </motion.div>
              </motion.div>

              <hr className="my-12 border-gray-200" />

              {/* Room Services */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-4xl play-fair font-semibold mb-8 text-gray-800">Room Services</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {features?.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                      className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all"
                    >
                      <span className="text-4xl text-[#C19B77] mb-4">
                        {index === 0 && <IoBedOutline />}
                        {index === 1 && <IoWifiOutline />}
                        {index === 2 && <MdOutlineBalcony />}
                        {index === 3 && <IoTvOutline />}
                      </span>
                      <span className="text-gray-700 text-center font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <hr className="my-12 border-gray-200" />

              {/* Reviews Section */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mt-12"
              >
                <h2 className="text-4xl play-fair font-semibold mb-8 text-gray-800">Guest Reviews</h2>
                {reviews.length > 0 ? (
                  <div className="grid gap-6">
                    {reviews.map((review, index) => (
                      <motion.div
                        key={review._id}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.01 }}
                        className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all"
                      >
                        <div className="flex items-center mb-4">
                          <div className="flex text-[#C19B77]">
                            {[...Array(review.rating)].map((_, i) => (
                              <span key={i}>★</span>
                            ))}
                          </div>
                          <span className="ml-2 text-gray-600">{review.rating}/5</span>
                        </div>
                        <p className="text-gray-700 leading-relaxed">{review.comment}</p>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 italic text-center p-8 bg-gray-50 rounded-xl">
                    No reviews available for this room yet.
                  </p>
                )}
              </motion.div>
            </div>

            {/* Sidebar */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="w-full xl:w-1/3 space-y-12"
            >
              <div className="sticky top-8">
                <BookingWidget room={room} uid={uid} />

                {/* Best Rooms */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="mt-12 bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl shadow-lg border border-gray-100"
                >
                  <h2 className="text-3xl play-fair font-semibold mb-8 text-gray-800 border-b pb-4">Best Rooms</h2>
                  <div className="space-y-6">
                    {[
                      { img: deluxe, name: "Deluxe Room", price: "400" },
                      { img: honey, name: "Honeymoon Suite", price: "300" }
                    ].map((room, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.02 }}
                        className="flex items-center gap-6 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                      >
                        <img src={room.img} alt={room.name} className="w-32 h-24 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow" />
                        <div>
                          <h3 className="text-xl play-fair text-gray-800 font-medium">{room.name}</h3>
                          <p className="text-[#C19B77] font-semibold my-2">${room.price}/night</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Documents */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="mt-12 bg-white p-8 rounded-xl shadow-lg"
                >
                  <h2 className="text-3xl play-fair font-semibold mb-8 text-gray-800">Documents</h2>
                  <div className="space-y-4">
                    {[
                      { bg: "#c19b77", text: "Conditions of Hospitality" },
                      { bg: "#393939", text: "Fire Rules of the Hotel" },
                      { bg: "#c19b77", text: "Seasonal Room Rates" }
                    ].map((doc, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ x: 10 }}
                        className="flex items-center gap-6 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <div style={{ backgroundColor: doc.bg }} className="p-3 rounded-lg">
                          <IoDocumentAttachOutline className="text-xl text-white" />
                        </div>
                        <p className="text-gray-700 font-medium">{doc.text}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Around The Hotel */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h2 className="text-4xl play-fair font-semibold mb-12 text-gray-800">Around The Hotel</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { class: "spa", title: "Wellness Spa" },
              { class: "coffee", title: "Coffee Corner" },
              { class: "pool", title: "Pool Side" },
              { class: "dining", title: "Dining" },
              { class: "juice", title: "Juice Bar" },
              { class: "wedding", title: "Wedding Hall" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className={`${item.class} relative h-[300px] rounded-xl overflow-hidden shadow-xl`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <h3 className="absolute bottom-0 left-0 text-white play-fair text-2xl font-semibold p-6">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
      <Footer />
    </section>
  );
};

export default RoomDetails;
