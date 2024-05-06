import React from "react";
import signupImg from "../../assets/signup.svg";
import { Link } from 'react-router-dom';
import Select from 'react-select';

const Signup = () => {

  const customStyles = {
    multiValue: (base, state) => ({
      ...base,
      backgroundColor: state.data.isFixed ? 'gray' : base.backgroundColor,
    }),
    control: (provided, state) => ({
      ...provided,
      borderRadius: '40px',
      boxShadow: state.isFocused ? '0 0 0 1px #403bbf' : 'none',
      padding: '5px', // Add padding here
      outline: 'none', // Remove default outline
      border: state.isFocused ? '1px solid #403bbf' : '1px solid #e5e7eb', // Add border when focused
    }),
    option: (provided, state) => ({
      ...provided,
      borderBottom: '1px solid #e5e7eb',
      padding: '10px 15px',
      backgroundColor: state.isSelected ? '#2563EB' : 'white',
      color: state.isSelected ? 'white' : 'black',
    }),

    multiValueLabel: (base, state) => ({
      ...base,
      fontWeight: state.data.isFixed ? 'bold' : base.fontWeight,
      color: state.data.isFixed ? 'white' : base.color,
      paddingRight: state.data.isFixed ? 6 : base.paddingRight,
    }),
    multiValueRemove: (base, state) => ({
      ...base,
      display: state.data.isFixed ? 'none' : base.display,
    }),
  };



  return (
    <div className="flex h-screen">
      {/* Left side (Form) */}
      <div className="w-1/2 flex items-center justify-center">
        <form className="w-3/4 p-8 ">
          <h2 className="text-3xl font-semibold text-center font-Poppins mb-1">Create Your Free Account </h2>
          <p className="text-center font-Poppins mb-6">Create your free account in Buzzencer. </p>

          <div className="mb-4 font-Poppins">
            <label htmlFor="invitecode" className="block text-gray-600 mb-2 text-sm font-semibold">
              Invite Code
            </label>
            <input
              type="invitecode"
              id="invitecode"
              name="invitecode"
              className="w-full border border-gray-300 focus:outline-[#403bbf] px-6 pt-3 pb-3 rounded-full"
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
                className="w-full border px-6 pt-3 pb-3 border-gray-300 focus:outline-[#403bbf] rounded-full"
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
                className="w-full border px-6 pt-3 pb-3 border-gray-300 focus:outline-[#403bbf] rounded-full"
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
              className="w-full border px-6 pt-3 pb-3 border-gray-300 focus:outline-[#403bbf] rounded-full"
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
              className="w-full border px-6 pt-3 pb-3 border-gray-300 focus:outline-[#403bbf] rounded-full"
              placeholder="Enter Password"
            />
          </div>

          <div className="font-Poppins">
            <label htmlFor="gender" className="block text-gray-600 text-sm font-semibold ">Influencer/Company</label>
            <Select
              id="gender"
              options={[
                { value: 'Influencer', label: 'Influencer' },
                { value: 'Company', label: 'Company' },
              ]}
              placeholder="Select Gender"
              styles={customStyles}
              isSearchable={false}
              className="mt-1   rounded-full  w-full"
              required
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
