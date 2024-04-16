// import React, { useState } from 'react';
// import facebook from "../../assets/logo/facebook.svg";
// import twitter from "../../assets/logo/twitter.svg";
// import instagram from "../../assets/logo/instagram.svg";
// import linkedin from "../../assets/logo/linkedin.svg";
// import { Check, X, ArrowLeft } from 'lucide-react';
// import Select from 'react-select';
// import profile from '../../assets/profile.png';


// const Createcampaign = () => {
//   const [step, setStep] = useState(1);

 

//   const nextStep = () => {
//     setStep(prevStep => prevStep + 1);
//   };

//   const prevStep = () => {
//     setStep(prevStep => prevStep - 1);
//   };

//   const totalSteps = 3;
 

 

 


//   const [showModal, setShowModal] = useState(false);

//   const handlemSubmit = (e) => {
//     e.preventDefault();
//     // Your form submission logic here

//     // Show the modal
//     setShowModal(true);
//   };

//   const closeModal = () => {
//     // Close the modal
//     setShowModal(false);
//   };

//   return (
//     <div className="font-Montserrat">
//       <div className="mb-4 relative">
//         <div className="text-center max-w-md mx-auto mt-2 flex items-center justify-between ">
//           {[...Array(totalSteps)].map((_, index) => (
//             <React.Fragment key={index}>
//               <div className={`w-8 h-8 flex items-center justify-center rounded-full  ${index < step ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'}`}>
//                 {index + 1}
//               </div>
//               {index < totalSteps - 1 && (
//                 <div className="h-[1.5px] w-44 mb-1" style={{ marginTop: '3.5px', background: `${index < step - 1 ? '#2563EB' : '#ffffff'}` }}></div>
//               )}
//             </React.Fragment>
//           ))}
//         </div>


//       </div>
//       {step === 1 && (
//         <form onSubmit={nextStep} className="mt-5 bg-white p-4 m-4 rounded-xl shadow-md">
         
//           <div className="flex items-center justify-center">
//             <button type="submit" className="text-sm font-[650] text-white font-Poppins px-9 pt-2.5 pb-2.5  bg-[#403bbf] rounded-full hover:bg-opacity-75 transition duration-300">Next</button>
//           </div>
//         </form>
//       )}

//       {step === 2 && (
//         <div className="bg-white p-8 m-4">
        
//           <div className=" mt-6 flex items-center">
//             {/* Arrow on the left */}
//             <ArrowLeft className="text-[#403bbf] " onClick={prevStep} />

//             {/* Button centered vertically */}
//             <span className="flex-grow flex justify-center">
//               <button onClick={nextStep} className="text-sm font-[650] text-white font-Poppins px-9 pt-2.5 pb-2.5  bg-[#403bbf] rounded-full hover:bg-opacity-75 transition duration-300">Save & Continue</button>
//             </span>
//           </div>

//         </div>
//       )}

//       {step === 3 && (
//         <form onSubmit={handlemSubmit} className="mt-8 bg-white m-4 p-4">
         
//           <div className="mt-6 flex items-center">
//             {/* Arrow on the left */}
//             <ArrowLeft className="text-[#403bbf] " onClick={prevStep} />

//             {/* Button centered vertically */}
//             <span className="flex-grow flex justify-center">
//               <button type="submit" className="text-sm font-[650] text-white font-Poppins px-9 pt-2.5 pb-2.5  bg-[#403bbf] rounded-full hover:bg-opacity-75 transition duration-300">Save</button>
//             </span>
//           </div>
//         </form>
//       )}

//       {/* Modal */}
//       {showModal && (
//         <Modal onClose={closeModal}>
//           <div className="flex items-center justify-center">
//             {/* Image */}
//             <img src="your-image-url.jpg" alt="Congratulations" className="w-1/2" />

//             {/* Text */}
//             <div className="w-1/2">
//               <h2 className="text-2xl font-bold mb-4">Congratulations!</h2>
//               <p className="text-lg">Your profile is complete.</p>
//             </div>
//           </div>
//         </Modal>
//       )}
//     </div>

//   );
// };

// export default Createcampaign;




import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

const CreateCampaign = () => {
  const [step, setStep] = useState(1);
  const [showModal, setShowModal] = useState(false);

  const nextStep = () => {
    if (step < 3) {
      setStep(prevStep => prevStep + 1);
    } else {
      handleFormSubmit();
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(prevStep => prevStep - 1);
    }
  };

  const handleFormSubmit = (e) => {
    e?.preventDefault();
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="font-Montserrat bg-white m-4 p-4 rounded-xl shadow-md">
      <div className="text-center max-w-md mx-auto mt-2 mb-4 flex items-center justify-between">
        {[...Array(3)].map((_, index) => (
          <React.Fragment key={index}>
            <div className={`w-8 h-8 flex items-center justify-center rounded-full ${index < step ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'}`}>
              {index + 1}
            </div>
            {index < 2 && (
              <div className="flex-auto mx-2 h-0.5 rounded bg-gradient-to-r from-blue-500 to-gray-300" style={{ background: index < step - 1 ? '#2563EB' : '#E5E7EB' }} />
            )}
          </React.Fragment>
        ))}
      </div>

      {step !== 3 && (
        <div className="flex items-center justify-center space-x-4">
          {step > 1 && <ArrowLeft className="text-[#403bbf]" onClick={prevStep} />}
          <button onClick={nextStep} className="text-sm font-medium text-white px-9 py-2.5 bg-[#403bbf] rounded-full hover:bg-opacity-75 transition duration-300">
            {step === 2 ? 'Save & Continue' : 'Next'}
          </button>
        </div>
      )}

      {step === 3 && (
        <form onSubmit={handleFormSubmit} className="flex items-center justify-center space-x-4 mt-6">
          <ArrowLeft className="text-[#403bbf]" onClick={prevStep} />
          <button type="submit" className="text-sm font-medium text-white px-9 py-2.5 bg-[#403bbf] rounded-full hover:bg-opacity-75 transition duration-300">
            Save
          </button>
        </form>
      )}

      {showModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Congratulations!</h2>
            <p>Your campaign is complete.</p>
            <button onClick={closeModal} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateCampaign;
