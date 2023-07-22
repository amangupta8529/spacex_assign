import React, { useState } from 'react';
import './SearchForm.css'; // Import the CSS file for styling

const SearchForm = ({onSubmit}) => {
  const [searchCriteria, setSearchCriteria] = useState({
    status: '',
    originalLaunch: '',
    type: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchCriteria((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleClearForm = () => {
    setSearchCriteria({
      status: '',
      capsule_serial: '',
      type: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement logic to handle form submission and filtering data with the searchCriteria object
    // ...
    onSubmit(searchCriteria);
  };

  return (
    <section id="search-bar" className="py-8 px-4">
      <div className="max-w-5xl mx-auto colorful-box"> {/* Add the colorful-box class */}
        <form className="grid grid-cols-3 gap-4" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label className="text-sm font-semibold">Status</label>
            <select
              name="status"
              value={searchCriteria.status}
              onChange={handleInputChange}
              className="border border-gray-300 rounded px-4 py-2"
            >
              <option value="">All</option>
              <option value="active">Active</option>
              <option value="unknown">Unknown</option>
              <option value="destroyed">Destroyed</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-semibold">Serial No.</label>
            <input
              type="text"
              name="capsule_serial"
              placeholder="S.No.(Ex-C101).."
              value={searchCriteria.capsule_serial}
              onChange={handleInputChange}
              className="border border-gray-300 rounded px-4 py-2"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-semibold">Type</label>
            <input
              type="text"
              name="type"
              placeholder="Enter Type..."
              value={searchCriteria.type}
              onChange={handleInputChange}
              className="border border-gray-300 rounded px-4 py-2"
            />
          </div>
          {/* Add more search filters here */}
          <div className="col-span-3 flex justify-center space-x-4">
            <button
              type="submit"
              className="bg-blue-600 text-white rounded px-7 py-3 text-lg font-semibold shadow hover:bg-blue-700"
            >
              Search
            </button>
            <button
              type="button"
              onClick={handleClearForm}
              className="bg-gray-300 text-gray-700 rounded px-7 py-3 text-lg font-semibold shadow hover:bg-gray-400"
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SearchForm;
