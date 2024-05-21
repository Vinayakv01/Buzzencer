import React, { useState, useEffect, useRef } from 'react';
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

  // Reference to the underline element
  const underlineRef = useRef(null);
  const [underlineStyle, setUnderlineStyle] = useState({ width: 0, left: 0 });

  // Update underline position when selectedItem changes
  useEffect(() => {
    const activeListItem = document.querySelector(`#tab-${selectedItem}`);
    if (activeListItem) {
      const left = activeListItem.offsetLeft;
      const width = activeListItem.offsetWidth;
      setUnderlineStyle({ left, width });
    }
  }, [selectedItem]);

  // Render the selected component
  const renderComponent = () => {
    switch (selectedItem) {
      case "Active":
        return <Active />;
      case "Pending":
        return <Pending />;
      case "In-Progress": // Change "In Progress" to "Inprogress"
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
        <ul className="flex gap-4 relative">
          {["Active", "Pending", "In-Progress", "Completed", "Cancelled"].map((item) => (
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

export default SliderOptions;




// import React, { useState, useEffect, useRef } from 'react';
// import Active from './campaignpages/active';
// import Cancelled from './campaignpages/cancelled';
// import Pending from './campaignpages/pending';
// import Completed from './campaignpages/completed';
// import Inprogress from './campaignpages/inprogress';

// const SliderOptions = () => {
//   // Retrieve the selected item from localStorage or default to "Active"
//   const [selectedItem, setSelectedItem] = useState(
//     localStorage.getItem('selectedItem') || 'Active'
//   );

//   // Function to store the selected item in localStorage
//   const saveSelectedItem = (item) => {
//     setSelectedItem(item);
//     localStorage.setItem('selectedItem', item);
//   };

//   const [underlineStyle, setUnderlineStyle] = useState({ width: 0, left: 0 });
//   const underlineRef = useRef(null);

//   useEffect(() => {
//     const activeListItem = document.querySelector(`#tab-${selectedItem}`);
//     if (activeListItem) {
//       const left = activeListItem.offsetLeft;
//       const width = activeListItem.offsetWidth;
//       setUnderlineStyle({ left, width });
//     }
//   }, [selectedItem]);

//   const renderComponent = () => {
//     switch (selectedItem) {
//       case "Active":
//         return <Active />;
//       case "Pending":
//         return <Pending />;
//       case "In-Progress": // Change "In Progress" to "Inprogress"
//         return <Inprogress />;
//       case "Completed":
//         return <Completed />;
//       case "Cancelled":
//         return <Cancelled />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="bg-gray-100 p-4">
//       <div>
//         {/* Tab list */}
//         <ul className="flex gap-4 relative">
//           {["Active", "Pending", "In-Progress", "Completed", "Cancelled"].map((item) => (
//             <li
//               key={item}
//               id={`tab-${item}`}
//               className={selectedItem === item ? "text-blue-700 cursor-pointer" : "cursor-pointer"}
//               onClick={() => saveSelectedItem(item)}
//             >
//               {item}
//             </li>
//           ))}
//           {/* Underline element */}
//           <div
//             ref={underlineRef}
//             className="absolute bg-blue-700 transition-all duration-300"
//             style={{
//               height: '2px',
//               bottom: '0',
//               left: `${underlineStyle.left}px`,
//               width: `${underlineStyle.width}px`
//             }}
//           ></div>
//         </ul>
//         {/* Render the selected component */}
//         {renderComponent()}
//       </div>
//     </div>
//   );
// };

// export default SliderOptions;
