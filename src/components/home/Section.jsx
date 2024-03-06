// import React from 'react';

// const Section = () => {
//   return (
//     <section className="container mx-auto py-12 px-4 lg:px-0">
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
//         {/* SVG Image on the Left */}
//         <div>
//           <img src="public\images\about-buzzencer.webp" alt="SVG Image" className="" />
//         </div>
//         {/* Heading and Paragraph on the Right */}
//         <div>
//           <h2 className="text-3xl lg:text-4xl font-bold mb-4">About Buzzencer</h2>
//           <p className="text-lg lg:text-xl text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Section;


import React from 'react';
import about from "../../assets/about-buzzencer.webp"
const Section = () => {
  return (
    <section className="container mx-auto py-12 px-4 lg:px-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* SVG Image on the Left */}
        <div>
          <img src={about} alt="SVG Image" className="w-[421px]  h-[500px] mx-auto mb-6" />
        </div>
        {/* Heading and Paragraph on the Right */}
        <div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">About Buzzencer</h2>
          <p className="text-lg lg:text-xl text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full">Know More</button>
        </div>
      </div>
    </section>
  );
};

export default Section;
