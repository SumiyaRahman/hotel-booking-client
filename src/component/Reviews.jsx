import React, { useEffect, useState } from "react";
import Slider from "react-slick"; // Import Slider component from react-slick

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  // Fetch reviews
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const reviewResponse = await fetch("http://localhost:5000/api/reviews");
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
    <div className="reviews-container">
      <h2>What Our Guests Are Saying</h2>
      {reviews.length > 0 ? (
        <Slider {...sliderSettings}>
          {reviews.map((review) => (
            <div key={review._id} className="review-card">
              <div className="rating">
                <span>Rating: {review.rating}</span>
              </div>
              <p>{review.comment}</p>
              <p>
                <em>
                  Reviewed on: {new Date(review.createdAt).toLocaleDateString()}
                </em>
              </p>
            </div>
          ))}
        </Slider>
      ) : (
        <p>No reviews available.</p> // Fallback message when no reviews
      )}
    </div>
  );
};

export default Reviews;
