import React, { useState } from 'react';
import { X } from 'lucide-react'; // Import X icon

const Wishlist = () => {
  // Sample data for brands
  const [brands, setBrands] = useState([
    { id: 1, category: 'Electronic', name: 'Samsung' },
    { id: 2, category: 'Electronic', name: 'Apple' },
    { id: 3, category: 'Food', name: 'McDonalds' },
    { id: 4, category: 'Food', name: 'Starbucks' },
    { id: 5, category: 'Cloth', name: 'Nike' },
    { id: 6, category: 'Cloth', name: 'Adidas' },
  ]);

  // State to control modal visibility
  const [showModal, setShowModal] = useState(false);

  // State for new brand input
  const [newBrand, setNewBrand] = useState('');

  // State to store selected brands
  const [selectedBrands, setSelectedBrands] = useState([]);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add new brand to the list
    const updatedBrands = [...brands, { id: brands.length + 1, category: '', name: newBrand }];
    setBrands(updatedBrands);
    // Close the modal after submission
    setShowModal(false);
    // Reset the new brand input
    setNewBrand('');
  };

  // Function to handle brand selection
  const handleBrandSelection = (id) => {
    const selectedBrandIndex = selectedBrands.indexOf(id);
    if (selectedBrandIndex === -1) {
      setSelectedBrands([...selectedBrands, id]);
    } else {
      setSelectedBrands(selectedBrands.filter(brandId => brandId !== id));
    }
  };

  // Function to handle clearing selected brands
  // Function to handle clearing selected brands
const handleClearSelection = () => {
  const updatedBrands = brands.filter(brand => !selectedBrands.includes(brand.id));
  setBrands(updatedBrands);
  setSelectedBrands([]);
};


  return (
    <div className="p-4 bg-white m-4">
      {/* Search bar */}
      <input
        type="text"
        placeholder="Search..."
        className="px-4 py-2 border rounded-md mr-4"
      />

      {/* Add New button */}
      <button className="px-4 py-2 bg-blue-500 text-white rounded-md" onClick={() => setShowModal(true)}>Add New</button>

      {/* Brands grid */}
      <div className="grid grid-cols-5 gap-4 mt-4">
        {brands.map((brand) => (
          <div
            key={brand.id}
            className={`border p-2 rounded-md flex justify-between items-center cursor-pointer ${selectedBrands.includes(brand.id) ? 'bg-gray-200' : ''}`}
            onClick={() => handleBrandSelection(brand.id)}
          >
            <h3 className="text-lg font-semibold">{brand.name}</h3>
            <input
              type="checkbox"
              checked={selectedBrands.includes(brand.id)}
              onChange={() => {}}
              className="mt-2"
            />
          </div>
        ))}
      </div>

      {/* Clear and Submit buttons */}
      <div className="flex justify-end mt-4">
        <button
          onClick={handleClearSelection}
          className="px-4 py-2 mr-4 bg-red-500 text-white rounded-md"
        >
          Clear
        </button>
        <button
          onClick={handleSubmit}
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Submit
        </button>
      </div>

      {/* Modal for adding new brand */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg relative"> {/* Add relative positioning */}
            <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" onClick={() => setShowModal(false)}> {/* Absolute positioning */}
              <X size={24} /> {/* Use X icon */}
            </button>
            <h2 className="text-lg font-semibold mb-4">Add New Brand</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={newBrand}
                onChange={(e) => setNewBrand(e.target.value)}
                className="block w-full px-4 py-2 border rounded-md mb-4"
                placeholder="Enter brand name"
              />
              <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Wishlist;
