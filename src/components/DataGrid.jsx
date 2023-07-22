import React, { useState, useEffect } from 'react';
import ItemPopup from './ItemPopup';

const DataGrid = ({ data, searchCriteria }) => {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      timeZoneName: 'short',
    };
  
    return date.toLocaleString('en-US', options);
  };
  

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setSelectedItem(null);
  };

  const filteredData = data.filter((item) => {
    const { status, capsule_serial, type } = searchCriteria;
    return (
      (!status || item.status === status) &&
      (!capsule_serial || item.capsule_serial.toLowerCase().includes(capsule_serial.toLowerCase())) &&
      (!type || item.type.toLowerCase().includes(type.toLowerCase()))
    );
  });

  const startIndexFiltered = (currentPage - 1) * itemsPerPage;
  const visibleFiltered = filteredData.slice(
    startIndexFiltered,
    startIndexFiltered + itemsPerPage
  );

  useEffect(() => {
    setLoading(false);
  }, [filteredData]);

  return (
    <div className="data-grid-container mx-auto max-w-3xl p-4">
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <>
          <table className="data-grid-table w-full border-collapse border border-gray-400 rounded-lg">
            <thead>
              <tr className="bg-gray-400">
                <th className="px-4 py-2 text-left">Serial No.</th>
                <th className="px-4 py-2 text-left">Type</th>
                <th className="px-4 py-2 text-left">Status</th>
                <th className="px-4 py-2 text-left">Original Launch</th>
              </tr>
            </thead>
            <tbody>
              {visibleFiltered.map((item) => (
                <tr
                  key={item.capsule_launch}
                  onClick={() => handleItemClick(item)}
                  className="table-row cursor-pointer hover:bg-gray-200"
                >
                  <td className="px-4 py-2">{item.capsule_serial}</td>
                  <td className="px-4 py-2">{item.type}</td>
                  <td className="px-4 py-2">{item.status}</td>
                  <td className="px-4 py-2">{formatDate(item.original_launch)}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="pagination flex justify-center items-center mt-4">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index + 1}
                onClick={() => setCurrentPage(index + 1)}
                className={`px-4 py-2 mx-1 ${
                  currentPage === index + 1
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-300 text-gray-800'
                } rounded`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </>
      )}
      {showPopup && (
        <ItemPopup item={selectedItem} onClose={handleClosePopup} />
      )}
    </div>
  );
};

export default DataGrid;
