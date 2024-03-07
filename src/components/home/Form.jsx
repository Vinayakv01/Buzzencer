import React from 'react';

const ContactForm = () => {
  return (
    <div className="container mx-auto">
      <h2 className="text-4xl  font-Yeseva text-center mb-6 mt-20 font-yeseva">Get In Touch With Us</h2>
      <form className="mx-auto max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 font-Montserrat">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-600  font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full text-sm border p-3 rounded-full"
              placeholder="Enter Name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-600 font-semibold mb-2">
              Phone No
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full text-sm border p-3 rounded-full"
              placeholder="Enter Phone No"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 font-semibold mb-2">
              Email Id
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full text-sm border p-3 rounded-full"
              placeholder="Enter Email Id"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="subject" className="block text-gray-600 font-semibold mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="w-full text-sm border p-3 rounded-full"
              placeholder="Enter Subject"
            />
          </div>
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
            style={{ resize: 'none' }}
          ></textarea>
        </div>

        
        <div className="flex mb-16 text-sm font-Montserrat font-semibold justify-center">
          <button
            type="submit"
            className=" bg-[#403BBF] text-white rounded-full pt-3.5 pb-4 px-8 "
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
