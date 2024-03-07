// Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../home/Navbar';
import Footer from '../home/Footer';

const Layout = () => {
  return (
    <div className="relative  min-h-screen">
      <div className="absolute w-screen z-50">
        {/* Navbar Component */}
        <Navbar />
      </div>
      <div className="">
        {/* Main Content */}
        <Outlet />
      </div>
      <div>
        {/* Footer Component */}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;