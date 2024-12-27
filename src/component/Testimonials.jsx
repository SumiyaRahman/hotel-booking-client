import React from "react";

const Testimonials = () => {
  return (
    <div className="py-20 bg-gray-100 mt-[100px]">
      <div className="max-w-7xl mx-auto px-5 text-center">
        <h2 className="text-3xl font-semibold text-[#373737] mb-8">
          What Our Customers Say
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {/* Testimonial 1 */}
          <div className="bg-white shadow-lg rounded-lg p-8 w-[300px]">
            <p className="text-lg text-gray-600 mb-4">
              "A fantastic experience! The room was beautiful, the staff was
              friendly, and the amenities were top-notch."
            </p>
            <div className="flex items-center">
              <img
                src="https://images.pexels.com/photos/1108095/pexels-photo-1108095.jpeg"
                alt="Customer 1"
                className="w-12 h-12 object-cover rounded-full mr-4"
              />
              <div>
                <p className="font-semibold text-[#373737]">Jane Doe</p>
                <p className="text-sm text-gray-500">Traveler</p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white shadow-lg rounded-lg p-8 w-[300px]">
            <p className="text-lg text-gray-600 mb-4">
              "A perfect getaway! I couldn't have asked for a more relaxing
              place to stay during my vacation."
            </p>
            <div className="flex items-center">
              <img
                src="https://images.pexels.com/photos/3787188/pexels-photo-3787188.jpeg"
                alt="Customer 2"
                className="w-12 h-12 object-cover rounded-full mr-4"
              />
              <div>
                <p className="font-semibold text-[#373737]">John Smith</p>
                <p className="text-sm text-gray-500">Businessman</p>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white shadow-lg rounded-lg p-8 w-[300px]">
            <p className="text-lg text-gray-600 mb-4">
              "Excellent service and outstanding rooms. I would definitely
              recommend this hotel to anyone."
            </p>
            <div className="flex items-center">
              <img
                src="https://images.pexels.com/photos/1191416/pexels-photo-1191416.jpeg"
                alt="Customer 3"
                className="w-12 h-12 object-cover rounded-full mr-4"
              />
              <div>
                <p className="font-semibold text-[#373737]">Emily White</p>
                <p className="text-sm text-gray-500">Designer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
