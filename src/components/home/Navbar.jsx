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
    <div className={` md:px-20 w-full ${location.pathname === '/contact' ? 'bg-white' : 'bg-transparent'}`}>
    <nav className={`py-4 px-8 ${location.pathname === '/contact' ? 'bg-white' : 'bg-transparent'}`}>
      <div className="flex justify-between items-center">
        <div >
        {/* className="flex items-center space-x-2" */}
          <Link to="/">
            <img src={buzzencer_logo} alt="G Logo" className="h-9" />
          </Link>
        </div>

        <div className="block lg:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-[#403bbf] focus:outline-none"
          >
            &#9776;
          </button>
        </div>

        <div className="hidden lg:flex space-x-5 items-center">
          <div className="space-x-6 font-Poppins ">
            <Link
              to="/"
              className={` ${location.pathname === '/' ? 'text-blue-600' : 'text-black'}  hover:text-gray-500`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={` ${location.pathname === '/about' ? 'text-blue-600' : 'text-black'} hover:text-gray-500`}
            >
              About us
            </Link>
            <Link
              to="/contact"
              className={` ${location.pathname === '/contact' ? 'text-blue-600' : 'text-black'} hover:text-gray-500`}
            >
              Contact Us
            </Link>
          </div>

          <Link
            to="/signin"
            className="text-white text-sm font-[650] font-Poppins px-9 pt-2.5 pb-3  bg-[#403bbf] rounded-full hover:bg-opacity-75 transition duration-300"
          >
            Sign-in
          </Link>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#403bbf] rounded-xl font-Poppins px-6 py-4 mt-2 space-y-2">
          <Link to="/" className={`text-white block  ${location.pathname === '/' ? 'hover:text-gray-500' : ''}`}>
            Home
          </Link>
          <Link to="/about" className={`text-white block  ${location.pathname === '/about' ? 'hover:text-gray-500' : ''}`}>
            About us
          </Link>
          <Link to="/contact" className={`text-white block  ${location.pathname === '/contact' ? 'hover:text-gray-500' : ''}`}>
            Contact Us
          </Link>
          <span className="flex justify-end">
          <Link to="/signin" className="text-white text-sm font-[650] font-Poppins px-9 pt-2.5 pb-3 bg-[rgba(1,1,1,0.1)] rounded-full ">Login</Link>
          </span>
        </div>
      )}
    </nav>
    </div>
  );
};

export default NavBar;





// import React, { useState } from 'react';
// import buzzencer_logo from '../../assets/buzzencer_logo.svg';
// import { Link, useLocation } from 'react-router-dom';

// const NavBar = () => {
//   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const location = useLocation();

//   const toggleMobileMenu = () => {
//     setMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <nav className="py-4 px-8 container mx-auto bg-transparent">
//       <div className=" flex justify-between items-center">
//         <div className="flex items-center space-x-2">
//           <Link to="/">
//           <img src={buzzencer_logo} alt="G Logo" className="h-9" />
//           </Link>
//         </div>

//         <div className="block lg:hidden">
//           <button
//             onClick={toggleMobileMenu}
//             className="text-[#403bbf] focus:outline-none"
//           >
//             &#9776;
//           </button>
//         </div>

//         <div className="hidden lg:flex space-x-5 items-center">
//           <div className="space-x-6 font-Poppins  flex items-center">
//             <Link
//               to="/"
//               className={` ${location.pathname === '/' ? 'text-blue-600' : 'text-black'}  hover:text-gray-500`}
//             >
//               Home
//             </Link>
//             <Link
//               to="/about"
//               className={` ${location.pathname === '/about' ? 'text-blue-600' : 'text-black'} hover:text-gray-500`}
//             >
//               About us
//             </Link>
//             <Link
//               to="/contact"
//               className={` ${location.pathname === '/contact' ? 'text-blue-600' : 'text-black'} hover:text-gray-500`}
//             >
//               Contact Us
//             </Link>
//           </div>

//           <Link
//             to="/signin"
//             className="text-white text-sm font-[650] font-Poppins px-9 pt-2.5 pb-3  bg-[#403bbf] rounded-full hover:bg-opacity-75 transition duration-300"
//           >
//             Sign-in
//           </Link>
//         </div>
//       </div>

//       {isMobileMenuOpen && (
//         <div className="lg:hidden bg-[#403bbf] rounded-xl font-Poppins px-6 py-4 mt-2 space-y-2">
//           <Link to="/" className={`text-white block  ${location.pathname === '/' ? 'hover:text-gray-500' : ''}`}>
//             Home
//           </Link>
//           <Link to="/about" className={`text-white block  ${location.pathname === '/about' ? 'hover:text-gray-500' : ''}`}>
//             About us
//           </Link>
//           <Link to="/contact" className={`text-white block  ${location.pathname === '/contact' ? 'hover:text-gray-500' : ''}`}>
//             Contact Us
//           </Link>
//           <span className="flex justify-end">
//           <Link to="/signin" className="text-white text-sm font-[650] font-Poppins px-9 pt-2.5 pb-3 bg-[rgba(1,1,1,0.1)] rounded-full ">Login</Link>
//           </span>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default NavBar;
