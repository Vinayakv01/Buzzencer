import React from 'react';

const Modal = ({ onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg max-w-xl flex items-center justify-center">
        {/* Image */}
        <div className="w-1/2 pr-4">
          <img src="your-image-url.jpg" alt="Congratulations" className="w-full h-auto rounded-lg" />
        </div>

        {/* Text */}
        <div className="w-1/2 pl-4">
          <h2 className="text-2xl font-bold mb-4">Congratulations!</h2>
          <p className="text-lg">Your profile is complete.</p>
        </div>

        {/* Close button */}
        <button onClick={onClose} className="absolute top-0 right-0 p-2 text-gray-500 hover:text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Modal;
