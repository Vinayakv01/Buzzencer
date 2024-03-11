import React from "react";
import signupImg from "../../assets/signup.svg";
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="flex h-screen">
      {/* Left side (Form) */}
      <div className="w-1/2 flex items-center justify-center">
        <form className="w-3/4 p-8 ">
          <h2 className="text-3xl font-semibold text-center font-Poppins mb-1">Create Your Free Account </h2>
          <p className="text-center font-Poppins mb-6">Create your free account in Short-it. </p>

          <div className="mb-4 font-Poppins">
            <label htmlFor="invitecode" className="block text-gray-600 mb-2 text-sm font-semibold">
              Invite Code
            </label>
            <input
              type="invitecode"
              id="invitecode"
              name="invitecode"
              className="w-full border px-6 pt-3 pb-3.5 rounded-full"
              placeholder="Enter Invite Code"
            />
          </div>

          <span className="flex flex-row space-x-3">
            <div className="mb-4 w-1/2 font-Poppins">
              <label htmlFor="firstname" className="block text-gray-600 mb-2 text-sm font-semibold">
                Firstname
              </label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                className="w-full border px-6 pt-3 pb-3.5 rounded-full"
                placeholder="Enter First Name"
              />
            </div>
            <div className="mb-4 w-1/2 font-Poppins">
              <label htmlFor="lastname" className="block text-gray-600 mb-2 text-sm font-semibold">
                Lastname
              </label>
              <input
                type="lastname"
                id="lastname"
                name="lastname"
                className="w-full border px-6 pt-3 pb-3.5 rounded-full"
                placeholder="Enter Last Name"
              />
            </div>
          </span>

          <div className="mb-4 font-Poppins">
            <label htmlFor="username" className="block text-gray-600 mb-2 text-sm font-semibold">
              User
            </label>
            <input
              type="username"
              id="username"
              name="username"
              className="w-full border px-6 pt-3 pb-3.5 rounded-full"
              placeholder="Enter User Name"
            />
          </div>

          <div className="mb-4 font-Poppins">
            <label htmlFor="password" className="block text-gray-600 mb-2 text-sm font-semibold">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full border px-6 pt-3 pb-3.5 rounded-full"
              placeholder="Enter Password"
            />
          </div>


          <span className="flex flex-row justify-center ">
            <button
              type="submit"
              className=" text-white mt-4 text-sm font-[650] font-Poppins px-9 pt-2.5 pb-3  bg-[#403bbf] rounded-full hover:bg-opacity-75 transition duration-300"
            >
              Sign Up
            </button>
          </span>
          <p className=" text-sm text-center mt-4 font-Poppins text-gray-600">
            Already have an account? <br /> <Link to="/signin" className="text-[#403bbf]">Login Here</Link>.
          </p>
        </form>
      </div>

      {/* Right side (Image) */}
      <div className="w-1/2 bg-blue-200 flex items-center justify-center">
        <img src={signupImg} alt="Signup" className="max-w-full max-h-full" />
      </div>
    </div>
  );
};

export default Signup;
