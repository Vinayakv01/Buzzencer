import React from 'react';
import arrow from "../../assets/idashboardlogo/arrow.png";
import arrows from "../../assets/idashboardlogo/arrows.png";
import stars from "../../assets/idashboardlogo/stars.png";
import line from "../../assets/idashboardlogo/lines.png";
import rupee from "../../assets/idashboardlogo/rupee.png";
import linkedin from "../../assets/logo/linkedin.svg";
import twitter from "../../assets/logo/twitter.svg";
import facebook from "../../assets/logo/facebook.svg";
const Dashboard = () => {
  // Array of JSON data with logos for containers
  const containersData = [
    { id: 1, logo: rupee, name: 'Current Earning', progess: '123,456' },
    { id: 2, logo: arrow, name: 'Running Campaigns', progess: '13' },
    { id: 3, logo: arrows, name: 'Completed Campaigns', progess: '50' },
    { id: 4, logo: line, name: 'Buzzencer Level', progess: '12' },
    { id: 5, logo: stars, name: 'Buzzencer Score', progess: '100+' }
  ];

  const platformLogos = {
    "Facebook": facebook,
    "Instagram": twitter,
    "Twitter": linkedin
  };


  const campaignData = [
    {
      "id": 1,
      "campaign": "Nike Sport + Casual shoes promoting",
      "earning": "Rs. 400000/-",
      "details": {
        "description": "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.",
        "platforms": ["Facebook", "Instagram", "Twitter"],
        "start_date": "3rd March 2021",
        "end_date": "15th April 2021"
      }
    },
    {
      "id": 2,
      "campaign": "Another Campaign",
      "earning": "Rs. 300000/-",
      "details": {
        "description": "Another dummy text",
        "platforms": ["Facebook", "Instagram", "Twitter"],
        "start_date": "1st January 2022",
        "end_date": "31st December 2022"
      }
    }
  ];

  // Array of background colors for containers
  const colors = ['bg-gradient-to-r from-[#F5F5FC] to-[#D3D2E6]', 'bg-gradient-to-r from-[#F5F5FC] to-[#F5DEB7]', 'bg-gradient-to-r from-[#F5F5FC] to-[#D4F0CE]', 'bg-gradient-to-r from-[#F5F5FC] to-[#F1CFCE]', 'bg-gradient-to-r from-[#F5F5FC] to-[#B7EEF5]'];

  return (

    <div className="h-screen font-Montserrat bg-[#F7F6FC]">
      <div className="grid lg:grid-cols-3 gap-5 p-4 bg-[#F7F6FC]">
        {containersData.map((container, index) => (
          <div key={container.id} className={`p-4 h-[124px] rounded-2xl border-white border-2 ${colors[index % colors.length]}`}>
            <p className=" mt-2 font-semibold">{container.name}</p>

            <div className="flex mt-2 justify-between items-center">
              <div className="text-2xl font-semibold">{container.progess}</div>
              <div className="flex justify-end">
                <img src={container.logo} alt={container.name} className="w-12" />
              </div>
            </div>

          </div>
        ))}
      </div>

      <div>
        {campaignData.map((data) => (
          <div key={data.id} className="p-4 mx-4 mt-4 bg-white rounded-2xl shadow-md font-Montserrat">
            <h2 className=" font-semibold ">{data.campaign}</h2>
           
            <span className="flex justify-between">
            <p className="text-black mt-3 text-sm font-semibold mb-2"><span className="font-normal">Campaign Earning:</span> {data.earning}</p>
            <button className="text-sm px-8 pt-2.5 pb-3 bg-[#403bbf] hover:bg-blue-600 text-white rounded-full">View Details</button>
            </span>

            <div className="mb-4 text-sm">
              <h3 className="">Campaign Description:</h3>
              <p className="text-gray-600 mt-2">{data.details.description}</p>
            </div>
            <div className="mb-4 flex flex-row">
              <div className="mr-4 flex flex-row ">
                <h3 className="text-sm">Platforms:</h3>
                <ul className="list-inside space-x-2 flex flex-row">
                  {data.details.platforms ? (
                    data.details.platforms.map((platform, index) => (
                      <li key={index} className="mr-2 ml-2">
                        <img src={platformLogos[platform]} alt={platform} className="w-5" />
                      </li>
                    ))
                  ) : (
                    <li>No platforms available</li>
                  )}
                </ul>

              </div>
              <div className="flex flex-row space-x-3">
                <p className="md:ml-3 text-sm ">Start Date: {data.details.start_date}</p>
c
                <p className="text-sm">End Date: {data.details.end_date}</p>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
