// Banner.js
import React from 'react';
import './banner.css'; // Import the CSS file
import { Link } from 'react-router-dom';
const Banner = () => {

  return (
    <section className=" bg-gray-700 text-white py-12 px-4 md:py-16 md:px-8 lg:py-20 lg:px-12 xl:py-30 xl:px-16 banner-main">
      <div className="max-w-5xl mx-auto banner-container">
        <div className="flex flex-col items-center">

          <h1 className="text-4xl font-bold mb-4">Explore SpaceX Rockets and Capsules</h1>
          <p className="text-lg mb-14">Discover the latest information on SpaceX's advanced rockets and spacecraft.</p>
          <a href="https://www.spacex.com/" target="_blank" rel="noopener noreferrer">
            <button class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
              <span >
                SpaceX-Site
              </span>
            </button>
          </a>

          <a href={"/#search-bar"}>

            <button
              className="my-24 bg-transparent font-bold text-gray-300 border border-gray-100 rounded px-4 py-2 hover:bg-gray-800 hover:text-white transition-colors">
              <span>Search-Capsule</span>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};
export default Banner;




