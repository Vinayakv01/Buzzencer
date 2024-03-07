import React from 'react';
import love from "../../assets/logo/love.png";
import creative from "../../assets/logo/creative.png";
import world from "../../assets/logo/world.png";
import doc from "../../assets/logo/doc.png";

const WhatWeDo = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl  font-Yeseva mb-6 mt-6">What We Do</h2>
          <p className="text-sm lg:text-base text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been<br/> the industry's standard dummy text. Lorem Ipsum is simply dummy text of the printing and<br/>
            typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <CardComponent
            icon={love}
            title="Discovery of Influencers"
            description="Lorem Ipsum is simply dummy text of the printing typesetting industry."
          />
          <CardComponent
            icon={creative}
            title="Creative Strategies and Direction"
            description="Lorem Ipsum is simply dummy text of the printing typesetting industry."
          />
          <CardComponent
            icon={world}
            title="Coordinate and Activation"
            description="Lorem Ipsum is simply dummy text of the printing typesetting industry."
          />
          <CardComponent
            icon={doc}
            title="Detailed Reporting and Insights"
            description="Lorem Ipsum is simply dummy text of the printing typesetting industry."
          />
        </div>
      </div>
    </section>
  );
};

const CardComponent = ({ icon, title, description }) => {
  return (
    <div className="bg-gradient-to-b from-[#F2F2F9] to-[#DFDFE1] p-6 rounded-3xl flex flex-col border-2 border-white">
      <div className="bg-white h-20 w-20 rounded-full mb-4 shadow-blue-gradient">
        <img src={icon} alt="icon" className="h-full w-full object-contain" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default WhatWeDo;
