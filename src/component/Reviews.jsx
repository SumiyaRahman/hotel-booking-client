import React, { useEffect, useState } from "react";
import Slider from "react-slick"; // Import Slider component from react-slick

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  // Fetch reviews
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const reviewResponse = await fetch("https://hotel-booking-server-one-nu.vercel.app/api/reviews");
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
    <div className="reviews-container py-24 flex flex-col items-center justify-center">
      <h1 className="play-fair text-3xl md:text-5xl leading-[4rem] mb-2 md:mb-5 text-[#1C1C1C] text-center">
        What Our Guests Are Saying
      </h1>
      <div className="w-full max-w-4xl">
        {reviews.length > 0 ? (
          <Slider {...sliderSettings}>
            {reviews.map((review) => (
              <div key={review._id} className="review-card text-center py-10">
                <div className="rating mb-4">
                  <span className="text-lg text-[#ACACAC] tracking-widest font-light">Rating: {review.rating}</span>
                </div>
                <p className="mb-4 text-xl text-[#ACACAC] font-light tracking-widest">{review.comment}</p>
                <p>
                  <em className="font-light play-fair tracking-widest">
                    Reviewed on:{" "}
                    {new Date(review.createdAt).toLocaleDateString()}
                  </em>
                </p>
              </div>
            ))}
          </Slider>
        ) : (
          <p className="text-center">No reviews available.</p> // Fallback message when no reviews
        )}
      </div>
    </div>
  );
};

export default Reviews;
