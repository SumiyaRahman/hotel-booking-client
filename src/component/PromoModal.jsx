import React from 'react';

const PromoModal = ({ showModal, closeModal, offerDetails, offerImage }) => {
  if (!showModal) return null; // If showModal is false, don't render the modal

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <div className="flex justify-between items-center">
          <h2 className="play-fair text-2xl font-bold">Special Offer!</h2>
          <button
            onClick={closeModal}
            className="text-xl font-bold text-gray-600 hover:text-gray-900"
          >
            X
          </button>
        </div>

        {/* Eye-catching image */}
        <img src={offerImage} alt="Special Offer" className="mt-4 w-full h-64 object-cover rounded-md" />

        {/* Offer details */}
        <p className="text-[#acacac] font-light tracking-[0.1rem] mt-4 text-lg text-center">{offerDetails}</p>

        <div className="mt-6 text-center">
          <button
            onClick={closeModal}
            className="uppercase py-1 px-3 md:py-2 md:px-5 rounded bg-[#c19b77] text-white font-light md:font-medium text-xs md:text-sm tracking-widest"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromoModal;
