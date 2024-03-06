import React from 'react';
import bghome from "../../assets/bghome.webp";
import banners from "../../assets/bnnr-pic.webp";

const Banner = () => {
  return (
    <div className="banner-container relative">
      {/* Background Image */}
      <img src={bghome} className="w-full h-auto" />

      {/* Text and Button */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold">A world where you can get paid to shoot</h1>
        <p className="mt-4 text-lg md:text-xl">Sample text in smaller font.</p>
        <button className="mt-6 px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full">Create Campaign</button>
      </div>

      {/* Additional Image */}
      <img src={banners} alt="Additional" className="absolute top-0 right-0 w-1/4 md:w-1/5 mt-10 md:mt-16 mr-8 md:mr-16" />
    </div>
  );
};

export default Banner;
