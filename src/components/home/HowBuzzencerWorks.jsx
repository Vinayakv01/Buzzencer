// import React from 'react';
// import how from "../../assets/Desktop - 2.png";
// import star from 
// const HowBuzzencerWorks = () => {
//   return (
//     <section className="relative">
//       {/* Background Image */}
//       <img src={how} alt="How Buzzencer Works" className="w-full h-auto" />
      
//       {/* Text Overlay */}
  
//     </section>
//   );
// };

// export default HowBuzzencerWorks;






import React, { useState, useEffect } from 'react';
import star from "../../assets/star.png";
import users from "../../assets/users.png";
import eye from "../../assets/eye.png";
import arrow from "../../assets/arrow.png";
import background from "../../assets/Desktop - 2.png"; // Placeholder background image
import bghow from "../../assets/map.png";
const HowBuzzencerWorks = () => {
  const [isMobileView, setIsMobileView] = useState(false);

  // Check if the viewport width is less than a certain threshold to determine if it's a mobile view
  const handleResize = () => {
    setIsMobileView(window.innerWidth <= 768); // Adjust the threshold as needed
  };

  // Add event listener for window resize
  useEffect(() => {
    handleResize(); // Initial check on component mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative">
      {/* Conditional rendering based on mobile view */}
      {isMobileView ? (
        <div className="flex flex-col font-Poppins px-4 items-center w-full py-4 bg-cover bg-center bg-white" style={{ backgroundImage: `url(${bghow})` }}>
          
          <h1 className="font-Yeseva text-2xl mb-8 mt-4">How Buzzencer Works</h1>
          <div className="flex flex-col items-center">
            <span className="flex flex-col items-center space-y-2">
          <img src={arrow} alt="Arrow" className="w-24 h-24" />
          <h2 className="font-semibold text-xl">Login / Sign up</h2>
          <p className="text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          </span>

          <span className="flex flex-col items-center space-y-2">
          <img src={users} alt="Arrow" className="w-24 h-24" />
          <h2 className="font-semibold text-xl">Create Your Profile</h2>
          <p className="text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          </span>

          <span className="flex flex-col items-center space-y-2">
          <img src={eye} alt="Arrow" className="w-24 h-24" />
          <h2 className="font-semibold text-xl">Find Campaign</h2>
          <p className="text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          </span>

          <span className="flex flex-col items-center space-y-2">
          <img src={star} alt="Arrow" className="w-24 h-24" />
          <h2 className="font-semibold text-xl">Work with brands</h2>
          <p className="text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          </span>

          </div>
        </div>
      ) : (
        // Background Image for non-mobile view
        <img src={background} alt="How Buzzencer Works" className="w-full h-auto" />
      )}
    </section>
  );
};

export default HowBuzzencerWorks;
