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
import userone from "../../assets/userone.png";
import usertwo from "../../assets/usertwo.png";
import './banner.css';

const Banner = () => {






  return (
    <div>
      {/* section-1  */}

      <div className="bg-cover bg-center" style={{ backgroundImage: `url(${bghome})` }}>

        <div className=" container h-full mx-auto flex">

          {/* Text Content on the Left */}
          <div className="w-full md:w-1/2 md:ml-9 flex flex-col items-start justify-center text-white">
            <h1 className="text-4xl font-Yeseva text-black">A WORLD WHERE YOU <br /> GET PAID TO <span className="text-[#403bbf]">SHOOT </span></h1>
            <p className="mt-4 text-black font-Montserrat font-thin">Lorem Ipsum is simply dummy text of the printing and <br />typesetting industry. Lorem Ipsum has been the industry's <br /> standard dummy text.</p>
            <button className="mt-6 px-8 pt-2.5 pb-3 bg-[#403bbf] hover:bg-blue-600 text-white text-sm font-Montserrat font-semibold rounded-full">Create Campaign</button>
          </div>

          {/* Image on the Right */}0
          <div className=" mt-40  w-1/2 ">
            <img src={banners} alt="Your Image" className="relative xl;left-10 -top-10 left-14 w-10/12 xl:w-[425px] object-cover" />


            <div className="instagram-logo bg-white rounded-full p-4 shadow-xl relative lg:bottom-[280px] xl:bottom-[280px] ">
              <img src={instagram} alt="instagram" className="w-[30px]" />
            </div>

            <div className="twitter-logo bg-white rounded-full p-4 shadow-xl relative right-32 bottom-[430px]  ">
              <img src={twitter} alt="twitter" className="w-[40px]" />
            </div>

            <div className="youtube-logo bg-white rounded-full p-3 shadow-xl relative right-[60px] bottom-[460px] ">
              <img src={youtube} alt="youtube" className="w-[25px]" />
            </div>

            <div className="linkedin-logo bg-white rounded-full p-4 shadow-xl relative left-10 bottom-[530px] ">
              <img src={linkedin} alt="linkedin" className="w-[25px]" />
            </div>

            <div className="facebook-logo bg-white rounded-full p-4 shadow-xl relative left-[190px] bottom-[380px]">
              <img src={facebook} alt="facebook" className="w-[40px]" />
            </div>

            <div className="snapchat-logo bg-white rounded-full p-4 shadow-xl relative left-[180px] bottom-[270px]">
              <img src={snapchat} alt="snapchat" className="w-[24px]" />
            </div>

            <div className="font-Poppins relative lg:left-16 xl:left-10 lg:bottom-[200px] xl:bottom-[220px] flex w-40 items-center bg-opacity-50 backdrop-blur-lg bg-[rgba(1,1,1,0.1)] rounded-full px-4 py-4">
              <img src={userone} alt="user" className="mr-3" />
              <div className="text-black">Malini Dode</div>
            </div>

            <div className="font-Poppins relative lg:left-[315px] xl:left-[360px] lg:bottom-[300px] xl:bottom-[300px] flex w-40 items-center bg-opacity-50 backdrop-blur-lg bg-[rgba(1,1,1,0.1)] rounded-full px-4 py-4">
              <img src={usertwo} alt="user" className="mr-3" />
              <div className="text-black">Sam Dcruz</div>
            </div>


          </div>

        </div>


        {/* section-2 */}

        <div>
          <section className="container mx-auto  px-4 lg:px-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="transform translate-y-[-150px] translate-x-[40px]">
                <img src={about} alt="SVG Image" className="w-[421px]  h-[500px] mx-auto" />
              </div>
              {/* Heading and Paragraph on the Right */}
              <div className="mr-10 transform translate-y-[-150px] translate-x-[40px]" >
            
                <h2 className="text-3xl lg:text-4xl font-Yeseva mb-4">About Buzzencer</h2>
                <p className="text-lg  text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <button className="pt-1.5 pb-2 bg-[#403bbf] hover:bg-blue-600 text-white font-semibold  px-4 rounded-full">Know More</button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Banner;
