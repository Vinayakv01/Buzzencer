// import React, { useState } from 'react';
// import Influencer from '../influencer/Influencer/';
// const Navbar = () => {
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
//               <a href="/Influencer" className="text-black font-medium text-lg ml-6 mb-7">
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
      
          
//       {/* Main content */}
//       <div className="ml-64">
//         {/* Your main content goes here */}
//       </div>
//     </div>
//   );
// };

// export default Navbar;


import React, { useState } from 'react';



const Navbar = () => {
  // State variable to track sidebar visibility
  const [showSidebar, setShowSidebar] = useState(false);

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div>
      {/* Navigation */}
      <nav className="bg-white-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center mx-0">
            <img src="public\images\buzzencer_logo.svg" alt="Logo" />
          </div>
  
          {/* Navigation Links */}
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="text-black font-medium text-lg ml-6 mb-7">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="text-black font-medium text-lg ml-6 mb-7">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="text-black font-medium text-lg ml-6 mb-7">
                Contact Us
              </a>
            </li>
            <li>
              {/* Clicking this link toggles the sidebar */}
              <a href="/Influencer" className="text-black font-medium text-lg ml-6 mb-7">
                Influencer
              </a>
            </li>
          </ul>
  
          {/* Sign In Button */}
          <button className="bg-[#403BBF] hover:bg-blue-600 text-white  font-semibold text-center pt-2.5  py-2 px-10 rounded-full">
            Sign In
          </button>
        </div>
      </nav>
      
          
      {/* Main content */}
      <div className="ml-64">
        {/* Your main content goes here */}
      </div>
    </div>
  );
};

export default Navbar;

