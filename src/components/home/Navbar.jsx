import React, { useState } from 'react';
import buzzencer_logo from '../../assets/buzzencer_logo.svg';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="py-4 px-8 bg-transparent">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src={buzzencer_logo} alt="G Logo" className="h-9" />
        </div>

        <div className="block lg:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none"
          >
            &#9776;
          </button>
        </div>

        <div className="hidden lg:flex space-x-5 items-center">
          <div className="space-x-6  flex items-center">
            <Link
              to="/"
              className={`text-lg ${location.pathname === '/' ? 'text-blue-600' : 'text-black'} hover:text-gray-500`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-lg ${location.pathname === '/about' ? 'text-blue-600' : 'text-black'} hover:text-gray-500`}
            >
              About us
            </Link>
            <Link
              to="/contact"
              className={`text-lg ${location.pathname === '/contact' ? 'text-blue-600' : 'text-black'} hover:text-gray-500`}
            >
              Contact Us
            </Link>
          </div>

          <Link
            to="/signin"
            className="text-white text-lg px-8 py-2  bg-[#403bbf] rounded-full hover:bg-opacity-75 transition duration-300"
          >
            Sign-in
          </Link>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden mt-2 space-y-2">
          <Link to="/" className={`text-white block  ${location.pathname === '/' ? 'hover:text-gray-500' : ''}`}>
            Home
          </Link>
          <Link to="/about" className={`text-white block  ${location.pathname === '/about' ? 'hover:text-gray-500' : ''}`}>
            About us
          </Link>
          <Link to="/contact" className={`text-white block  ${location.pathname === '/contact' ? 'hover:text-gray-500' : ''}`}>
            Contact Us
          </Link>
          <Link to="/signin" className=" hover:text-gray-500">Login</Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
