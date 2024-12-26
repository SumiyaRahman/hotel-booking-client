import React, { useEffect, useState, useContext } from "react";
import { FaUserGroup } from "react-icons/fa6";
import { MdBorderLeft } from "react-icons/md";
import { MdOutlineBalcony } from "react-icons/md";
import { useParams } from "react-router-dom"; // <-- Use params to get ID from URL
import Navbar from "../component/Banner/Navbar";
import Footer from "../component/Footer";
import AuthContext from "../context/AuthContext";
import BookingWidget from "../component/BookingWidget";
import { IoBedOutline, IoWifiOutline } from "react-icons/io5";
import { IoTvOutline } from "react-icons/io5";
import { PiHairDryerLight } from "react-icons/pi";
import { BiDrink } from "react-icons/bi";
import deluxe from "../assets/Images/Room Images/deluxe suite.jpg";
import honey from "../assets/Images/Room Images/honeymoon suite.jpg";

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
        const response = await fetch(`http://localhost:5000/rooms/${id}/details`); // Correct endpoint
  
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
      <div className="max-w-7xl mx-auto py-5">
        <Navbar></Navbar>
      </div>
      <div className="max-w-5xl mx-auto py-5">
        <div>
          <h1 className="text-4xl play-fair font-light">{name}</h1>
          <p className="text-[#ACACAC] font-light text-sm tracking-wider mt-2">
            {description}
          </p>
          <div className="flex flex-col xl:flex-row gap-8 mt-8">
            {/* Image */}
            <div className="w-2/3">
              <img src={image} alt={name} className="mb-5" />
              <div className="flex justify-between text-lg text-[#ACACAC] my-10">
                <span>
                  <FaUserGroup className="inline mr-2 font-light" /> {guests}{" "}
                  Guests
                </span>
                <span>
                  <MdBorderLeft className="inline mr-2 font-light" />{" "}
                  {squareFeet} ft²
                </span>
                <span className="text-green-500 font-medium">
                  ${price}/night
                </span>
                <span className="text-green-500font-light">Week price</span>
              </div>
              <hr />
              <div className="my-10">
                <h1 className="text-4xl play-fair font-light">Room Services</h1>
                <div className=" mt-8 flex justify-between text-[#ACACAC] font-light">
                  <div>
                    <p className="flex flex-col items-center space-y-3">
                      <span className="text-3xl">
                        <IoBedOutline />
                      </span>
                      <span className="text-sm">{features[0]}</span>
                    </p>
                  </div>
                  <div>
                    <p className="flex flex-col items-center space-y-3">
                      <span className="text-3xl">
                        <IoWifiOutline />
                      </span>
                      <span className="text-sm">{features[1]}</span>
                    </p>
                  </div>
                  <div>
                    <p className="flex flex-col items-center space-y-3">
                      <span className="text-3xl">
                        <MdOutlineBalcony />
                      </span>
                      <span className="text-sm">{features[2]}</span>
                    </p>
                  </div>
                  <div>
                    <p className="flex flex-col items-center space-y-3">
                      <span className="text-3xl">
                        <IoTvOutline />
                      </span>
                      <span className="text-sm">{features[3]}</span>
                    </p>
                  </div>
                </div>
              </div>
              <hr />

              <div className="mt-10">
                <h2 className="text-3xl font-light mb-6">Reviews</h2>
                {reviews.length > 0 ? (
                  <div className="space-y-5">
                    {reviews.map((review) => (
                      <div
                        key={review._id}
                        className="p-5 border rounded-lg shadow-md"
                      >
                        <p className="mt-2">Rating: {review.rating}/5</p>
                        <p className="mt-2 text-gray-700">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 italic">
                    No reviews available for this room.
                  </p>
                )}
              </div>

              <div className="my-10">
                <h1 className="text-4xl play-fair font-light">
                  Around The Hotel
                </h1>
                <div className="grid grid-cols-2 gap-5 mt-10">
                  <div className="spa relative">
                    <div className="text-white absolute bottom-0 play-fair text-2xl font-semibold tracking-wider">
                      <p className="p-5">Wellness Spa</p>
                    </div>
                  </div>
                  <div className="coffee relative">
                    <div className="text-white absolute bottom-0 play-fair text-2xl font-semibold tracking-wider">
                      <p className="p-5">Coffee Corner</p>
                    </div>
                  </div>
                  <div className="pool relative">
                    <div className="text-white absolute bottom-0 play-fair text-2xl font-semibold tracking-wider">
                      <p className="p-5">Pool Side</p>
                    </div>
                  </div>
                  <div className="dining relative">
                    <div className="text-white absolute bottom-0 play-fair text-2xl font-semibold tracking-wider">
                      <p className="p-5">Dining</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div>
                <BookingWidget room={room} uid={uid} />
              </div>
              <div>
                <h1 className="text-3xl play-fair font-light my-10">
                  Best Rooms
                </h1>
                <div className="space-y-5">
                  <div className="flex items-center gap-4">
                    <div>
                      <img className="w-32" src={deluxe} />
                    </div>
                    <div>
                      <p className="text-xl play-fair">Deluxe Room</p>
                      <p className="text-[#ACACAC] text-base font-light tracking-wider my-2">
                        Price 400$ / night{" "}
                      </p>
                      <div>
                        <button
                          type="submit"
                          className="bg-[#C19B77] text-white py-1 px-4 text-[10px] tracking-widest font-semibold hover:bg-[#a78560]"
                        >
                          BOOK NOW
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div>
                      <img className="w-32" src={honey} />
                    </div>
                    <div>
                      <p className="text-xl play-fair">Honeymoon Suite</p>
                      <p className="text-[#ACACAC] text-base font-light tracking-wider my-2">
                        Price 300$ / night{" "}
                      </p>
                      <div>
                        <button
                          type="submit"
                          className="bg-[#C19B77] text-white py-1 px-4 text-[10px] tracking-widest font-semibold hover:bg-[#a78560]"
                        >
                          BOOK NOW
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </section>
  );
};

export default RoomDetails;
