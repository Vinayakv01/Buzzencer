import React from 'react'
import thlogo from '../../assets/heartslogo.png';
import number from '../../assets/number.png';
import message from '../../assets/message.png';
import location from '../../assets/location.png';

const Contact = () => {
  return (
    <div className="md:flex h-screen">
      {/* Left side (Image) */}

      <div className="md:w-1/2 h-3/4 md:h-full bg-[#413BBE] flex items-start pt-32 justify-center">
        <ul className="text-white mx-20 font-Montserrat space-y-10">
          <li className="flex items-center font-Yeseva text-5xl">
            <span> We Would Love To Hear From You
              <img src={thlogo} alt="Logo icon" className="h-9 mr-2" />
            </span>
          </li>
          <li className="flex items-center text-2xl">
            <img src={location} alt="Location icon" className="h-14 mr-2" />
            <span>Unipolar-Tecnologies, CasaBlanca, Belapur</span>
          </li>
          <li className="flex items-center text-2xl">
            <img src={message} alt="Message icon" className="h-14 mr-2" />
            <span>contact@unipolar.in</span>
          </li>
          <li className="flex items-center text-2xl">
            <img src={number} alt="Number icon" className="h-14 mr-2" />
            <span>+91 1234567890</span>
          </li>
        </ul>
      </div>

      {/* Right side (Form) */}
      <div className="md:w-1/2 w-full flex items-center justify-center">
        <form className="w-3/4  p-8 ">
          <div className="flex gap-4">
            <div className="mb-4 font-Poppins">
              <label htmlFor="name" className="block text-gray-600 mb-2 text-sm font-semibold ">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full border px-6 pt-2 pb-2.5 rounded-full"
                placeholder="Enter Name"
              />
            </div>
            <div className="mb-4 font-Poppins">
              <label htmlFor="phone no" className="block text-gray-600 mb-2 text-sm font-semibold ">
                Phone No
              </label>
              <input
                type="phone no"
                id="phone no"
                name="phone no"
                className="w-full border px-6 pt-2 pb-2.5 rounded-full"
                placeholder="Enter Phone No"
              />
            </div>
          </div>

          <div className="mb-4 font-Poppins">
            <label htmlFor="email id" className="block text-gray-600 mb-2 text-sm font-semibold ">
              Email Id
            </label>
            <input
              type="email id"
              id="email id"
              name="email id"
              className="w-full border px-6 pt-2 pb-2.5 rounded-full"
              placeholder="Enter Email Id"
            />
          </div>
          <div className="mb-10 font-Montserrat">

            <label htmlFor="message" className="block text-gray-600 font-semibold  mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="shadow-sm  mt-1  w-full sm:text-sm border  rounded-3xl p-3"
              placeholder="Message"
              style={{ overflow: 'auto', resize: 'none' }}
            ></textarea>

          </div>

          <span className="flex flex-row justify-center ">
            <button
              type="submit"
              className="text-white text-sm font-[650] font-Poppins px-9 pt-2.5 pb-2.5  bg-[#403bbf] rounded-full hover:bg-opacity-75 transition duration-300"
            >
              Send
            </button>
          </span>

        </form>
      </div>
    </div>
  );
};

export default Contact 