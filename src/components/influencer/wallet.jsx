import React from 'react'
import rupee from "../../assets/idashboardlogo/rupee.png";
import { LuIndianRupee } from "react-icons/lu";

const Wallet = () => {

  const containersData = [
    { id: 1, logo: rupee, name: 'Current Earning', progess: '123,456' },

  ];

  const colors = ['bg-gradient-to-r from-[#F5F5FC] to-[#E0E1EE]'];

  return (
    <div className="bg-white shadow-2xl rounded-xl p-4 m-4">
      <div className="font-Montserrat ">
        <div className="grid lg:grid-cols-3 gap-5  ">
          {containersData.map((container, index) => (
            <div key={container.id} className={`p-4 h-[124px] rounded-3xl border-white border-2 ${colors[index % colors.length]}`}>
              <p className=" mt-2 font-semibold">{container.name}</p>

              <div className="flex mt-2 justify-between items-center">
                <div className="text-2xl font-semibold flex items-center">
                  <span style={{ marginRight: '5px' }}><LuIndianRupee /></span>
                  {container.progess}
                </div>
                <div className="flex justify-end">
                  <img src={container.logo} alt={container.name} className="w-12" />
                </div>
              </div>

            </div>
          ))}
        </div>

        <p className=" font-semibold text-sm mb-4">Enter your bank account detail to transfer your balance.</p>
        <p className="  text-sm mb-8">Note: Is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text ever since the 1500s</p>

        <div className="w-9/12">
          <span className="flex flex-row space-x-3">
            <div className="mb-4 w-1/2 font-Poppins">
              <label htmlFor="accountholdername" className="block text-gray-600 mb-2 ">
                Account Holder Name
              </label>
              <input
                type="text"
                id="accountholdername"
                name="accountholdername"
                className="w-full border text-sm px-6 pt-2 pb-2 rounded-full"
                placeholder="Enter Account Holder Name"
              />
            </div>
            <div className="mb-4 w-1/2 font-Poppins">
              <label htmlFor="accountno" className="block text-gray-600 mb-2 ">
                Account No
              </label>
              <input
                type="accountno"
                id="accountno"
                name="accountno"
                className="w-full border text-sm px-6 pt-2 pb-2 rounded-full"
                placeholder="Enter Account No"
              />
            </div>
          </span>
          <span className="flex flex-row space-x-3">
            <div className="mb-4 w-1/2 font-Poppins">
              <label htmlFor="bankname" className="block text-gray-600 mb-2 ">
                Bank Name
              </label>
              <input
                type="text"
                id="bankname"
                name="bankname"
                className="w-full border text-sm  px-6 pt-2 pb-2 rounded-full"
                placeholder="bankname"
              />
            </div>
            <div className="mb-4 w-1/2 font-Poppins">
              <label htmlFor="password" className="block text-gray-600 mb-2 ">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full border text-sm px-6 pt-2 pb-2 rounded-full"
                placeholder="Enter Password"
              />
            </div>
          </span>
          <span className="flex justify-center items-center mb-6">
            <button
              type="submit"
              className=" text-white mt-4 text-sm font-[650] font-Poppins px-12 pt-2.5 pb-2.5  bg-[#403bbf] rounded-full hover:bg-opacity-75 transition duration-300"
            >
              Submit
            </button>
          </span>
          <p className="text-sm font-semibold">For any query contact us on +919833456737 or <span className="text-[#403bbf]">Info@buzzencers.com</span></p>
        </div>
      </div>





    </div>
  )
}

export default Wallet
