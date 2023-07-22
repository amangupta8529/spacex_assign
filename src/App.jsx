import React, { useState, useEffect } from 'react';
import Banner from './components/Banner';
import SearchForm from './components/SearchForm';
import DataGrid from './components/DataGrid';

const App = () => {
  const [data, setData] = useState([]);
  const [searchCriteria, setSearchCriteria] = useState({
    status: '',
    originalLaunch: '',
    type: '',
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.spacexdata.com/v3/capsules');
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSearchSubmit = (criteria) => {
    setSearchCriteria(criteria);
  };

  return (
    <div>
      <div>
        <Banner />
      </div>

      <div className="min-h-screen bg-gray-200">
        <div className="container mx-auto p-4">
          <SearchForm onSubmit={handleSearchSubmit} />
          <DataGrid data={data} searchCriteria={searchCriteria} />
        </div>
      </div>
    </div>
  );
};

export default App;


