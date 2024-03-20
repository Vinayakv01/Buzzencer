import React from 'react';
import arrow from "../../assets/idashboardlogo/arrow.png";
import arrows from "../../assets/idashboardlogo/arrows.png";
import stars from "../../assets/idashboardlogo/stars.png";
import line from "../../assets/idashboardlogo/lines.png";
import rupee from "../../assets/idashboardlogo/rupee.png";

const Dashboard = () => {
  // Array of JSON data with logos for containers
  const containersData = [
    { id: 1, logo: arrow, name: 'Container 1' },
    { id: 2, logo: arrows, name: 'Container 2' },
    { id: 3, logo: stars, name: 'Container 3' },
    { id: 4, logo: line, name: 'Container 4' },
    { id: 5, logo: rupee, name: 'Container 5' }
  ];

  // Array of background colors for containers
  const colors = ['bg-gradient-to-r from-[#E0E1EE] to-[#F5F5FC]', 'bg-gradient-to-r from-[#E0E1EE] to-[#E4CEAA]', 'bg-gradient-to-r from-[#E0E1EE] to-[#DEF3DC]', 'bg-gradient-to-r from-[#E0E1EE] to-[#F3DCDE]', 'bg-gradient-to-r from-[#E0E1EE] to-[#CEF3F7]'];

  return (
    <div className="grid lg:grid-cols-3 gap-5 p-4">
      {containersData.map((container, index) => (
        <div key={container.id} className={`p-4 h-[124px] rounded-2xl border-2 ${colors[index % colors.length]}`}>
          <img src={container.logo} alt={container.name} className=" w-12 " />
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
