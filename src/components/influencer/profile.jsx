import React, { useState } from 'react';
import facebook from "../../assets/logo/facebook.svg";
import twitter from "../../assets/logo/twitter.svg";
import instagram from "../../assets/logo/instagram.svg";
import linkedin from "../../assets/logo/linkedin.svg";
import { Check, X, ArrowLeft } from 'lucide-react';
import Select from 'react-select';
import CustomDatePicker from './CustomDatePicker';
import Modal from './Modal'; // Assuming you have a Modal component
import profile from '../../assets/profile.png';
import congrats from "../../assets/okay.png";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    userName: '',
    phoneno: '',
    email: '',
    dateOfBirth: null,
    gender: '',
    country: '',
    state: '',
    city: '',
    pincode: '',
    address: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleDateChange = (date) => {
    setFormData(prevData => ({
      ...prevData,
      dateOfBirth: date
    }));
  };

  const handleGenderChange = (selectedOption) => {
    setFormData(prevData => ({
      ...prevData,
      gender: selectedOption.value
    }));
  };

  const handleCountryChange = (selectedOption) => {
    setFormData(prevData => ({
      ...prevData,
      country: selectedOption.value
    }));
  };

  const handleStateChange = (selectedOption) => {
    setFormData(prevData => ({
      ...prevData,
      state: selectedOption.value
    }));
  };

  const handleCityChange = (selectedOption) => {
    setFormData(prevData => ({
      ...prevData,
      city: selectedOption.value
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



  const [selectedPrimaryCategories, setSelectedPrimaryCategories] = useState([]);
  const [selectedSecondaryCategories, setSelectedSecondaryCategories] = useState([]);

  const handlePrimaryCategoryChange = (selectedOptions) => {
    setSelectedPrimaryCategories(selectedOptions);
  };

  const handleSecondaryCategoryChange = (selectedOptions) => {
    setSelectedSecondaryCategories(selectedOptions);
  };

  const customStyles = {
    multiValue: (base, state) => ({
      ...base,
      backgroundColor: state.data.isFixed ? 'gray' : base.backgroundColor,
    }),
    control: (provided, state) => ({
      ...provided,
      borderRadius: '40px',
      boxShadow: state.isFocused ? '0 0 0 1px #403bbf' : 'none',
      padding: '2px', // Add padding here
      outline: 'none', // Remove default outline
      border: state.isFocused ? '1px solid #403bbf' : '1px solid #e5e7eb', // Add border when focused
    }),
    option: (provided, state) => ({
      ...provided,
      borderBottom: '1px solid #e5e7eb',
      padding: '10px 15px',
      backgroundColor: state.isSelected ? '#2563EB' : 'white',
      color: state.isSelected ? 'white' : 'black',
    }),

    multiValueLabel: (base, state) => ({
      ...base,
      fontWeight: state.data.isFixed ? 'bold' : base.fontWeight,
      color: state.data.isFixed ? 'white' : base.color,
      paddingRight: state.data.isFixed ? 6 : base.paddingRight,
    }),
    multiValueRemove: (base, state) => ({
      ...base,
      display: state.data.isFixed ? 'none' : base.display,
    }),
  };

  const [showModal, setShowModal] = useState(false);

  const handlemSubmit = (e) => {
    e.preventDefault();
    // Your form submission logic here

    // Show the modal
    setShowModal(true);
  };

  const closeModal = () => {
    // Close the modal
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
        <form onSubmit={nextStep} className="mt-5 bg-white p-4 m-4 rounded-xl shadow-md">
          <div className="flex flex-col justify-center items-center mt-2 mb-6 ">
            <div className="flex justify-center items-center border p-4 rounded-lg">
              <img src={profile} alt="Profile" className="w-8 h-8 rounded-full cursor-pointer mr-4" />
              Add Profile Picture
            </div>
            <span className="text-[#403bbf]  mt-2">Reset Password</span>
          </div>
          <div className="mb-4 flex space-x-4">
            <div className="w-1/3">
              <label htmlFor="firstName" className="block font-medium">First Name</label>
              <input type="text" name="firstName" id="firstName" value={formData.firstName} onChange={handleChange} className="mt-1 p-2 border border-gray-300 focus:outline-[#403bbf] rounded-full w-full"  />
            </div>
            <div className="w-1/3">
              <label htmlFor="lastName" className="block font-medium">Last Name</label>
              <input type="text" name="lastName" id="lastName" value={formData.lastName} onChange={handleChange} className="mt-1 p-2 border rounded-full border-gray-300 focus:outline-[#403bbf] w-full"  />
            </div>
            <div className="w-1/3">
              <label htmlFor="userName" className="block font-medium">User Name</label>
              <input type="text" name="userName" id="userName" value={formData.userName} onChange={handleChange} className="mt-1 p-2 border border-gray-300 focus:outline-[#403bbf] rounded-full w-full"  />
            </div>
          </div>
          <div className="mb-4 flex space-x-4">
            <div className="w-1/3">
              <label htmlFor="dateOfBirth" className="block font-medium">Date of Birth</label>
              <CustomDatePicker
                selectedDate={formData.dateOfBirth}
                handleChange={handleDateChange}
                className="mt-1 border  w-full"

              />
            </div>
            <div className="w-1/3">
              <label htmlFor="gender" className="block font-medium">Gender</label>
              <Select
                id="gender"
                value={{ value: formData.gender, label: formData.gender }}
                onChange={handleGenderChange}
                options={[
                  { value: 'Male', label: 'Male' },
                  { value: 'Female', label: 'Female' },
                  { value: 'Other', label: 'Other' }
                ]}
                placeholder="Select Gender"
                styles={customStyles}

                isSearchable={false}
                className="mt-1 border rounded-full w-full"
                
              />
            </div>
            <div className="w-1/3">
              <label htmlFor="country" className="block font-medium">Country</label>
              <Select
                id="country"
                value={{ value: formData.country, label: formData.country }}
                onChange={handleCountryChange}
                options={[
                  { value: 'Usa', label: 'USA' },
                  { value: 'Uk', label: 'UK' },
                  { value: 'INDIA', label: 'India' }
                ]}
                placeholder="Select Country"
                isSearchable={false}
                styles={customStyles}

                className="mt-1  border rounded-full w-full"
                
              />
            </div>
          </div>
          <div className="mb-4 flex space-x-4">
            <div className="w-1/3">
              <label htmlFor="state" className="block font-medium">State</label>
              <Select
                id="state"
                value={{ value: formData.state, label: formData.state }}
                onChange={handleStateChange}
                options={[
                  { value: 'ca', label: 'California' },
                  { value: 'ny', label: 'New York' },
                  { value: 'tx', label: 'Texas' }
                ]}
                placeholder="Select State"
                isSearchable={false}
                styles={customStyles}

                className="mt-1  border rounded-full w-full"
                
              />
            </div>
            <div className="w-1/3">
              <label htmlFor="city" className="block font-medium">City</label>
              <Select
                id="city"
                value={{ value: formData.city, label: formData.city }}
                onChange={handleCityChange}
                options={[
                  { value: 'la', label: 'Los Angeles' },
                  { value: 'ny', label: 'New York City' },
                  { value: 'sf', label: 'San Francisco' }
                ]}
                placeholder="Select City"
                isSearchable={false}
                styles={customStyles}

                className="mt-1  border rounded-full w-full"
                
              />
            </div>
            <div className="w-1/3">
              <label htmlFor="pincode" className="block font-medium">Pincode</label>
              <input type="text" name="pincode" id="pincode" value={formData.pincode} onChange={handleChange} className="mt-1 p-2 border-gray-300 focus:outline-[#403bbf] border rounded-full w-full"  />
            </div>
          </div>
          <div className="mb-2">
            <label htmlFor="address" className="block font-medium">Address</label>
            <textarea name="address" rows="3" style={{ resize: 'none' }} id="address" value={formData.address} onChange={handleChange} className="mt-1 p-2 border-gray-300 focus:outline-[#403bbf] border rounded-md w-full" ></textarea>
          </div>
          <div className="flex items-center justify-center">
            <button type="submit" className="text-sm font-[650] text-white font-Poppins px-9 pt-2.5 pb-2.5  bg-[#403bbf] rounded-full hover:bg-opacity-75 transition duration-300">Next</button>
          </div>
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
        <form onSubmit={handlemSubmit} className="mt-8 bg-white m-4 p-4">
          <div className="flex space-x-4">
            <div className="mb-4 flex-grow">
              <label htmlFor="primaryCategory" className="block font-medium mb-2">Primary Category</label>
              <Select
                id="primaryCategory"
                value={selectedPrimaryCategories}
                onChange={handlePrimaryCategoryChange}
                options={categories}
                placeholder="Select Category"
                isSearchable={false}
                isMulti
                styles={customStyles}
              />
            </div>
            <div className="mb-4 flex-grow">
              <label htmlFor="secondaryCategory" className="block font-medium mb-2">Secondary Category</label>
              <Select
                id="secondaryCategory"
                value={selectedSecondaryCategories}
                onChange={handleSecondaryCategoryChange}
                options={categories}
                placeholder="Select Category"
                isSearchable={false}
                isMulti
                styles={customStyles}
              />
            </div>
          </div>
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
  <Modal onClose={closeModal} alt="Congratulations">
    <div className="flex items-center justify-center">
      {/* Image */}
      <img src={congrats} className="" />

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

export default MultiStepForm;
