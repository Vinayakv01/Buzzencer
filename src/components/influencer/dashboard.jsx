import React from 'react';
import arrow from "../../assets/idashboardlogo/arrow.png";
import arrows from "../../assets/idashboardlogo/arrows.png";
import stars from "../../assets/idashboardlogo/stars.png";
import line from "../../assets/idashboardlogo/lines.png";
import rupee from "../../assets/idashboardlogo/rupee.png";

const Dashboard = () => {
  // Array of JSON data with logos for containers
  const containersData = [
    { id: 1, logo: rupee, name: 'Current Earning', progess: '123,456' },
    { id: 2, logo: arrow, name: 'Running Campaigns', progess: '13' },
    { id: 3, logo: arrows, name: 'Completed Campaigns', progess: '50' },
    { id: 4, logo: line, name: 'Buzzencer Level', progess: '12' },
    { id: 5, logo: stars, name: 'Buzzencer Score', progess: '100+' }
  ];

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
        "platforms": ["Facebook", "Instagram"],
        "start_date": "1st January 2022",
        "end_date": "31st December 2022"
      }
    }
  ];

  // Array of background colors for containers
  const colors = ['bg-gradient-to-r from-[#F5F5FC] to-[#E0E1EE]', 'bg-gradient-to-r from-[#F5F5FC] to-[#E4CEAA]', 'bg-gradient-to-r from-[#F5F5FC] to-[#DEF3DC]', 'bg-gradient-to-r from-[#F5F5FC] to-[#F3DCDE]', 'bg-gradient-to-r from-[#F5F5FC] to-[#CEF3F7]'];

  return (

    <div className="h-screen bg-[#F7F6FC]">
      <div className="grid lg:grid-cols-3 gap-5 p-4 bg-[#F7F6FC]">
        {containersData.map((container, index) => (
          <div key={container.id} className={`p-4 h-[124px] rounded-2xl border-2 ${colors[index % colors.length]}`}>
            <p className=" mt-2">{container.name}</p>

            <div className="flex mt-2 justify-between items-center">
              <div>{container.progess}</div>
              <div className="flex justify-end">
                <img src={container.logo} alt={container.name} className="w-12" />
              </div>
            </div>

          </div>
        ))}
      </div>

      <div>
         {campaignData.map((data) => (
        <div key={data.id} className="p-4 mx-4 mt-4 bg-gray-200 rounded-md shadow-md">
          <h2 className="text-xl font-semibold">{data.campaign}</h2>
          <p className="text-gray-600 mb-2">Campaign Earning: {data.earning}</p>
          <div className="mb-4">
            <h3 className="font-semibold">Campaign Description:</h3>
            <p className="text-gray-600">{data.details.description}</p>
          </div>
          <div className="mb-4 flex flex-row">
    <h3 className="font-semibold ">Platforms:</h3>
  <div className="mr-4 flex flex-row ">
    <h3 className="font-semibold ">Platforms:</h3>
    <ul className="list-disc list-inside flex flex-row ">
      {data.details.platforms.map((platform, index) => (
        <li key={index}>{platform}</li>
      ))}
    </ul>
  </div>
  <div className="flex flex-row">
    <p className="font-semibold">Start Date: {data.details.start_date}</p>
    <p className="font-semibold">End Date: {data.details.end_date}</p>
  </div>
</div>

        </div>
      ))}
      </div>
    </div>
  );
};

export default Dashboard;
