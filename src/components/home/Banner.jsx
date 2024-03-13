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

        <div className=" md:container h-full mx-auto md:flex ">

          {/* Text Content on the Left */}
          <div className="w-full md:w-1/2 md:ml-9 flex flex-col md:items-start items-center justify-center text-white relative  md:top-0 sm:top-[480px] top-[320px]">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-Yeseva px-6 text-center md:text-left text-black">A WORLD WHERE YOU GET PAID TO <span className="text-[#403bbf]">SHOOT </span></h1>
            <p className="mt-4 text-black text-center px-6 md:text-left font-Montserrat font-thin">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
            <button className="mt-6 px-8 pt-2.5 pb-3 bg-[#403bbf] hover:bg-blue-600 text-white text-sm font-Montserrat font-semibold rounded-full">Create Campaign</button>
          </div>

          {/* Image on the Right */}
          <div className=" mt-40  md:w-1/2 relative md:bottom-0 md:ml-0 ml-3  sm:bottom-[260px] bottom-[355px]">
            <img src={banners} alt="Your Image" className="relative xl:left-10 -top-10 left-6 md:left-14 w-10/12 md:w-10/12 xl:w-[425px] object-cover" />


            <div className="instagram-logo bg-white rounded-full p-2 sm:p-4 shadow-xl relative bottom-[170px] sm:bottom-[230px] md:left-[20px] lg:right-0 md:bottom-[190px] lg:bottom-[280px] xl:bottom-[280px] ">
              <img src={instagram} alt="instagram" className="sm:w-[30px] w-[20px]" />
            </div>

            <div className="twitter-logo bg-white rounded-full p-3 sm:p-4 shadow-xl relative bottom-[240px] sm:bottom-[320px] right-9 sm:right-12 md:right-20 lg:right-32 md:bottom-[300px] lg:bottom-[420px] xl:bottom-[430px]  ">
              <img src={twitter} alt="twitter" className="sm:w-[40px] w-[25px]" />
            </div>

            <div className="youtube-logo bg-white rounded-full p-3 shadow-xl relative right-[30px] md:right-[60px] bottom-[300px] sm:bottom-[400px] md:bottom-[380px] lg:bottom-[440px] xl:bottom-[460px] ">
              <img src={youtube} alt="youtube" className="w-[25px]" />
            </div>

            <div className="linkedin-logo bg-white rounded-full p-3 sm:p-4 shadow-xl relative  lg:left-10 sm:left-10 left-6 bottom-[305px] sm:bottom-[400px] md:bottom-[400px] lg:bottom-[510px] xl:bottom-[530px] ">
              <img src={linkedin} alt="linkedin" className="w-[25px]" />
            </div>

            <div className="facebook-logo bg-white rounded-full p-3 sm:p-4 shadow-xl relative left-8 sm:left-10 lg:left-[170px] xl:left-[190px] sm:bottom-[320px] bottom-[240px] md:bottom-[340px] lg:bottom-[380px]">
              <img src={facebook} alt="facebook" className="sm:w-[40px] w-[25px]" />
            </div>

            <div className="snapchat-logo bg-white rounded-full p-3 sm:p-3 shadow-xl relative left-56 sm:left-0 md:left-[330px] lg:left-[120px] xl:left-[180px] bottom-[220px] sm:bottom-[240px] md:bottom-[270px]">
              <img src={snapchat} alt="snapchat" className="sm:w-[24px] w-[20px]" />
            </div>

            <div className="font-Poppins relative md:left-14 lg:left-16 xl:left-10 bottom-[210px] sm:bottom-[180px] md:bottom-[240px] lg:bottom-[200px] xl:bottom-[220px] flex w-[100px] sm:w-40 items-center bg-opacity-50 backdrop-blur-lg bg-[rgba(1,1,1,0.1)] rounded-full p-2 sm:px-4 sm:py-4">
              <img src={userone} alt="user" className="mr-3" />
              <div className="text-black text-[8px] sm:text-[16px] ">Malini Dode</div>
            </div>

            <div className="font-Poppins relative sm:left-[210px] left-[160px] sm:bottom-[280px] bottom-[250px] md:left-[220px] lg:left-[315px] xl:left-[360px] md:bottom-[320px] lg:bottom-[300px] xl:bottom-[300px] w-[100px] flex sm:w-40 items-center bg-opacity-50 backdrop-blur-lg bg-[rgba(1,1,1,0.1)] rounded-full p-2 sm:px-4 sm:py-4">
              <img src={usertwo} alt="user" className="mr-3" />
              <div className="text-black text-[8px] sm:text-[16px] ">Sam Dcruz</div>
            </div>


          </div>

        </div>


        {/* section-2 */}

        <div>
          <section className="container mx-auto  md:px-4 lg:px-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="transform translate-y-[-150px] translate-x-[40px]">
                <img src={about} alt="SVG Image" className="lg:w-[420px] h-[400px] lg:h-[500px] " />
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
