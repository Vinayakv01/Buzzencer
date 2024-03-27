import React, { useState, useEffect } from 'react';
import Active from './campaignpages/active';
import Cancelled from './campaignpages/cancelled';
import Pending from './campaignpages/pending';
import Completed from './campaignpages/completed';
import Inprogress from './campaignpages/inprogress';

const SliderOptions = () => {
  // Retrieve the selected item from localStorage or default to "Active"
  const [selectedItem, setSelectedItem] = useState(
    localStorage.getItem('selectedItem') || 'Active'
  );

  // Function to store the selected item in localStorage
  const saveSelectedItem = (item) => {
    setSelectedItem(item);
    localStorage.setItem('selectedItem', item);
  };

  const renderComponent = () => {
    switch (selectedItem) {
      case "Active":
        return <Active />;
      case "Pending":
        return <Pending />;
      case "In Progress":
        return <Inprogress />;
      case "Completed":
        return <Completed />;
      case "Cancelled":
        return <Cancelled />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-100 p-4">
      <div>
        {/* Tab list */}
        <ul className="flex gap-4">
          {["Active", "Pending", "In Progress", "Completed", "Cancelled"].map((item) => (
            <li
              key={item}
              className={selectedItem === item ? "text-blue-700 cursor-pointer" : "cursor-pointer"}
              onClick={() => saveSelectedItem(item)} // Call saveSelectedItem instead of setSelectedItem
            >
              {item}
            </li>
          ))}
        </ul>
        {/* Render the selected component */}
        {renderComponent()}
      </div>
    </div>
  );
};

export default SliderOptions;
