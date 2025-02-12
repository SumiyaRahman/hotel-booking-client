import React, { useEffect, useState, useContext } from "react";
import AuthContext from "../context/AuthContext"; // Get logged-in user context
import Navbar from "../component/Banner/Navbar";
import Footer from "../component/Footer";
import Modal from "react-modal";
import { MdCancel } from "react-icons/md";
import { MdRateReview } from "react-icons/md";
import { MdSystemSecurityUpdateGood } from "react-icons/md";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

const MyBookings = () => {
  const { user } = useContext(AuthContext); // Current logged-in user
  const [bookings, setBookings] = useState([]); // Store bookings
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(""); // Error state
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const [selectedBooking, setSelectedBooking] = useState(null); // Booking to cancel
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false); // Review Modal
  const [reviewForm, setReviewForm] = useState({ rating: 1, comment: "" }); // Review Form Data
  const [selectedReviewRoom, setSelectedReviewRoom] = useState(null); // Room for Review
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false); // Modal State
  const [updateForm, setUpdateForm] = useState({ checkIn: "", checkOut: "" }); // Form Data

  // Fetch user's bookings
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch(
          `https://hotel-booking-server-one-nu.vercel.app/bookings/${user.uid}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch bookings.");
        }

        const data = await response.json();
        setBookings(data);
      } catch (err) {
        console.error("Error fetching bookings:", err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      fetchBookings();
    }
  }, [user]);

  const openUpdateDateModal = (booking) => {
    setSelectedBooking(booking); // Set selected booking
    setUpdateForm({
      checkIn: booking.checkIn, // Pre-fill with existing check-in date
      checkOut: booking.checkOut, // Pre-fill with existing check-out date
    });
    setIsUpdateModalOpen(true); // Open modal
  };

  const closeUpdateModal = () => {
    setIsUpdateModalOpen(false);
    setSelectedBooking(null);
  };

  const handleDateUpdate = async () => {
    try {
      const response = await fetch(
        `https://hotel-booking-server-one-nu.vercel.app/bookings/${selectedBooking._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            checkIn: updateForm.checkIn,
            checkOut: updateForm.checkOut,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update booking dates.");
      }

      // Update booking in the state
      const updatedBookings = bookings.map((b) =>
        b._id === selectedBooking._id
          ? { ...b, checkIn: updateForm.checkIn, checkOut: updateForm.checkOut }
          : b
      );
      setBookings(updatedBookings);

      alert("Booking dates updated successfully!");
      closeUpdateModal(); // Close modal
    } catch (err) {
      console.error("Error updating booking:", err.message);
      alert("Failed to update booking dates.");
    }
  };

  // Open Confirmation Modal
  const openModal = (booking) => {
    setSelectedBooking(booking);
    setIsModalOpen(true);
  };

  // Close Modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedBooking(null);
  };

  // Cancel Booking
  const handleCancelBooking = async () => {
    if (!selectedBooking) return;
  
    try {
      const response = await fetch(
        `https://hotel-booking-server-one-nu.vercel.app/bookings/${selectedBooking._id}`,
        {
          method: "DELETE",
        }
      );
  
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error || "Failed to cancel booking.");
      }
  
      // Refresh bookings after cancellation
      setBookings(bookings.filter((b) => b._id !== selectedBooking._id));
  
      alert(result.message || "Booking canceled successfully!");
    } catch (err) {
      console.error("Cancel booking failed:", err.message);
      alert(err.message || "Failed to cancel booking.");
    } finally {
      closeModal();
    }
  };
  

  const openReviewModal = (booking) => {
    setSelectedReviewRoom(booking.room); // Set the selected room for review
    setIsReviewModalOpen(true);
  };

  const closeReviewModal = () => {
    setIsReviewModalOpen(false);
    setReviewForm({ rating: 1, comment: "" }); // Reset Form
  };

  const handleReviewSubmit = async () => {
    if (!reviewForm.rating || !reviewForm.comment) {
      alert("All fields are required!");
      return;
    }

    const reviewData = {
      uid: user.uid, // Current user UID
      roomId: selectedReviewRoom._id, // Room ID
      rating: reviewForm.rating,
      comment: reviewForm.comment,
    };

    try {
      const response = await fetch("https://hotel-booking-server-one-nu.vercel.app/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reviewData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit review.");
      }

      alert("Review submitted successfully!");
      closeReviewModal(); // Close modal after submission
    } catch (err) {
      console.error("Error submitting review:", err.message);
      alert("Failed to submit review. Please try again.");
    }
  };

  // Show loading
  if (loading) {
    return <p className="text-center py-10">Loading...</p>;
  }

  // Show error
  if (error) {
    return <p className="text-center py-10 text-red-500">{error}</p>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
        <Helmet>
        <title>Hotel Serenity - My Bookings</title>
        <meta
          name="description"
          content="View and manage your bookings at Hotel Serenity."
        />
        <meta name="keywords" content="bookings, hotel, serenity, manage" />
      </Helmet>
      <Navbar />
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
          My Bookings
        </motion.h1>
        {/* <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-white leading-[1.4rem] mt-4 md:mt-6 text-xs md:text-base font-light tracking-wider w-full lg:w-1/2 mx-auto text-center"
        >
          Get in touch with us for any inquiries or bookings. Our team is here
          to assist you with your stay and provide the best service possible.
        </motion.p> */}
      </motion.div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="py-24"
        >

          {/* Card Layout for Small and Medium Devices */}
          <motion.div 
            className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
          >
            {bookings.map((booking, index) => (
              <motion.div
                key={booking._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {/* Image */}
                <div className="mb-4 overflow-hidden rounded-lg">
                  {booking.room && booking.room.image ? (
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      src={booking.room.image}
                      alt={booking.room.name}
                      className="w-full h-48 object-cover"
                    />
                  ) : (
                    <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-400">No Image</span>
                    </div>
                  )}
                </div>
            
                {/* Room Name and Price */}
                <div className="flex justify-between mb-4">
                  <h3 className="font-semibold text-xl play-fair text-gray-800">{booking.room ? booking.room.name : "Unknown Room"}</h3>
                  <p className="text-[#c19b77] font-medium">${booking.room ? booking.room.price : "N/A"}/night</p>
                </div>
            
                {/* Check-In and Check-Out Dates */}
                <div className="space-y-2 mb-4">
                  <p className="text-gray-600">Check-In: <span className="font-medium">{booking.checkIn}</span></p>
                  <p className="text-gray-600">Check-Out: <span className="font-medium">{booking.checkOut}</span></p>
                </div>
            
                {/* Guests and Total */}
                <div className="flex justify-between mb-6">
                  <p className="text-gray-600">Guests: <span className="font-medium">{booking.guests}</span></p>
                  <p className="text-[#c19b77] font-semibold">Total: ${booking.totalPrice}</p>
                </div>
            
                {/* Action Buttons */}
                <div className="flex justify-around items-center">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => openModal(booking)}
                    className="text-red-500 text-2xl hover:text-red-600 transition-colors"
                  >
                    <MdCancel />
                  </motion.button>
            
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => openReviewModal(booking)}
                    className="text-[#c19b77] text-2xl hover:text-[#a78560] transition-colors"
                  >
                    <MdRateReview />
                  </motion.button>
            
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => openUpdateDateModal(booking)}
                    className="text-green-500 text-2xl hover:text-green-600 transition-colors"
                  >
                    <MdSystemSecurityUpdateGood />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Table Layout for Large and Extra Large Devices */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="hidden lg:block overflow-x-auto rounded-xl shadow-lg"
          >
            <table className="w-full border-collapse bg-white">
              <thead>
                <tr className="bg-gradient-to-r from-[#c19b77] to-[#a78560] text-white">
                  <th className="px-6 py-4 text-left text-sm font-medium">Image</th>
                  <th className="px-6 py-4 text-left text-sm font-medium">Room Name</th>
                  <th className="px-6 py-4 text-left text-sm font-medium">Price</th>
                  <th className="px-6 py-4 text-left text-sm font-medium">Check-In</th>
                  <th className="px-6 py-4 text-left text-sm font-medium">Check-Out</th>
                  <th className="px-6 py-4 text-left text-sm font-medium">Guests</th>
                  <th className="px-6 py-4 text-left text-sm font-medium">Total</th>
                  <th className="px-6 py-4 text-left text-sm font-medium">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {bookings.map((booking, index) => (
                  <motion.tr 
                    key={booking._id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ backgroundColor: "#f9fafb" }}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4">
                      {booking.room && booking.room.image ? (
                        <img
                          src={booking.room.image}
                          alt={booking.room.name}
                          className="h-20 w-20 object-cover rounded-lg shadow-md"
                        />
                      ) : (
                        <span>No Image</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-gray-800 font-medium">
                      {booking.room ? booking.room.name : "Unknown Room"}
                    </td>
                    <td className="px-6 py-4 text-[#c19b77]">
                      ${booking.room ? booking.room.price : "N/A"}/night
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      {booking.checkIn}
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      {booking.checkOut}
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      {booking.guests}
                    </td>
                    <td className="px-6 py-4 text-[#c19b77] font-medium">
                      ${booking.totalPrice}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex space-x-4">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => openModal(booking)}
                          className="text-red-500 text-2xl hover:text-red-600 transition-colors"
                        >
                          <MdCancel />
                        </motion.button>

                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => openReviewModal(booking)}
                          className="text-[#c19b77] text-2xl hover:text-[#a78560] transition-colors"
                        >
                          <MdRateReview />
                        </motion.button>

                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => openUpdateDateModal(booking)}
                          className="text-green-500 text-2xl hover:text-green-600 transition-colors"
                        >
                          <MdSystemSecurityUpdateGood />
                        </motion.button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </motion.div>

        {/* Modals */}
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          className="modal-content bg-white rounded-2xl p-8 max-w-md mx-auto mt-20"
          overlayClassName="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            <h2 className="text-2xl font-bold mb-6 text-center play-fair text-gray-800">Confirm Cancellation</h2>
            <p className="text-center text-gray-600 mb-8">Are you sure you want to cancel this booking?</p>
            <div className="flex justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleCancelBooking}
                className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors"
              >
                Confirm
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={closeModal}
                className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </motion.button>
            </div>
          </motion.div>
        </Modal>

        {/* Review Modal */}
        <Modal
          isOpen={isReviewModalOpen}
          onRequestClose={closeReviewModal}
          className="modal-content bg-white rounded-2xl p-8 max-w-md mx-auto mt-20"
          overlayClassName="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            <h2 className="text-2xl font-bold mb-6 text-center play-fair text-gray-800">Submit Your Review</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">Username</label>
                <input
                  type="text"
                  value={user.email}
                  readOnly
                  className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Rating (1-5)</label>
                <input
                  type="number"
                  min="1"
                  max="5"
                  value={reviewForm.rating}
                  onChange={(e) => setReviewForm({ ...reviewForm, rating: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Comment</label>
                <textarea
                  value={reviewForm.comment}
                  onChange={(e) => setReviewForm({ ...reviewForm, comment: e.target.value })}
                  rows="4"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                ></textarea>
              </div>
              <div className="flex justify-end gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="button"
                  onClick={handleReviewSubmit}
                  className="bg-[#c19b77] text-white px-6 py-2 rounded-lg hover:bg-[#a78560] transition-colors"
                >
                  Submit
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="button"
                  onClick={closeReviewModal}
                  className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </motion.button>
              </div>
            </form>
          </motion.div>
        </Modal>

        {/* Update Date Modal */}
        <Modal
          isOpen={isUpdateModalOpen}
          onRequestClose={closeUpdateModal}
          className="modal-content bg-white rounded-2xl p-8 max-w-md mx-auto mt-20"
          overlayClassName="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            <h2 className="text-2xl font-bold mb-6 text-center play-fair text-gray-800">Update Booking Dates</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">Check-In Date</label>
                <input
                  type="date"
                  value={updateForm.checkIn}
                  onChange={(e) => setUpdateForm({ ...updateForm, checkIn: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Check-Out Date</label>
                <input
                  type="date"
                  value={updateForm.checkOut}
                  onChange={(e) => setUpdateForm({ ...updateForm, checkOut: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="flex justify-end gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="button"
                  onClick={handleDateUpdate}
                  className="bg-[#c19b77] text-white px-6 py-2 rounded-lg hover:bg-[#a78560] transition-colors"
                >
                  Update
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="button"
                  onClick={closeUpdateModal}
                  className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </motion.button>
              </div>
            </form>
          </motion.div>
        </Modal>
      </div>

      <Footer />
    </motion.div>
  );
};

export default MyBookings;
