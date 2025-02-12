import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  // Fetch reviews
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const reviewResponse = await fetch("https://hotel-booking-server-one-nu.vercel.app/reviews");
        const reviewData = await reviewResponse.json();
        console.log("Review Data:", reviewData); // Check if the structure matches what you're expecting

        // Sort reviews in descending order by createdAt (timestamp)
        const sortedReviews = reviewData.sort((a, b) => {
          return new Date(b.createdAt) - new Date(a.createdAt); // Latest first
        });

        setReviews(sortedReviews); // Set sorted reviews
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  // Slider settings for carousel
  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    dots: true,
  };

  return (
    <div className="reviews-container py-24 flex flex-col items-center justify-center bg-gradient-to-b from-[#f8f4f1] to-[#e8d5c8]">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <p className="text-[#C19B77] tracking-[0.4rem] text-sm font-medium mb-4">TESTIMONIALS</p>
        <h1 className="play-fair text-3xl md:text-5xl lg:text-6xl leading-[4rem] text-[#1C1C1C]">
          What Our Guests Are Saying
        </h1>
      </motion.div>

      <div className="w-full max-w-5xl px-4 md:px-8">
        {reviews.length > 0 ? (
          <Slider {...sliderSettings}>
            {reviews.map((review) => (
              <motion.div 
                key={review._id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="review-card text-center py-10 px-8 mx-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="rating mb-6">
                  {[...Array(5)].map((_, index) => (
                    <span key={index} className={`text-2xl ${index < review.rating ? 'text-[#C19B77]' : 'text-gray-300'}`}>★</span>
                  ))}
                </div>
                <p className="mb-8 text-xl text-[#4A4A4A] font-light leading-relaxed italic">
                  "{review.comment}"
                </p>
                <div className="border-t border-[#E8D5C8] pt-4">
                  <p className="font-light play-fair tracking-wider text-[#C19B77]">
                    Posted on{" "}
                    <span className="text-[#1C1C1C]">
                      {new Date(review.createdAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                  </p>
                </div>
              </motion.div>
            ))}
          </Slider>
        ) : (
          <div className="text-center bg-white p-8 rounded-lg shadow">
            <p className="text-[#C19B77] text-lg">No reviews available yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Reviews;
