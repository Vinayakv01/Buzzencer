import React from 'react';
import arrow from "../../assets/idashboardlogo/arrow.png";
import arrows from "../../assets/idashboardlogo/arrows.png";
import stars from "../../assets/idashboardlogo/stars.png";
import line from "../../assets/idashboardlogo/lines.png";
import rupee from "../../assets/idashboardlogo/rupee.png";
import ApexCharts from "react-apexcharts";

const Dashboard = () => {
  // Array of JSON data with logos for containers
  const containersData = [
    { id: 1, logo: rupee, name: 'Number Of Influencer', progess: '4200' },
    { id: 2, logo: arrow, name: 'Number Of Brands', progess: '500' },
    { id: 3, logo: arrows, name: 'Total Campaigns', progess: '5000' },
    { id: 4, logo: line, name: 'Campaign Completed', progess: '1000' },
    { id: 5, logo: stars, name: 'Running Campaign', progess: '2000' },
    { id: 6, logo: stars, name: 'Influencer Payment', progess: '1M' }
  ];

  // Data for the first bar chart
  const data1 = {
    series: [{
      data: [30, 40, 45, 50, 49, 60, 70, 91, 125]
    }],
    options: {
      chart: {
        type: 'bar',
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded'
        },
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      },
      yaxis: {
        title: {
          text: 'Number of Influencers'
        }
      },
      fill: {
        opacity: 1
      }
    },
  };

  // Data for the second bar chart
  const data2 = {
    series: [{
      data: [25, 30, 35, 40, 45, 50]
    }],
    options: {
      chart: {
        type: 'bar',
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded'
        },
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      },
      yaxis: {
        title: {
          text: 'Some other data'
        }
      },
      fill: {
        opacity: 1
      }
    },
  };

  // Array of background colors for containers
  const colors = ['bg-gradient-to-r from-[#F5F5FC] to-[#D3D2E6]', 'bg-gradient-to-r from-[#F5F5FC] to-[#F5DEB7]', 'bg-gradient-to-r from-[#F5F5FC] to-[#D4F0CE]', 'bg-gradient-to-r from-[#F5F5FC] to-[#F1CFCE]', 'bg-gradient-to-r from-[#F5F5FC] to-[#B7EEF5]', 'bg-gradient-to-r from-[#F5F5FC] to-[#B8CBF4]'];

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

      <div className="grid grid-cols-2 gap-5 p-4">
        <div>
          <h2>Bar Chart 1</h2>
          <ApexCharts options={data1.options} series={data1.series} type="bar" height={350} />
        </div>
        <div>
          <h2>Bar Chart 2</h2>
          <ApexCharts options={data2.options} series={data2.series} type="bar" height={350} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
