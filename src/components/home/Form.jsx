import React from 'react';

const ContactForm = () => {
  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold text-center mb-4 font-yeseva">GET IN TOUCH WITH US</h2>
      <form className="max-w-md mx-auto">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <input
              type="text"
              className="w-full rounded-full border border-gray-300 px-4 py-2 focus:outline-none focus:border-blue-400"
              placeholder="Your Name"
            />
          </div>
          <div>
            <input
              type="tel"
              className="w-full rounded-full border border-gray-300 px-4 py-2 focus:outline-none focus:border-blue-400"
              placeholder="Phone Number"
            />
          </div>
          <div>
            <input
              type="email"
              className="w-full rounded-full border border-gray-300 px-4 py-2 focus:outline-none focus:border-blue-400"
              placeholder="Email Address"
            />
          </div>
          <div>
            <input
              type="text"
              className="w-full rounded-full border border-gray-300 px-4 py-2 focus:outline-none focus:border-blue-400"
              placeholder="Subject"
            />
          </div>
        </div>
        <div className="mb-6">
          <textarea
            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:border-blue-400"
            placeholder="Your Message"
            rows="4"
          ></textarea>
        </div>
        
        <div className="flex justify-center">
          <button
            type="submit"
            className="w-40  bg-[#403BBF] text-white rounded-full py-2 px-4"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
