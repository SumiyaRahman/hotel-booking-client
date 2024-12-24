import React, { useState } from 'react';

const BookingForm = () => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');

  return (
    <div className="bg-[#373737] text-white py-10 roboto">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-around items-center gap-4">
          {/* Check-in */}
          <div className="flex flex-col">
            <label className="text-sm tracking-[3px] mb-2">CHECK-IN</label>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-72 p-3 border rounded-md bg-transparent text-white"
            />
          </div>

          {/* Check-out */}
          <div className="flex flex-col">
            <label className="text-sm tracking-[3px] mb-2">CHECK-OUT</label>
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-72 p-3 border rounded-md bg-transparent text-white"
            />
          </div>

          {/* Guests */}
          <div className="flex flex-col">
            <label className="text-sm tracking-[3px] mb-2">GUESTS</label>
            <input type="number" placeholder='1' className="w-72 p-3 border rounded-md bg-transparent text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
