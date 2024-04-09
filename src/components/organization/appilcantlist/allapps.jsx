import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Allapp = () => {
  // Sample data for dropdowns
  const ageOptions = ["Under 18", "18-24", "25-34", "35-44", "45-54", "55-64", "65 or Above"];
  const genderOptions = ["Male", "Female", "Other"];
  const locationOptions = ["USA", "Canada", "UK", "Australia", "Germany", "France", "India", "Other"];

  // State variables to store selected values
  const [selectedAge, setSelectedAge] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  return (
    <div className="flex  space-x-6 mt-5">
      {/* Age Dropdown */}

<div className="relative">
  <select
    id="age"
    name="age"
    className="mt-1 block w-full border-gray-300 rounded-full py-2 px-4 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
    value={selectedAge}
    onChange={(e) => setSelectedAge(e.target.value)}
    style={{ WebkitAppearance: 'none', MozAppearance: 'none', appearance: 'none' }}
  >
    <option value="">Select Age</option>
    {ageOptions.map((option, index) => (
      <option key={index} value={option}>{option}</option>
    ))}
  </select>
  <IoIosArrowDown className="absolute top-0 right-0 bottom-0 mt-3.5 mr-2.5    pointer-events-none" style={{ pointerEvents: 'none' }} />
</div>



      {/* Gender Dropdown */}
      <div>
        <select
          id="gender"
          name="gender"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          value={selectedGender}
          onChange={(e) => setSelectedGender(e.target.value)}
        >
          <option value="">Select Gender</option>
          {genderOptions.map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </select>
      </div>

      {/* Location Dropdown */}
      <div>
        <select
          id="location"
          name="location"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
        >
          <option value="">Select Location</option>
          {locationOptions.map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Allapp;
