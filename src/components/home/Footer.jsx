import React from 'react';
import { LuFacebook } from 'react-icons/lu';
import { CiTwitter } from 'react-icons/ci';
import { IoLogoInstagram } from 'react-icons/io';
import { SlSocialLinkedin } from 'react-icons/sl';
import Wave from 'react-wavify';
import logo from '../../assets/buzzencer_logo.svg';

const Footer = () => {
  return (
    <div>
<div className="wave-container" style={{ height: '80px' }}>
  <Wave
    fill="#f7f7fd"
    paused={false}
    style={{ display: 'flex' }}
    options={{
      height: 30,
      amplitude: 30,
      speed: 0.25,
      points: 6,
    }}
  />
</div>

      <footer className="relative font-Montserrat bg-[#f7f7fd] text-black py-4">

        <div className="container mx-auto text-center relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-20 mx-4 text-left">

            {/* Logo */}
            <div className="md:col-span-2 lg:col-span-1 mb-6 md:mb-0">
              <img src={logo} alt="Logo" className="mb-6 " />
              <div className="text-gray-400 text-left">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                </p>
              </div>
            </div>

            {/* Contact Us */}
            <div className="md:col-span-2 lg:col-span-1">
              <p className="font-bold mb-2 md:mb-7 mt-4">Contact Us</p>
              <p className="text-gray-400">Narmada Fresh Fruit Exports Flat No.4, Prashant Appt, Nashik - 422 009, Maharashtra</p>
              <div className="text-gray-400 mt-2">
                <a href="tel:9218540407">+91 9218540407</a>
              </div>
              <div className="text-gray-400">
                <a href="mailto:sanjay@narmadafresh.com">sanjay@narmadafresh.com</a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-1">
              <p className="font-bold text-base mb-2 md:mb-7 mt-4">Quick Links</p>
              <ul className="text-gray-400">
                <li><a href="/">Faq</a></li>
                <li><a href="/">Sitemap</a></li>
                <li><a href="/">T & C</a></li>
              </ul>
            </div>

            {/* Follow Us */}
            <div className="lg:col-span-1">
              <p className="font-bold text-base mb-2 md:mb-7 mt-4">Follow Us</p>
              <div className="flex justify-start mt-2">
                <a href="#" className="mr-4 text-gray-700 text-xl"><LuFacebook /></a>
                <a href="#" className="mr-4 text-gray-700 text-xl"><SlSocialLinkedin /></a>
                <a href="#" className="mr-4 text-gray-700 text-xl"><IoLogoInstagram /></a>
                <a href="#" className="text-gray-700 text-xl"><CiTwitter /></a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="col-span-4 mt-4 text-sm text-gray-500 text-center border-t border-gray-300 pt-4">
          <div className="mx-4 md:mx-20 mb-6">
            <p className="md:float-left">&copy; 2024 Buzzencer. All rights reserved.</p>
            <p className="md:float-right">Developed by Unipolar</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
