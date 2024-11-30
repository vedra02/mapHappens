import React from 'react';
import images from '../assets/images'; // Single import for all images

const Routes = () => {
  return (
    <section className="p-6 bg-gray-100 rounded-lg shadow-md max-w-lg">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-6">
        {/* Title */}
        <h6 className="text-xl font-semibold">Details</h6>
        
        {/* Post Button */}
        <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Post
        </button>
      </div>

      {/* Details Section */}
      <div className="text-left">
        {/* Location Input */}
        <div className="mb-4">
          <label htmlFor="location" className="block text-sm text-gray-600 mb-1">
            Location
          </label>
          <input
            type="text"
            id="location"
            placeholder="Where’s your current location?"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Destination Input */}
        <div className="mb-4">
          <label htmlFor="destination" className="block text-sm text-gray-600 mb-1">
            Destination
          </label>
          <input
            type="text"
            id="destination"
            placeholder="Enter your destination"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      <div className="mt-0">
          <img
            src={images.logoroute} // Access the logo image
            alt="TourEase Logo"
            className="w-full h-auto max-w-sm mx-auto"
          />
        </div>
    </section>
  );
};

export default Routes;
