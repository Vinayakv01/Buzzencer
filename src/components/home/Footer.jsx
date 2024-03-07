import React from 'react';
import { LuFacebook } from "react-icons/lu";
import { CiTwitter } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io";
import { SlSocialLinkedin } from "react-icons/sl";
import Wave from 'react-wavify'
import logo from "../../assets/buzzencer_logo.svg";

const Footer = () => {
  return (
    <>
    <Wave fill='#f7f7fd'
        paused={false}
        style={{ display: 'flex' }}
        options={{
          height: 95,
          amplitude: 35,
          speed: 0.25,
          points: 6
        }}
  />
    
    <footer className="relative bg-[#f7f7fd] text-black py-4">
  
            <div className="container mx-auto text-center relative z-10">
        <div className="grid grid-cols-4 gap-4">
          {/* Logo */}
          <div>
            <img src={logo} alt="Logo" />
            <div className='text-gray-400'>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,</p>
            </div>
          </div>
          {/* Contact Us */}
          <div>
            <p className='font-bold'>Contact Us</p>
            <p className='text-gray-400'>Narmada Fresh Fruit Exports Flat No.4, Prashant Appt, Nashik - 422 009, Maharashtra</p>
            <div className='text-gray-400'>
            <a href='tel:9218540407'>
            +91 9218540407
            </a>
            </div>
            <div className='text-gray-400'>
            <a href='mailto:sanjay@narmadafresh.com'>
            sanjay@narmadafresh.com
            </a>
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <p className='font-bold text-b'>Quick Links</p>
            <ul>
              <li><a href="/" className='text-gray-400'>Faq</a></li>
              <li><a href="/" className='text-gray-400'>Sitemap</a></li>
              <li><a href="/" className='text-gray-400'>T & C</a></li>
            </ul>
          </div>
          {/* Follow Us */}
          <div>
            <p className='font-bold'>Follow Us</p>
            <div className="flex justify-center mt-2">
              <a href="#" className="mr-4 text-gray-700 text-xl"><LuFacebook /></a>
              <a href="#" className="mr-4 text-gray-700 text-xl"><SlSocialLinkedin /></a>
              <a href="#" className="mr-4 text-gray-700 text-xl"><IoLogoInstagram /></a>
              <a href="#" className="text-gray-700 text-xl"><CiTwitter /></a>
            </div>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="col-span-4 mt-4 text-sm text-gray-500  text-center border-t border-gray-300 pt-4">
            <div className=" mx-20">
            <p className="float-left">&copy; 2024 Your Company. All rights reserved.</p>
            <p className="float-right">Developed by Unipolar</p>
            </div>
          </div>
    </footer>
    </>
  );
};

export default Footer;

