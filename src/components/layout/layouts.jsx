import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../home/Navbar';
import Footer from '../home/Footer';

const Layout = () => {
  const location = useLocation();

  // Function to check if current location is one of the specified routes
  const shouldOverlapFooter = () => {
    const overlapRoutes = ['/contact', '/signin', '/signup'];
    return overlapRoutes.includes(location.pathname);
  };

  return (
    <div className="relative min-h-screen">
      <div className="absolute w-full z-50">
        {/* Navbar Component */}
        <Navbar />
      </div>
      <div className={`${shouldOverlapFooter() ? 'pb-24 ' : ''}`}>
        {/* Main Content */}
        <Outlet />
      </div>
      <div className={`${shouldOverlapFooter() ? 'absolute -bottom-52 left-0 w-full' : 'relative'}`}>
        {/* Footer Component */}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;






// import React from 'react';
// import { Outlet } from 'react-router-dom';
// import Navbar from '../home/Navbar';
// import Footer from '../home/Footer';

// const Layout = () => {
//   return (
//     <div className="relative  min-h-screen">
//       <div className="absolute w-full z-50">
//         {/* Navbar Component */}
//         <Navbar />
//       </div>
//       <div className="">
//         {/* Main Content */}
//         <Outlet />
//       </div>
//       <div>
//         {/* Footer Component */}
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default Layout;

