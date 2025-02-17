import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Modal from "react-modal";
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { motion } from 'framer-motion';

// Modal styles
const customStyles = {
  content: {
    width: "50%",
    margin: "auto",
    borderRadius: "10px",
    padding: "20px",
  },
};

Modal.setAppElement("#root"); // Accessibility for modal

const BookingWidget = ({ room, uid }) => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(1);
  const [nights, setNights] = useState(1);
  const navigate = useNavigate();

  const bookingMutation = useMutation({
    mutationFn: (bookingData) => {
      return axios.post('https://hotel-booking-server-one-nu.vercel.app/bookings', bookingData);
    }
  });

  const handleBooking = () => {
    if (!uid) {
      navigate('/login');
      return;
    }
    
    bookingMutation.mutate({
      roomId: room._id,
      userId: uid,
      checkIn,
      checkOut,
      guests,
      nights,
      totalPrice: room.price * nights
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-[#1C1C1C] to-[#2C2C2C] text-white p-4 md:p-8 rounded-2xl shadow-2xl border border-[#C19B77]/20 backdrop-blur-sm"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="group transition-all duration-300"
        >
          <h3 className="text-gray-400 mb-2 tracking-wider text-sm">CHECK-IN</h3>
          <div className="text-3xl md:text-4xl font-light group-hover:text-[#C19B77] transition-colors">
            {checkIn ? new Date(checkIn).getDate() : '27'}
            <span className="text-[#C19B77] text-lg md:text-xl ml-2 group-hover:text-white">
              {checkIn ? new Date(checkIn).toLocaleString('default', { month: 'short' }) : 'Dec'}
            </span>
          </div>
          <input
            type="date"
            className="mt-3 w-full bg-[#2C2C2C]/50 text-white p-3 rounded-lg border border-gray-700/50 focus:border-[#C19B77] focus:ring-1 focus:ring-[#C19B77] transition-all outline-none hover:bg-[#2C2C2C]"
            onChange={(e) => setCheckIn(e.target.value)}
          />
        </motion.div>
        
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="group transition-all duration-300"
        >
          <h3 className="text-gray-400 mb-2 tracking-wider text-sm">CHECK-OUT</h3>
          <div className="text-3xl md:text-4xl font-light group-hover:text-[#C19B77] transition-colors">
            {checkOut ? new Date(checkOut).getDate() : '28'}
            <span className="text-[#C19B77] text-lg md:text-xl ml-2 group-hover:text-white">
              {checkOut ? new Date(checkOut).toLocaleString('default', { month: 'short' }) : 'Dec'}
            </span>
          </div>
          <input
            type="date"
            className="mt-3 w-full bg-[#2C2C2C]/50 text-white p-3 rounded-lg border border-gray-700/50 focus:border-[#C19B77] focus:ring-1 focus:ring-[#C19B77] transition-all outline-none hover:bg-[#2C2C2C]"
            onChange={(e) => setCheckOut(e.target.value)}
          />
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="group transition-all duration-300"
        >
          <h3 className="text-gray-400 mb-2 tracking-wider text-sm">GUESTS</h3>
          <div className="text-3xl md:text-4xl font-light group-hover:text-[#C19B77] transition-colors">
            {guests}
            <span className="text-[#C19B77] text-lg md:text-xl ml-2 group-hover:text-white">person</span>
          </div>
          <input
            type="number"
            min="1"
            max={room?.guests || 1}
            className="mt-3 w-full bg-[#2C2C2C]/50 text-white p-3 rounded-lg border border-gray-700/50 focus:border-[#C19B77] focus:ring-1 focus:ring-[#C19B77] transition-all outline-none hover:bg-[#2C2C2C]"
            value={guests}
            onChange={(e) => setGuests(parseInt(e.target.value) || 1)}
          />
        </motion.div>
        
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="group transition-all duration-300"
        >
          <h3 className="text-gray-400 mb-2 tracking-wider text-sm">NIGHTS</h3>
          <div className="text-3xl md:text-4xl font-light group-hover:text-[#C19B77] transition-colors">
            {nights}
            <span className="text-[#C19B77] text-lg md:text-xl ml-2 group-hover:text-white">nights</span>
          </div>
          <input
            type="number"
            min="1"
            className="mt-3 w-full bg-[#2C2C2C]/50 text-white p-3 rounded-lg border border-gray-700/50 focus:border-[#C19B77] focus:ring-1 focus:ring-[#C19B77] transition-all outline-none hover:bg-[#2C2C2C]"
            value={nights}
            onChange={(e) => setNights(parseInt(e.target.value) || 1)}
          />
        </motion.div>
      </div>

      <motion.div 
        className="relative group"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-[#C19B77] to-[#a78560] rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
        <button
          onClick={handleBooking}
          disabled={bookingMutation.isPending || !checkIn || !checkOut || guests < 1 || nights < 1}
          className="relative w-full bg-gradient-to-r from-[#C19B77] to-[#a78560] text-white py-3 md:py-4 rounded-lg text-base md:text-lg font-medium tracking-wider hover:from-[#a78560] hover:to-[#C19B77] transition-all duration-500 disabled:from-gray-500 disabled:to-gray-600"
        >
          {bookingMutation.isPending ? 'BOOKING...' : 'BOOK NOW'}
        </button>
      </motion.div>

      {bookingMutation.isError && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-red-500 text-sm mt-4 text-center"
        >
          {bookingMutation.error?.response?.data?.message || 'Something went wrong. Please try again.'}
        </motion.p>
      )}

      {bookingMutation.isSuccess && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-green-500 text-sm mt-4 text-center"
        >
          Booking successful! Redirecting to your bookings...
        </motion.p>
      )}
    </motion.div>
  );
};

export default BookingWidget;
