import React, { useState } from 'react';
import facebook from "../../assets/logo/facebook.svg";
import twitter from "../../assets/logo/twitter.svg";
import instagram from "../../assets/logo/instagram.svg";
import linkedin from "../../assets/logo/linkedin.svg";
import { Check, X, ArrowLeft } from 'lucide-react';


const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    address: '',
    city: '',
    state: '',
    zip: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const nextStep = () => {
    setStep(prevStep => prevStep + 1);
  };

  const prevStep = () => {
    setStep(prevStep => prevStep - 1);
  };

  const totalSteps = 3;
  const progress = ((step - 1) / (totalSteps - 1)) * 100;
  const [showSocialMediaInput1, setShowSocialMediaInput1] = useState(false);
  const [showSocialMediaInput2, setShowSocialMediaInput2] = useState(false);
  const [showSocialMediaInput3, setShowSocialMediaInput3] = useState(false);
  const [showSocialMediaInput4, setShowSocialMediaInput4] = useState(false);

  const handleSave1 = () => {
    // Placeholder save function
    console.log('Saved!');
    // Close the input field
    setShowSocialMediaInput1(false);
  };

  const handleSave2 = () => {
    // Placeholder save function
    console.log('Saved!');
    // Close the input field
    setShowSocialMediaInput2(false);
  };
  const handleSave3 = () => {
    // Placeholder save function
    console.log('Saved!');
    // Close the input field
    setShowSocialMediaInput3(false);
  };
  const handleSave4 = () => {
    // Placeholder save function
    console.log('Saved!');
    // Close the input field
    setShowSocialMediaInput4(false);
  };

  const categories = [
    { label: 'Arts', value: 'arts' },
    { label: 'Automobile', value: 'automobile' },
    { label: 'Beauty & Make Up', value: 'beauty_makeup' },
    { label: 'Business & Startup', value: 'business_startup' }
  ];

  return (
    <div className="">
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
        <form onSubmit={nextStep} className="mt-8">
          <div className="mb-4">
            <label htmlFor="firstName" className="block font-medium">First Name</label>
            <input type="text" name="firstName" id="firstName" value={formData.firstName} onChange={handleChange} className="mt-1 p-2 border rounded-md w-full" required />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block font-medium">Last Name</label>
            <input type="text" name="lastName" id="lastName" value={formData.lastName} onChange={handleChange} className="mt-1 p-2 border rounded-md w-full" required />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Next</button>
        </form>
      )}

      {step === 2 && (
        <div className="bg-white p-8 m-4">
          <div className="grid grid-cols-2 gap-4">
            {/* Row 1 */}
            <div className="flex flex-col">
              {/* Container 1 */}
              <div className="rounded-3xl border p-2  bg-white">
                <span className="flex flex-row justify-between px-2 items-center ">
                  <div className='flex '>
                    <img src={facebook} alt="Facebook Logo" className="w-5 mr-2" />
                    Facebook
                  </div>
                  {showSocialMediaInput1 ? (
                    <span className="flex mr-2">
                      <Check className="mr-2 w-5 cursor-pointer text-purple-600 rounded-full shadow-gray-400 h-5 shadow-md" onClick={handleSave1} />
                      <X className=" w-5 cursor-pointer text-red-500 rounded-full shadow-gray-400	h-5 shadow-md " onClick={() => setShowSocialMediaInput1(false)} />
                    </span>
                  ) : (
                    <button onClick={() => setShowSocialMediaInput1(true)}>
                      Connect+
                    </button>
                  )}
                </span>
                {showSocialMediaInput1 && (
                  <div className="ml-9 my-4">
                    <label htmlFor="username" className="block text-gray-600  text-sm font-semibold mt-4">
                      Username:
                    </label>
                    <input
                      type="text"
                      name="facebook"
                      id="facebook"
                      value={formData.facebook}
                      onChange={handleChange}
                      className="mt-1 p-2 border rounded-full w-8/12"
                      placeholder="Enter Username"
                    />
                  </div>
                )}
              </div>


              {/* Container 2 */}
              <div className="rounded-3xl mt-4 border p-2  bg-white">
                <span className="flex flex-row justify-between px-2 items-center ">
                  <div className='flex '>
                    <img src={twitter} alt="Twitter Logo" className="w-5 mr-2" />
                    Twitter
                  </div>
                  {showSocialMediaInput2 ? (
                    <span className="flex mr-2">
                      <Check className="mr-2 w-5 cursor-pointer text-purple-600 rounded-full shadow-gray-400 h-5 shadow-md" onClick={handleSave2} />
                      <X className=" w-5 cursor-pointer text-red-500 rounded-full shadow-gray-400	h-5 shadow-md " onClick={() => setShowSocialMediaInput2(false)} />
                    </span>
                  ) : (
                    <button onClick={() => setShowSocialMediaInput2(true)}>
                      Connect+
                    </button>
                  )}
                </span>
                {showSocialMediaInput2 && (
                  <div className="ml-9 my-4">
                    <label htmlFor="username" className="block text-gray-600  text-sm font-semibold mt-4">
                      Username:
                    </label>
                    <input
                      type="text"
                      name="twitter"
                      id="twitter"
                      value={formData.twitter}
                      onChange={handleChange}
                      className="mt-1 p-2 border rounded-full w-8/12"
                      placeholder="Enter Username"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Row 2 */}
            <div className="flex flex-col">
              {/* Container 3 */}
              <div className="rounded-3xl  border p-2  bg-white">
                <span className="flex flex-row justify-between px-2 items-center ">
                  <div className='flex '>
                    <img src={instagram} alt="Twitter Logo" className="w-5 mr-2" />
                    Twitter
                  </div>
                  {showSocialMediaInput3 ? (
                    <span className="flex mr-2">
                      <Check className="mr-2 w-5 cursor-pointer text-purple-600 rounded-full shadow-gray-400 h-5 shadow-md" onClick={handleSave3} />
                      <X className=" w-5 cursor-pointer text-red-500 rounded-full shadow-gray-400	h-5 shadow-md " onClick={() => setShowSocialMediaInput3(false)} />
                    </span>
                  ) : (
                    <button onClick={() => setShowSocialMediaInput3(true)}>
                      Connect+
                    </button>
                  )}
                </span>
                {showSocialMediaInput3 && (
                  <div className="ml-9 my-4">
                    <label htmlFor="username" className="block text-gray-600  text-sm font-semibold mt-4">
                      Username:
                    </label>
                    <input
                      type="text"
                      name="facebook"
                      id="facebook"
                      value={formData.instagram}
                      onChange={handleChange}
                      className="mt-1 p-2 border rounded-full w-8/12"
                      placeholder="Enter Username"
                    />
                  </div>
                )}
              </div>

              {/* Container 4 */}
              <div className="rounded-3xl mt-4 border p-2  bg-white">
                <span className="flex flex-row justify-between px-2 items-center ">
                  <div className='flex '>
                    <img src={linkedin} alt="Linkedin Logo" className="w-5 mr-2" />
                    Linked-In
                  </div>
                  {showSocialMediaInput4 ? (
                    <span className="flex mr-2">
                      <Check className="mr-2 w-5 cursor-pointer text-purple-600 rounded-full shadow-gray-400 h-5 shadow-md" onClick={handleSave4} />
                      <X className=" w-5 cursor-pointer text-red-500 rounded-full shadow-gray-400	h-5 shadow-md " onClick={() => setShowSocialMediaInput4(false)} />
                    </span>
                  ) : (
                    <button onClick={() => setShowSocialMediaInput4(true)}>
                      Connect+
                    </button>
                  )}
                </span>
                {showSocialMediaInput4 && (
                  <div className="ml-9 my-4">
                    <label htmlFor="username" className="block text-gray-600  text-sm font-semibold mt-4">
                      Username:
                    </label>
                    <input
                      type="text"
                      name="linkedin"
                      id="linkedin"
                      value={formData.linkedin}
                      onChange={handleChange}
                      className="mt-1 p-2 border rounded-full w-8/12"
                      placeholder="Enter Username"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* Save and Continue Button */}
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
        <form onSubmit={handleSubmit} className="mt-8 bg-white m-4 p-4">
          <div className="flex space-x-4">
            <div className="mb-4 flex-grow">
              <label htmlFor="primaryCategory" className="block font-medium mb-2">Primary Category</label>
              <select name="primaryCategory" id="primaryCategory" value={formData.primaryCategory} onChange={handleChange} className="mt-1 p-2 border rounded-full w-full" required>
                <option value="">Select Category</option>
                {categories.map(category => (
                  <option key={category.value} value={category.value}>{category.label}</option>
                ))}
              </select>
            </div>
            <div className="mb-4 flex-grow">
              <label htmlFor="secondaryCategory" className="block font-medium mb-2">Secondary Category</label>
              <select name="secondaryCategory" id="secondaryCategory" value={formData.secondaryCategory} onChange={handleChange} className="mt-1 p-2 border rounded-full w-full" required>
                <option value="">Select Category</option>
                {categories.map(category => (
                  <option key={category.value} value={category.value}>{category.label}</option>
                ))}
              </select>
            </div>
          </div>
          <button type="button" onClick={prevStep} className="mr-4 bg-gray-300 text-gray-700 px-4 py-2 rounded-md">Back</button>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Submit</button>
        </form>
      )}
    </div>
  );
};

export default MultiStepForm;
