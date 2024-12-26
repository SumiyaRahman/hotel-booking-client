import React, { useEffect, useState, useContext } from "react";
import AuthContext from "../context/AuthContext"; // Get logged-in user context
import Navbar from "../component/Banner/Navbar";
import Footer from "../component/Footer";
import Modal from "react-modal";

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
      <Navbar />
      <div className="max-w-7xl mx-auto py-10">
        <h1 className="text-4xl play-fair font-light mb-6">My Bookings</h1>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-[#C19B77] text-white">
                <th className="border border-gray-300 px-4 py-2">Image</th>
                <th className="border border-gray-300 px-4 py-2">Room Name</th>
                <th className="border border-gray-300 px-4 py-2">Price</th>
                <th className="border border-gray-300 px-4 py-2">Check-In</th>
                <th className="border border-gray-300 px-4 py-2">Check-Out</th>
                <th className="border border-gray-300 px-4 py-2">Guests</th>
                <th className="border border-gray-300 px-4 py-2">Total</th>
                <th className="border border-gray-300 px-4 py-2">Action</th>
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
                  <td className="border border-gray-300 px-4 py-2">
                    {booking.room ? booking.room.name : "Unknown Room"}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    ${booking.room ? booking.room.price : "N/A"}/night
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {booking.checkIn}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {booking.checkOut}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {booking.guests}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    ${booking.totalPrice}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {/* Cancel Button */}
                    <button
                      onClick={() => openModal(booking)}
                      className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
                    >
                      Cancel
                    </button>

                    {/* Review Button */}
                    <button
                      onClick={() => openReviewModal(booking)}
                      className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 ml-2"
                    >
                      Review
                    </button>

                    {/* Update Date Button */}
                    <button
                      onClick={() => openUpdateDateModal(booking)}
                      className="bg-yellow-500 text-white py-1 px-3 rounded hover:bg-yellow-600 ml-2"
                    >
                      Update Date
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Footer />

      {/* Confirmation Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={{ content: { width: "50%", margin: "auto", padding: "20px" } }}
      >
        <h2 className="text-2xl font-semibold mb-4">Confirm Cancellation</h2>
        <p>Are you sure you want to cancel this booking?</p>
        <div className="mt-5 flex justify-end gap-4">
          <button
            onClick={handleCancelBooking}
            className="bg-red-500 text-white py-2 px-6 rounded hover:bg-red-600"
          >
            Confirm
          </button>
          <button
            onClick={closeModal}
            className="bg-gray-500 text-white py-2 px-6 rounded hover:bg-gray-600"
          >
            Cancel
          </button>
        </div>
      </Modal>
      <Modal
        isOpen={isReviewModalOpen}
        onRequestClose={closeReviewModal}
        style={{ content: { width: "50%", margin: "auto", padding: "20px" } }}
      >
        <h2 className="text-2xl font-semibold mb-4">Submit Your Review</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Username:</label>
          <input
            type="text"
            value={user.email} // Display logged-in user's name
            readOnly
            className="w-full border border-gray-300 p-2 rounded mt-1 bg-gray-100 cursor-not-allowed"
          />
        </div>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Rating (1-5):</label>
            <input
              type="number"
              min="1"
              max="5"
              value={reviewForm.rating}
              onChange={(e) =>
                setReviewForm({ ...reviewForm, rating: e.target.value })
              }
              className="w-full border border-gray-300 p-2 rounded mt-1"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Comment:</label>
            <textarea
              value={reviewForm.comment}
              onChange={(e) =>
                setReviewForm({ ...reviewForm, comment: e.target.value })
              }
              rows="4"
              className="w-full border border-gray-300 p-2 rounded mt-1"
              required
            ></textarea>
          </div>
          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={handleReviewSubmit}
              className="bg-green-500 text-white py-2 px-6 rounded hover:bg-green-600"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={closeReviewModal}
              className="bg-gray-500 text-white py-2 px-6 rounded hover:bg-gray-600"
            >
              Cancel
            </button>
          </div>
        </form>
      </Modal>
      <Modal
        isOpen={isUpdateModalOpen}
        onRequestClose={closeUpdateModal}
        style={{ content: { width: "50%", margin: "auto", padding: "20px" } }}
      >
        <h2 className="text-2xl font-semibold mb-4">Update Booking Dates</h2>
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
  );
};

export default MyBookings;
