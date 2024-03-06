// import React from 'react';
// import Layout from './influencer/layout';
// const Home = () => {
//   return (
//     <nav className="bg-white-800 p-4">
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Logo */}
//         <div className="flex items-center mx-0">
//           <img src="/images/buzzencer_logo.svg" alt="Logo" />
//         </div>

//         {/* Navigation Links */}
//         <ul className="flex space-x-4">
//           <li>
//             <a href="/" className="text-black font-medium text-lg ml-6 mb-7">
//               Home
//             </a>
//           </li>
//           <li>
//             <a href="/about" className="text-black font-medium text-lg ml-6 mb-7">
//               About Us
//             </a>
//           </li>
//           <li>
//             <a href="/contact" className="text-black font-medium text-lg ml-6 mb-7">
//               Contact Us
//             </a>
//           </li>
//           <li>
//             <a href="/layout" className="text-black font-medium text-lg ml-6 mb-7">
//               Influencer
//             </a>
//           </li>
//         </ul>

//         {/* Sign In Button */}
//         <button className="bg-[#403BBF] hover:bg-blue-600 text-white  font-semibold text-center pt-2.5  py-2 px-10 rounded-full">
//           Sign In
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Home;

// import React, { useState } from 'react';
// import Layout from '../influencer/influencer';
// const Home = () => {
//   // State variable to track sidebar visibility
//   const [showSidebar, setShowSidebar] = useState(false);

//   // Function to toggle sidebar visibility
//   const toggleSidebar = () => {
//     setShowSidebar(!showSidebar);
//   };

//   return (
//     <div>
//       {/* Navigation */}
//       <nav className="bg-white-800 p-4">
//         <div className="container mx-auto flex justify-between items-center">
//           {/* Logo */}
//           <div className="flex items-center mx-0">
//             <img src="/home/buzzencer_logo.svg" alt="Logo" />
//           </div>
  
//           {/* Navigation Links */}
//           <ul className="flex space-x-4">
//             <li>
//               <a href="/" className="text-black font-medium text-lg ml-6 mb-7">
//                 Home
//               </a>
//             </li>
//             <li>
//               <a href="/about" className="text-black font-medium text-lg ml-6 mb-7">
//                 About Us
//               </a>
//             </li>
//             <li>
//               <a href="/contact" className="text-black font-medium text-lg ml-6 mb-7">
//                 Contact Us
//               </a>
//             </li>
//             <li>
//               {/* Clicking this link toggles the sidebar */}
//               <a href="/layout" onClick={toggleSidebar} className="text-black font-medium text-lg ml-6 mb-7">
//                 Influencer
//               </a>
//             </li>
//           </ul>
  
//           {/* Sign In Button */}
//           <button className="bg-[#403BBF] hover:bg-blue-600 text-white  font-semibold text-center pt-2.5  py-2 px-10 rounded-full">
//             Sign In
//           </button>
//         </div>
//       </nav>
      
//       {/* Conditionally render the sidebar */}
//       {showSidebar && <Sidebar />}
      
//       {/* Main content */}
//       <div className="ml-64">
//         {/* Your main content goes here */}
//       </div>
//     </div>
//   );
// };

// export default Home;

import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Banner from './Banner'
import Form from './Form'
import Section from './Section'
import WhatWeDo from './WhatWeDo'
import CustomerTestimonials from './CustomerTestimonial'
import HowBuzzencerWorks from './HowBuzzencerWorks'
const home = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Section/>
      <WhatWeDo />
      <HowBuzzencerWorks/>
      <CustomerTestimonials/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default home
