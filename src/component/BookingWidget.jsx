import React from "react";

const BookingWidget = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    console.log("Check-In:", formData.get("checkIn"));
    console.log("Check-Out:", formData.get("checkOut"));
    console.log("Guests:", formData.get("guests"));
    console.log("Nights:", formData.get("nights"));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#1C1C1C] p-8 mx-auto text-center play-fair"
    >
      {/* Row 1: Check-In and Check-Out */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {/* Check-In */}
        <div className="bg-[#333333] p-6">
          <p className="text-xs text-gray-400 tracking-widest mb-2">CHECK-IN</p>
          <div className="flex items-center justify-center">
            <input
              type="number"
              name="checkIn"
              defaultValue="27"
              min="1"
              max="31"
              className="bg-transparent text-5xl text-[#C19B77] outline-none text-center w-20"
              required
            />
            <span className="text-[#C19B77] text-sm ml-1">Dec</span>
          </div>
        </div>
        {/* Check-Out */}
        <div className="bg-[#333333] p-6">
          <p className="text-xs text-gray-400 tracking-widest mb-2">
            CHECK-OUT
          </p>
          <div className="flex items-center justify-center">
            <input
              type="number"
              name="checkOut"
              defaultValue="28"
              min="1"
              max="31"
              className="bg-transparent text-5xl text-[#C19B77] outline-none text-center w-12"
              required
            />
            <span className="text-[#C19B77] text-sm ml-1">Dec</span>
          </div>
        </div>
      </div>

      {/* Row 2: Guests and Nights */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {/* Guests */}
        <div className="bg-[#333333] p-6">
          <p className="text-xs text-gray-400 tracking-widest mb-2">GUESTS</p>
          <input
            type="number"
            name="guests"
            defaultValue="1"
            min="1"
            className="bg-transparent text-3xl text-[#C19B77] outline-none text-center w-12"
            required
          />
        </div>
        {/* Nights */}
        <div className="bg-[#333333] p-6">
          <p className="text-xs text-gray-400 tracking-widest mb-2">NIGHTS</p>
          <input
            type="number"
            name="nights"
            defaultValue="1"
            min="1"
            className="bg-transparent text-3xl text-[#C19B77] outline-none text-center w-12"
            required
          />
        </div>
      </div>

      {/* Book Now Button */}
      <button
        type="submit"
        className="w-full bg-[#C19B77] text-white py-3 text-xs tracking-widest font-semibold hover:bg-[#a78560]"
      >
        BOOK NOW
      </button>
    </form>
  );
};

export default BookingWidget;
