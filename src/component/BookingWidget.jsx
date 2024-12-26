import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Modal from "react-modal";

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
  const [formData, setFormData] = useState({
    checkIn: "27",
    checkOut: "28",
    guests: "1",
    nights: "1",
  });
  const [checkInDate, setCheckInDate] = useState(new Date()); // Default: Today
  const [checkOutDate, setCheckOutDate] = useState(new Date()); // Default: Today
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const confirmBooking = async () => {
    setLoading(true);

    // Validate Dates Before Sending
    if (!checkInDate || !checkOutDate) {
      setError("Please select valid check-in and check-out dates.");
      setLoading(false);
      return;
    }

    const bookingDetails = {
      uid, // Firebase UID
      roomId: room._id, // Room ID
      checkIn: checkInDate.toISOString().split("T")[0], // Format Date for Backend
      checkOut: checkOutDate.toISOString().split("T")[0], // Format Date for Backend
      guests: formData.guests,
      totalPrice: room.price * formData.nights, // Calculate total price
    };

    try {
      const response = await fetch("http://localhost:5000/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingDetails),
      });

      // Handle Backend Errors for Availability
      if (!response.ok) {
        const errorData = await response.json(); // Parse error message from backend
        throw new Error(errorData.error || "Booking failed!");
      }

      // Success Case
      const data = await response.json();
      console.log("Booking confirmed:", data);
      alert("Booking Confirmed!");
      closeModal(); // Close modal after confirmation
    } catch (err) {
      console.error("Booking failed:", err.message);
      setError(err.message || "Failed to confirm booking. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          openModal();
        }}
        className="bg-[#1C1C1C] p-8 mx-auto text-center play-fair"
      >
        {/* Row 1: Check-In and Check-Out */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-[#333333] p-6">
            <p className="text-xs text-gray-400 tracking-widest mb-2">
              CHECK-IN
            </p>
            <input
              type="number"
              name="checkIn"
              value={formData.checkIn}
              onChange={handleChange}
              min="1"
              max="31"
              className="bg-transparent text-5xl text-[#C19B77] outline-none text-center w-20"
              required
            />
            <span className="text-[#C19B77] text-sm ml-1">Dec</span>
          </div>
          <div className="bg-[#333333] p-6">
            <p className="text-xs text-gray-400 tracking-widest mb-2">
              CHECK-OUT
            </p>
            <input
              type="number"
              name="checkOut"
              value={formData.checkOut}
              onChange={handleChange}
              min="1"
              max="31"
              className="bg-transparent text-5xl text-[#C19B77] outline-none text-center w-12"
              required
            />
            <span className="text-[#C19B77] text-sm ml-1">Dec</span>
          </div>
        </div>

        {/* Guests and Nights */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-[#333333] p-6">
            <p className="text-xs text-gray-400 tracking-widest mb-2">GUESTS</p>
            <input
              type="number"
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              min="1"
              className="bg-transparent text-3xl text-[#C19B77] outline-none text-center w-12"
              required
            />
          </div>
          <div className="bg-[#333333] p-6">
            <p className="text-xs text-gray-400 tracking-widest mb-2">NIGHTS</p>
            <input
              type="number"
              name="nights"
              value={formData.nights}
              onChange={handleChange}
              min="1"
              className="bg-transparent text-3xl text-[#C19B77] outline-none text-center w-12"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-[#C19B77] text-white py-3 text-xs tracking-widest font-semibold hover:bg-[#a78560]"
        >
          BOOK NOW
        </button>
      </form>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <h2 className="text-2xl font-semibold mb-4">Booking Summary</h2>
        <p>
          <strong>Room:</strong> {room.name}
        </p>
        <p>
          <strong>Price:</strong> ${room.price}/night
        </p>

        {/* Check-In Date Picker */}
        <div className="my-4">
          <p className="font-semibold">Check-In Date:</p>
          <DatePicker
            selected={checkInDate}
            onChange={(date) => setCheckInDate(date)}
            dateFormat="dd/MM/yyyy"
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C19B77]"
          />
        </div>

        {/* Check-Out Date Picker */}
        <div className="my-4">
          <p className="font-semibold">Check-Out Date:</p>
          <DatePicker
            selected={checkOutDate}
            onChange={(date) => setCheckOutDate(date)}
            dateFormat="dd/MM/yyyy"
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C19B77]"
          />
        </div>

        <p>
          <strong>Guests:</strong> {formData.guests}
        </p>
        <p>
          <strong>Total Price:</strong> ${room.price * formData.nights}
        </p>

        <button
          onClick={confirmBooking}
          className="bg-green-500 text-white py-2 px-6 rounded-lg font-semibold hover:bg-green-700 mt-5"
        >
          Confirm
        </button>
        <button
          onClick={closeModal}
          className="ml-4 bg-gray-500 text-white py-2 px-6 rounded-lg font-semibold hover:bg-gray-700"
        >
          Cancel
        </button>
        {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
      </Modal>
    </div>
  );
};

export default BookingWidget;
