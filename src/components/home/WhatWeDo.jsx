import React from 'react';

const WhatWeDo = () => {
  return (
    <section className="bg-gray-200 py-12">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">What We Do</h2>
          <p className="text-sm lg:text-base text-gray-600">Sample text in small font size</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Discovery of Influencers */}
          <div className="bg-gradient-to-b from-gray-300 to-gray-400 p-6 rounded-lg border-2 border-white">
            <div className="flex justify-center items-center bg-white h-16 w-16 rounded-full mb-4 mx-auto">
              {/* Your icon component here */}
              <svg className="w-8 h-8 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                {/* Your icon SVG content here */}
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Discovery of Influencers</h3>
            <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          {/* Creative Strategies and Direction */}
          <div className="bg-gradient-to-b from-gray-300 to-gray-400 p-6 rounded-lg border-2 border-white">
            <div className="flex justify-center items-center bg-white h-16 w-16 rounded-full mb-4 mx-auto">
              {/* Your icon component here */}
              <svg className="w-8 h-8 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                {/* Your icon SVG content here */}
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Creative Strategies and Direction</h3>
            <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          {/* Coordinate and Activation */}
          <div className="bg-gradient-to-b from-gray-300 to-gray-400 p-6 rounded-lg border-2 border-white">
            <div className="flex justify-center items-center bg-white h-16 w-16 rounded-full mb-4 mx-auto">
              {/* Your icon component here */}
              <svg className="w-8 h-8 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                {/* Your icon SVG content here */}
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Coordinate and Activation</h3>
            <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          {/* Detailed Reporting and Insights */}
          <div className="bg-gradient-to-b from-gray-300 to-gray-400 p-6 rounded-lg border-2 border-white">
            <div className="flex justify-center items-center bg-white h-16 w-16 rounded-full mb-4 mx-auto">
              {/* Your icon component here */}
              <svg className="w-8 h-8 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                {/* Your icon SVG content here */}
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Detailed Reporting and Insights</h3>
            <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
