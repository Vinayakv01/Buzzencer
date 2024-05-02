import React, { useState, useEffect, useRef } from 'react';
import Allapp from "./allapps";
import Wait from './wait';
import Reviewed from './reviewed';
import Requested from './requested';
import Rejected from './rejected';
import Interested from './interested';
import Selected from './selected';

const Sliderapp = () => {
  // Retrieve the selected item from localStorage or default to "Active"
  const [selectedItem, setSelectedItem] = useState(
    localStorage.getItem('selectedItem') || 'Active'
  );

  // Function to store the selected item in localStorage
  const saveSelectedItem = (item) => {
    setSelectedItem(item);
    localStorage.setItem('selectedItem', item);
  };

  const [underlineStyle, setUnderlineStyle] = useState({ width: 0, left: 0 });
  const underlineRef = useRef(null);

  useEffect(() => {
    const activeListItem = document.querySelector(`#tab-${selectedItem}`);
    if (activeListItem) {
      const left = activeListItem.offsetLeft;
      const width = activeListItem.offsetWidth;
      setUnderlineStyle({ left, width });
    }
  }, [selectedItem, underlineRef.current]);

  const renderComponent = () => {
    switch (selectedItem) {
      case "All Applications":
        return <Allapp />;
      case "Waiting For Review":
        return <Wait />;
      case "Reviewed":
        return <Reviewed />; 
      case "Rejected":
        return <Rejected />;
      case "Interested":
        return <Interested />;
      case "Selected":
        return <Selected />;
      case "Requested":
        return <Requested />; 

      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-100 p-4">
      <div>
        {/* Tab list */}
        <ul className="flex gap-4 relative">
          {["All Applications", "Waiting For Review", "Reviewed","Rejected", "Interested", "Selected", "Requested"].map((item) => (
            <li
              key={item}
              id={`tab-${item}`}
              className={selectedItem === item ? "text-blue-700 cursor-pointer" : "cursor-pointer"}
              onClick={() => saveSelectedItem(item)}
            >
              {item}
            </li>
          ))}
          {/* Underline element */}
          <div
            ref={underlineRef}
            className="absolute bg-blue-700 transition-all duration-300"
            style={{
              height: '2px',
              bottom: '0',
              left: `${underlineStyle.left}px`,
              width: `${underlineStyle.width}px`
            }}
          ></div>
        </ul>
        {/* Render the selected component */}
        {renderComponent()}
      </div>
    </div>
  );
};

export default Sliderapp;
