import React, { useEffect, useState, useContext } from "react";
import AuthContext from "../context/AuthContext"; // Get logged-in user context
import Navbar from "../component/Banner/Navbar";
import Footer from "../component/Footer";
import Modal from "react-modal";
import { MdCancel } from "react-icons/md";
import { MdRateReview } from "react-icons/md";
import { MdSystemSecurityUpdateGood } from "react-icons/md";

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
          `http://localhost:5000/bookings/${user.uid}`
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
        `http://localhost:5000/bookings/${selectedBooking._id}`,
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
        `http://localhost:5000/bookings/${selectedBooking._id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to cancel booking.");
      }

      // Refresh bookings after cancellation
      setBookings(bookings.filter((b) => b._id !== selectedBooking._id));

      alert("Booking canceled successfully!");
    } catch (err) {
      console.error("Cancel booking failed:", err.message);
      alert("Failed to cancel booking.");
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
      const response = await fetch("http://localhost:5000/reviews", {
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
    <div>
      <div className="max-w-7xl mx-auto px-5">
        <Navbar />
        <div>
          <h1 className="text-4xl play-fair font-light my-10">My Bookings</h1>

          {/* Card Layout for Small and Medium Devices */}
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 lg:hidden">
            {bookings.map((booking) => (
              <div key={booking._id} className="bg-white border border-gray-300 rounded-lg p-4">
              {/* Image */}
              <div className="mb-4">
                {booking.room && booking.room.image ? (
                  <img
                    src={booking.room.image}
                    alt={booking.room.name}
                    className="w-full h-40 object-cover rounded"
                  />
                ) : (
                  <span>No Image</span>
                )}
              </div>
            
              {/* Room Name and Price */}
              <div className="flex justify-between mb-4">
                <h3 className="font-semibold text-lg play-fair text-[#373737]">{booking.room ? booking.room.name : "Unknown Room"}</h3>
                <p className="text-[#ACACAC] font-light tracking-[0.1rem] text-xs md:text-sm">${booking.room ? booking.room.price : "N/A"}/night</p>
              </div>
            
              {/* Check-In and Check-Out Dates */}
              <div className="justify-between mb-4 space-y-2">
                <p className="text-[#ACACAC] font-light tracking-[0.1rem] text-xs md:text-sm">Check-In: {booking.checkIn}</p>
                <p className="text-[#ACACAC] font-light tracking-[0.1rem] text-xs md:text-sm">Check-Out: {booking.checkOut}</p>
              </div>
            
              {/* Guests and Total */}
              <div className="flex justify-between mb-4">
                <p className="text-[#ACACAC] font-light tracking-[0.1rem] text-xs md:text-sm">Guests: {booking.guests}</p>
                <p className="text-[#ACACAC] font-light tracking-[0.1rem] text-xs md:text-sm">Total: ${booking.totalPrice}</p>
              </div>
            
              {/* Action Buttons */}
              <div className="flex justify-around items-center mt-6 lg:mt-0">
                <button
                  onClick={() => openModal(booking)}
                  className="text-[#c19b77] text-2xl"
                >
                  <MdCancel />
                </button>
            
                <button
                  onClick={() => openReviewModal(booking)}
                  className="text-[#373737] text-2xl"
                >
                  <MdRateReview />
                </button>
            
                <button
                  onClick={() => openUpdateDateModal(booking)}
                  className="text-[#c19b77] text-2xl"
                >
                  <MdSystemSecurityUpdateGood />
                </button>
              </div>
            </div>
            
            ))}
          </div>

          {/* Table Layout for Large and Extra Large Devices */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="table-auto w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-[#c19b77] text-white">
                  <th className="border border-gray-300 px-4 py-2 text-base font-normal tracking-[0.1rem]">Image</th>
                  <th className="border border-gray-300 px-4 py-2 text-base font-normal tracking-[0.1rem]">
                    Room Name
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-base font-normal tracking-[0.1rem]">Price</th>
                  <th className="border border-gray-300 px-4 py-2 text-base font-normal tracking-[0.1rem]">Check-In</th>
                  <th className="border border-gray-300 px-4 py-2 text-base font-normal tracking-[0.1rem]">
                    Check-Out
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-base font-normal tracking-[0.1rem]">Guests</th>
                  <th className="border border-gray-300 px-4 py-2 text-base font-normal tracking-[0.1rem]">Total</th>
                  <th className="border border-gray-300 px-4 py-2 text-base font-normal tracking-[0.1rem]">Action</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking) => (
                  <tr key={booking._id}>
                    <td className="border border-gray-300 px-4 py-2">
                      {booking.room && booking.room.image ? (
                        <img
                          src={booking.room.image}
                          alt={booking.room.name}
                          className="h-20 w-20 object-cover rounded"
                        />
                      ) : (
                        <span>No Image</span>
                      )}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-[#ACACAC] font-light text-base tracking-[0.1rem]">
                      {booking.room ? booking.room.name : "Unknown Room"}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-[#ACACAC] font-light text-base tracking-[0.1rem]">
                      ${booking.room ? booking.room.price : "N/A"}/night
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-[#ACACAC] font-light text-base tracking-[0.1rem]">
                      {booking.checkIn}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-[#ACACAC] font-light text-base tracking-[0.1rem]">
                      {booking.checkOut}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-[#ACACAC] font-light text-base tracking-[0.1rem]">
                      {booking.guests}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-[#ACACAC] font-light text-base tracking-[0.1rem]">
                      ${booking.totalPrice}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-[#ACACAC] font-light text-base tracking-[0.1rem]">
                      <div className="flex justify-between items-center">
                        <button
                          onClick={() => openModal(booking)}
                          className="text-[#c19b77] text-3xl"
                        >
                          <MdCancel />
                        </button>

                        <button
                          onClick={() => openReviewModal(booking)}
                          className="text-[#373737] text-3xl"
                        >
                          <MdRateReview />
                        </button>

                        <button
                          onClick={() => openUpdateDateModal(booking)}
                          className="text-[#c19b77] text-3xl"
                        >
                          <MdSystemSecurityUpdateGood />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Confirmation Modal */}
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          style={{ content: { width: "40%", margin: "auto", padding: "20px", background: "#c19b77" } }}
        >
          <div>
          <h2 className="text-2xl font-bold py-4 text-center play-fair text-white tracking-wider">Confirm Cancellation</h2>
          <p className="text-center text-base text-white font-light tracking-[0.1rem]">Are you sure you want to cancel this booking?</p>
          </div>
          <div className="mt-5 flex justify-center gap-4">
            <button
              onClick={handleCancelBooking}
              className="bg-[#373737] text-white py-2 px-6"
            >
              Confirm
            </button>
            <button
              onClick={closeModal}
              className="border border-[#373737] text-[#373737] py-2 px-6"
            >
              Cancel
            </button>
          </div>
        </Modal>

        {/* Review Modal */}
        <Modal
          isOpen={isReviewModalOpen}
          onRequestClose={closeReviewModal}
          style={{ content: { width: "40%" , margin: "auto", padding: "20px", background: "#373737" } }}
        >
          <h2 className="text-2xl font-bold py-4 text-center play-fair text-[#c19b77] tracking-wider">Submit Your Review</h2>
          <div className="mb-4">
            <label className="block text-[#c19b77] font-normal text-base tracking-[0.1rem]">Username</label>
            <input
              type="text"
              value={user.email} // Display logged-in user's name
              readOnly
              className="w-full p-2 rounded-sm mt-1 text-[#373737] font-normal tracking-wider bg-white cursor-not-allowed"
            />
          </div>
          <form>
            <div className="mb-4">
              <label className="block text-[#c19b77] font-normal text-base tracking-[0.1rem]">Rating (1-5)</label>
              <input
                type="number"
                min="1"
                max="5"
                value={reviewForm.rating}
                onChange={(e) =>
                  setReviewForm({ ...reviewForm, rating: e.target.value })
                }
                className="w-full p-2 rounded-sm mt-1 text-[#373737] font-normal tracking-wider bg-white"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-[#c19b77] font-normal text-base tracking-[0.1rem]">Comment:</label>
              <textarea
                value={reviewForm.comment}
                onChange={(e) =>
                  setReviewForm({ ...reviewForm, comment: e.target.value })
                }
                rows="4"
                className="w-full p-2 rounded-sm mt-1 text-[#373737] font-normal tracking-wider bg-white"
                required
              ></textarea>
            </div>
            <div className="flex justify-end gap-4">
              <button
                type="button"
                onClick={handleReviewSubmit}
                className="bg-[#c19b77] text-white uppercase  py-2 px-6 rounded-sm tracking-[0.1rem]"
              >
                Submit
              </button>
              <button
                type="button"
                onClick={closeReviewModal}
                className="border border-[#c19b77] text-[#c19b77] uppercase py-2 px-6 rounded-sm tracking-[0.1rem]"
              >
                Cancel
              </button>
            </div>
          </form>
        </Modal>

        {/* Update Date Modal */}
        <Modal
          isOpen={isUpdateModalOpen}
          onRequestClose={closeUpdateModal}
          style={{ content: { width: "50%", margin: "auto", padding: "20px" } }}
        >
          <h2 className="text-2xl font-bold mb-4 text-center play-fair text-[#373737] tracking-wider">Update Booking Dates</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700">Check-In Date:</label>
              <input
                type="date"
                value={updateForm.checkIn}
                onChange={(e) =>
                  setUpdateForm({ ...updateForm, checkIn: e.target.value })
                }
                className="w-full border border-gray-300 p-2 rounded mt-1"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Check-Out Date:</label>
              <input
                type="date"
                value={updateForm.checkOut}
                onChange={(e) =>
                  setUpdateForm({ ...updateForm, checkOut: e.target.value })
                }
                className="w-full border border-gray-300 p-2 rounded mt-1"
                required
              />
            </div>
            <div className="flex justify-end gap-4">
              <button
                type="button"
                onClick={handleDateUpdate}
                className="bg-yellow-500 text-white py-2 px-6 rounded hover:bg-yellow-600"
              >
                Update
              </button>
              <button
                type="button"
                onClick={closeUpdateModal}
                className="bg-gray-500 text-white py-2 px-6 rounded hover:bg-gray-600"
              >
                Cancel
              </button>
            </div>
          </form>
        </Modal>
      </div>

      <Footer />
    </div>
  );
};

export default MyBookings;
