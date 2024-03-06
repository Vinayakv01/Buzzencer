import React from 'react';
import { TfiDashboard } from "react-icons/tfi";
import { FaRegUser } from "react-icons/fa";
import { MdCampaign } from "react-icons/md";
import { IoIosHeartEmpty } from "react-icons/io";
import { CiWallet } from "react-icons/ci";


const Sidebar = () => {
  return (
    <div className="flex flex-col h-full w-64 bg-gray-800 text-white">
      <div className="p-4">
        <h2>
        <img src="public\images\buzzencer_logo.svg"/>
        </h2>
              </div>
      <ul className="flex flex-col space-y-2">
        <li className="p-4 hover:bg-blue-700">
        <TfiDashboard /><a href="#" className="block">Dashboard</a>
        </li>
        <li className="p-4 hover:bg-blue-700">
         <FaRegUser/> <a href="#" className="block">Profile</a>
        </li>
        <li className="p-4 hover:bg-blue-700">
          <MdCampaign/><a href="#" className="block">Campaign</a>
        </li>
        <li className="p-4 hover:bg-blue-700">
          <IoIosHeartEmpty/><a href="#" className="block">Wishlist</a>
        </li>
        <li className="p-4 hover:bg-blue-700">
         <CiWallet/> <a href="#" className="block">Wallet</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

// import React from 'react';
// import { TfiDashboard } from "react-icons/tfi";
// import { FaRegUser } from "react-icons/fa";
// import { MdCampaign } from "react-icons/md";
// import { IoIosHeartEmpty } from "react-icons/io";
// import { CiWallet } from "react-icons/ci";

// const Sidebar = () => {
//   return (
//     <div className="flex flex-col h-full w-64 bg-gray-800 text-white">
//       <div className="p-4 flex items-center">
//         <img src="public/images/buzzencer_logo.svg" alt="Logo" className="filter invert(100%)" />
//       </div>
//       <ul className="flex flex-col space-y-2">
//         <li className="p-4 hover:bg-blue-700 flex items-center">
//           <TfiDashboard className="w-6 h-6 mr-2" />
//           <a href="#" className="block">Dashboard</a>
//         </li>
//         <li className="p-4 hover:bg-blue-700 flex items-center">
//           <FaRegUser className="w-6 h-6 mr-2" />
//           <a href="#" className="block">Profile</a>
//         </li>
//         <li className="p-4 hover:bg-blue-700 flex items-center">
//           <MdCampaign className="w-6 h-6 mr-2" />
//           <a href="#" className="block">Campaign</a>
//         </li>
//         <li className="p-4 hover:bg-blue-700 flex items-center">
//           <IoIosHeartEmpty className="w-6 h-6 mr-2" />
//           <a href="#" className="block">Wishlist</a>
//         </li>
//         <li className="p-4 hover:bg-blue-700 flex items-center">
//           <CiWallet className="w-6 h-6 mr-2" />
//           <a href="#" className="block">Wallet</a>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;

