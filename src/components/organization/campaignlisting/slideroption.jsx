import React, { useState, useEffect, useRef } from 'react';
import Active from './active';
import Completed from './completed';

const SliderOptions = () => {
  const localStorageKey = 'sliderOptionsSelectedItem'; // Unique localStorage key
  // Initialize selectedItem from localStorage or default to 'Active'
  const [selectedItem, setSelectedItem] = useState(
    localStorage.getItem(localStorageKey) || 'Active'
  );

  // Function to update the selected item both in state and localStorage
  const saveSelectedItem = (item) => {
    setSelectedItem(item);
    localStorage.setItem(localStorageKey, item); // Use the unique key here
  };

  // State for managing the style of the underline for the active tab
  const [underlineStyle, setUnderlineStyle] = useState({ width: 0, left: 0 });
  const underlineRef = useRef(null);

  useEffect(() => {
    // Update underline position and width based on the current active tab
    const activeListItem = document.querySelector(`#tab-${selectedItem}`);
    if (activeListItem) {
      const left = activeListItem.offsetLeft;
      const width = activeListItem.offsetWidth;
      setUnderlineStyle({ left, width });
    }
  }, [selectedItem]);

  // Determine which component to render based on the selected item
  const renderComponent = () => {
    switch (selectedItem) {
      case "Active":
        return <Active />;
      case "Completed":
        return <Completed />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-100 p-4">
      <ul className="flex gap-4 relative">
        {["Active", "Completed"].map((item) => (
          <li
            key={item}
            id={`tab-${item}`}
            className={selectedItem === item ? "text-blue-700 cursor-pointer" : "cursor-pointer"}
            onClick={() => saveSelectedItem(item)}
          >
            {item}
          </li>
        ))}
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
      {renderComponent()}
    </div>
  );
};

export default SliderOptions;
