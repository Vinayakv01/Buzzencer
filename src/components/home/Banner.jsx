import React from 'react';
import bghome from "../../assets/bghome.webp";
import banners from "../../assets/bnnr-pic.webp";
import about from "../../assets/about-buzzencer.webp"
import facebook from "../../assets/logo/facebook.svg";
import instagram from "../../assets/logo/instagram.svg";
import linkedin from "../../assets/logo/linkedin.svg";
import snapchat from "../../assets/logo/snapchat.svg";
import twitter from "../../assets/logo/twitter.svg";
import youtube from "../../assets/logo/youtube.svg";

const Banner = () => {

  const iconStyle = {
    transition: 'transform 5s ease-in-out',
    animation: 'zoom-in-zoom-out 1s ease infinite',
  };

  


  return (
    <div>

{/* section-1  */}


<div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${bghome})` }}>
  <div className="absolute inset-0 flex items-center justify-between">
    {/* Text Content on the Left */}
    <div className="w-full md:w-1/2 ml-4 md:ml-36 ml flex flex-col items-start justify-center text-white">
      <h1 className="text-4xl font-Yeseva text-black">A WORLD WHERE YOU <br /> GET PAID TO <span className="text-[#403bbf]">SHOOT </span></h1>
      <p className="mt-4 text-black text-md">Lorem Ipsum is simply dummy text of the printing and <br />typesetting industry. Lorem Ipsum has been the industry's <br/> standard dummy text.</p>
      <button className="mt-6 px-8 pt-1.5 pb-2 bg-[#403bbf] hover:bg-blue-600 text-white font-semibold rounded-full">Create Campaign</button>
    </div>

    {/* Image on the Right */}
    <div className="hidden lg:flex items-center justify-center w-1/2 relative">
  <img src={banners} alt="Your Image" className="relative -top-8 right-20 object-cover" />
  
  <div className="absolute flex items-center space-x-4 top-1/2 transform -translate-y-1/2">
              <div className="bg-white rounded-full p-3 flex items-center justify-center " style={iconStyle}>
                <img src={instagram} alt="instagram" className="h-8" />
              </div>
              <div className="bg-white rounded-full p-3 flex items-center justify-center" style={iconStyle}>
                <img src={twitter} alt="twitter" className="h-8" />
              </div>
              <div className="bg-white rounded-full p-3 flex items-center justify-center" style={iconStyle}>
                <img src={youtube} alt="youtube" className="h-8" />
              </div>
              <div className="bg-white rounded-full p-3 flex items-center justify-center" style={iconStyle}>
                <img src={linkedin} alt="linkedin" className="h-8" />
              </div>
              <div className="bg-white rounded-full p-3 flex items-center justify-center" style={iconStyle}>
                <img src={facebook} alt="facebook" className="h-8" />
              </div>
              <div className="bg-white rounded-full p-3 flex items-center justify-center" style={iconStyle}>
                <img src={snapchat} alt="snapchat" className="h-8" />
              </div>
            </div>
</div>


  </div>
</div>


{/* section-2 */}

    <div>
       <section className="container mx-auto  px-4 lg:px-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* SVG Image on the Left */}
        <div className="transform translate-y-[-150px] translate-x-[40px]">
          <img src={about} alt="SVG Image" className="w-[421px]  h-[500px] mx-auto mb-6" />
        </div>
        {/* Heading and Paragraph on the Right */}
        <div className="transform translate-y-[-160px] translate-x-[40px]" >
          <h2 className="text-3xl lg:text-4xl font-Yeseva mb-4">About Buzzencer</h2>
          <p className="text-lg  text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <button className="pt-1.5 pb-2 bg-[#403bbf] hover:bg-blue-600 text-white font-semibold  px-4 rounded-full">Know More</button>
        </div>
      </div>
    </section>
    </div>


    </div>
  );
};

export default Banner;
