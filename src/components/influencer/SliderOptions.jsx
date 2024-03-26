import React, { useState, useEffect } from 'react';

const SliderOptions = () => {
  const [selectedItem, setSelectedItem] = useState("Active");
  const [underlineStyle, setUnderlineStyle] = useState({ width: 0, left: 0 });

  useEffect(() => {
    const activeListItem = document.getElementById("listItem-0"); 
    if (activeListItem) {
      const left = activeListItem.offsetLeft;
      const width = activeListItem.offsetWidth;
      setUnderlineStyle({ left, width });
    }
  }, []); 

  const handleItemClick = (item, index) => {
    setSelectedItem(item);
    const listItem = document.getElementById(`listItem-${index}`);
    const left = listItem.offsetLeft;
    const width = listItem.offsetWidth;
    setUnderlineStyle({ left, width });
  };

  return (
    <div className="bg-gray-100 p-4">
      <div>
        <ul className="flex gap-4 relative">
          {["Active", "Pending", "In Progress", "Completed", "Cancelled"].map((item, index) => (
            <li
              key={item}
              id={`listItem-${index}`}
              className={selectedItem === item ? "text-blue-700 cursor-pointer" : "cursor-pointer"}
              onClick={() => handleItemClick(item, index)}
            >
              {item}
            </li>
          ))}
          <div
            className="absolute bg-blue-700 transition-all duration-300"
            style={{
              height: '2px',
              bottom: '0',
              left: `${underlineStyle.left}px`,
              width: `${underlineStyle.width}px`
            }}
          ></div>
        </ul>
      </div>
    </div>
  );
};

export default SliderOptions;
