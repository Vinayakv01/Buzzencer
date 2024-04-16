import React, { useState } from 'react';
import { Check, X, ArrowLeft } from 'lucide-react';

const Createcampaign = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(prevStep => prevStep + 1);
  };

  const prevStep = () => {
    setStep(prevStep => prevStep - 1);
  };

  const totalSteps = 3;

  const [showModal, setShowModal] = useState(false);

  const handlemSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="font-Montserrat">
      <div className="mb-4 relative">
        <div className="text-center max-w-md mx-auto mt-2 flex items-center justify-between ">
          {[...Array(totalSteps)].map((_, index) => (
            <React.Fragment key={index}>
              <div className={`w-8 h-8 flex items-center justify-center rounded-full  ${index < step ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'}`}>
                {index + 1}
              </div>
              {index < totalSteps - 1 && (
                <div className="h-[1.5px] w-44 mb-1" style={{ marginTop: '3.5px', background: `${index < step - 1 ? '#2563EB' : '#ffffff'}` }}></div>
              )}
            </React.Fragment>
          ))}
        </div>


      </div>
      {step === 1 && (
        <form onSubmit={nextStep} >

          <div className="mt-5 bg-white p-4 m-4 rounded-xl shadow-md">
            <div className="flex items-center justify-center">

            </div>
          </div>
          
          <button type="submit" className="text-sm font-[650] text-white font-Poppins px-9 pt-2.5 pb-2.5  bg-[#403bbf] rounded-full hover:bg-opacity-75 transition duration-300">Next</button>

        </form>
      )}

      {step === 2 && (
        <div className="bg-white p-8 m-4">

          <div className=" mt-6 flex items-center">
            {/* Arrow on the left */}
            <ArrowLeft className="text-[#403bbf] " onClick={prevStep} />

            {/* Button centered vertically */}
            <span className="flex-grow flex justify-center">
              <button onClick={nextStep} className="text-sm font-[650] text-white font-Poppins px-9 pt-2.5 pb-2.5  bg-[#403bbf] rounded-full hover:bg-opacity-75 transition duration-300">Save & Continue</button>
            </span>
          </div>

        </div>
      )}

      {step === 3 && (
        <form onSubmit={handlemSubmit} className="mt-8 bg-white m-4 p-4">

          <div className="mt-6 flex items-center">
            {/* Arrow on the left */}
            <ArrowLeft className="text-[#403bbf] " onClick={prevStep} />

            {/* Button centered vertically */}
            <span className="flex-grow flex justify-center">
              <button type="submit" className="text-sm font-[650] text-white font-Poppins px-9 pt-2.5 pb-2.5  bg-[#403bbf] rounded-full hover:bg-opacity-75 transition duration-300">Save</button>
            </span>
          </div>
        </form>
      )}

      {/* Modal */}
      {showModal && (
        <Modal onClose={closeModal}>
          <div className="flex items-center justify-center">
            {/* Image */}
            <img src="your-image-url.jpg" alt="Congratulations" className="w-1/2" />

            {/* Text */}
            <div className="w-1/2">
              <h2 className="text-2xl font-bold mb-4">Congratulations!</h2>
              <p className="text-lg">Your profile is complete.</p>
            </div>
          </div>
        </Modal>
      )}
    </div>

  );
};

export default Createcampaign;
