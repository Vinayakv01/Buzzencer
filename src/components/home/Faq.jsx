import React, {useState} from 'react';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import faqsData from './faqsData';
import faqimage from '../../assets/faqimg.png';

const Faq = () => {
    const [openState, setOpenState] = useState(null);

    const handleDropDown = (index) => {
        setOpenState(openState === index ? null : index);
    }

  return (
    <div className="h-auto bg-white py-20">
      <div className="flex justify-center items-center">
        <h2 className="font-bold font-Yeseva text-3xl">Frequently Asked Questions.</h2>
      </div>
      <div className="flex">
        {/* left content */}
        <div className="w-1/2 px-20 py-10">
        {faqsData.map((faq, index) => (
            <div key={faq.id} className="border border-black rounded-md mb-4">
                <div className="p-4 flex justify-between items-center cursor-pointer">
                    <p className="text-gray-900 font-semibold text-lg" onClick={() => handleDropDown(index)}>{faq.question}</p>
                    {openState === index ? (
                        <IoIosArrowUp onClick={() => handleDropDown(index)} className="text-gray-900" size={28} />
                    ) : (
                        <IoIosArrowDown onClick={() => handleDropDown(index)} className="text-gray-900" size={28} />
                    )}
                </div>
                {openState === index && (
                    <div>
                        <p className="text-gray-900 px-4 mb-2 text-lg">{faq.answer}</p>
                    </div>
                )}
            </div>
        ))}
        </div>
        {/* Right content */}
        <div className="w-1/2 flex justify-center items-center">
        <img src={faqimage} alt="faqimage" className="h-[500px]" />
        </div>
      </div>
    </div>
  );
};

export default Faq;
