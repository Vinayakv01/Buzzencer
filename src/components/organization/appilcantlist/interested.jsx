import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoCheckmark } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";


const Interested = () => {

  const ageOptions = ["Under 18", "18-24", "25-34", "35-44", "45-54", "55-64", "65 or Above"];
  const genderOptions = ["Male", "Female", "Other"];
  const locationOptions = ["USA", "Canada", "UK", "Australia", "Germany", "France", "India", "Other"];

  const userDatas = [
    { name: "John Doe", age: 30, email: "johndoe@example.com" },
    { name: "Jane Doe", age: 25, email: "janedoe@example.com" },
    { name: "Jim Beam", age: 50, email: "jimbeam@example.com" },
    { name: "Jack Daniels", age: 65, email: "jackd@example.com" },
    { name: "Jill Stein", age: 42, email: "jillstein@example.com" }
  ];

  const [selectedAge, setSelectedAge] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  return (
    <div>
        <div className="flex justify-between items-center w-full p-5">
        <div className="flex space-x-6 flex-grow">
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
            <IoIosArrowDown className="absolute top-0 right-0 bottom-0 mt-3.5 mr-2.5 pointer-events-none" aria-hidden="true" />
          </div>

          <div className="relative">
            <select
              id="gender"
              name="gender"
              className="mt-1 block w-full border-gray-300 rounded-full py-2 pl-4 pr-6 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              value={selectedGender}
              onChange={(e) => setSelectedGender(e.target.value)}
              style={{ WebkitAppearance: 'none', MozAppearance: 'none', appearance: 'none' }}
            >
              <option value="">Select Gender</option>
              {genderOptions.map((option, index) => (
                <option key={index} value={option}>{option}</option>
              ))}
            </select>
            <IoIosArrowDown className="absolute top-0 -right-1 bottom-0 mt-3.5 mr-2.5 pointer-events-none" aria-hidden="true" />
          </div>

          <div className="relative">
            <select
              id="location"
              name="location"
              className="mt-1 block w-full border-gray-300 rounded-full py-2 pl-4 pr-6 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              style={{ WebkitAppearance: 'none', MozAppearance: 'none', appearance: 'none' }}
            >
              <option value="">Select Location</option>
              {locationOptions.map((option, index) => (
                <option key={index} value={option}>{option}</option>
              ))}
            </select>
            <IoIosArrowDown className="absolute top-0 -right-1 bottom-0 mt-3.5 mr-2.5 pointer-events-none" aria-hidden="true" />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <p className="text-gray-700">No of Applications: 30</p>
          <button className="text-sm font-[650] text-white font-Poppins px-9 pt-2.5 pb-2.5  bg-[#403bbf] rounded-full hover:bg-opacity-75 transition duration-300">
            Request Influencer
          </button>
        </div>
      </div>

      <div className="w-full p-4 mt-3 rounded-xl shadow-xl bg-white overflow-auto max-h-[calc(100vh-200px)]">
        <style>
          {`
            .overflow-auto::-webkit-scrollbar {
            display: none;
            }
          `}
        </style>
        <div className="w-full grid grid-cols-5 gap-4 p-4 bg-blue-100 rounded-full items-center">
          <h4 className="text-gray-800 font-medium">Name</h4>
          <h4 className="text-gray-800 font-medium">Age</h4>
          <h4 className="text-gray-800 font-medium">Email</h4>
          <h4 className="text-gray-800 font-medium "></h4>
          <h4 className="text-gray-800 font-medium"></h4>  
        </div>
        {userDatas.map((userData, index) => (
          <div key={index} className="w-full grid grid-cols-5 gap-4 p-4 items-center">
            <h4 className="text-gray-800">{userData.name}</h4>
            <h4 className="text-gray-800">{userData.age}</h4>
            <h4 className="text-gray-800">{userData.email}</h4>
            <div className="flex items-center ">
             
            </div>
            <button className="text-sm font-[650] w-40 text-white font-Poppins px-9 pt-2.5 pb-2.5  bg-[#403bbf] rounded-full hover:bg-opacity-75 transition duration-300">View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};
  
  export default Interested;