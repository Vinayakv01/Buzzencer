import React from 'react'
import loginImg from "../../assets/login.svg";
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="md:flex h-screen">
      {/* Left side (Image) */}

      <div className="w-1/2 bg-[#413BBE] flex items-center justify-center">
      </div>

      {/* Right side (Form) */}
      <div className="md:w-1/2 w-full flex items-center justify-center">
        <form className="w-3/4  p-8 ">
         <div className="flex gap-4">
          <div className="mb-4 font-Poppins">
            <label htmlFor="username" className="block text-gray-600 mb-2 text-sm font-semibold ">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full border px-6 pt-2 pb-2.5 rounded-full"
              placeholder="Enter User Name"
            />
          </div>
          <div className="mb-4 font-Poppins">
            <label htmlFor="password" className="block text-gray-600 mb-2 text-sm font-semibold ">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full border px-6 pt-2 pb-2.5 rounded-full"
              placeholder="Enter Password"
            />
          </div>
          </div>

          <div className="mb-4 font-Poppins">
            <label htmlFor="password" className="block text-gray-600 mb-2 text-sm font-semibold ">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full border px-6 pt-2 pb-2.5 rounded-full"
              placeholder="Enter Password"
            />
          </div>
        <div className="mb-10 font-Montserrat">
          
          <label htmlFor="message" className="block text-gray-600 font-semibold  mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="6"
            className="shadow-sm  mt-1  w-full sm:text-sm border  rounded-3xl p-3"
            placeholder="Message"
            style={{ overflow: 'auto', resize: 'none' }}            
          ></textarea>
          
        </div>
       
        <span className="flex flex-row justify-center ">
         <button
            type="submit"
            className="text-white text-sm font-[650] font-Poppins px-9 pt-2.5 pb-3  bg-[#403bbf] rounded-full hover:bg-opacity-75 transition duration-300"
          >
            Login
          </button>
          </span>
      
        </form>
      </div>
    </div>
  );
};

export default Contact 