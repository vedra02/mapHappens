import React, { useState } from 'react';
import { FaCarSide, FaCarAlt, FaBus, FaTrain, FaTaxi } from 'react-icons/fa';

const Feedback = () => {
  const [showModal, setShowModal] = useState(false);
  const [location, setLocation] = useState('');
  const [destination, setDestination] = useState('');
  const [fare, setFare] = useState('');
  const [selectedMode, setSelectedMode] = useState('');
  const [experience, setExperience] = useState('');
  const [sortOption, setSortOption] = useState(''); // Added missing state
  const [showRouteModal, setShowRouteModal] = useState(false);
  const [upvoted, setUpvoted] = useState(false);
  const [downvoted, setDownvoted] = useState(false);
  const [upvoteCount, setUpvoteCount] = useState(0);
  const [downvoteCount, setDownvoteCount] = useState(0);

  const handleSubmit = () => {
    // Handle form submission logic here
    setShowModal(false);
  };
const handleUpvote = () => {
    if (downvoted) {
      // If already downvoted, cancel the downvote
      setDownvoted(false);
      setDownvoteCount(downvoteCount - 1);
    }
    // Toggle upvote state and update count
    setUpvoted(!upvoted);
    setUpvoteCount(upvoted ? upvoteCount - 1 : upvoteCount + 1); // Increment or decrement count
  };

  // Function to handle downvote click
  const handleDownvote = () => {
    if (upvoted) {
      // If already upvoted, cancel the upvote
      setUpvoted(false);
      setUpvoteCount(upvoteCount - 1);
    }
    // Toggle downvote state and update count
    setDownvoted(!downvoted);
    setDownvoteCount(downvoted ? downvoteCount - 1 : downvoteCount + 1); // Increment or decrement count
  };
    const handleCancel = () => {
    setShowRouteModal(false); // Close the modal
    setInputData(''); // Reset any data (if needed)
  };

  return (
    <section>
      <div className="flex flex-col flex-start py-3 bg-gray-50 w-full max-w-xl mx-auto rounded-md">
        <div className="flex items-center justify-between mb-2 bg-gray-50 w-full max-w-xl mx-auto rounded-md">
          <span className="text-gray-600 font-bold">Details</span>
          <button
            className="bg-indigo-500 text-white px-4 py-0.5 rounded hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-400"
            onClick={() => setShowModal(true)}
          >
            Post
          </button>
        </div>

        <span className="mt-2 text-gray-500">Location</span>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="bg-indigo-50 border border-indigo-200 text-gray-700 rounded-lg focus:ring-blue-600 focus:border-blue-500 block w-full p-2"
          placeholder="Novaliches, Bayan Glori"
          required
        />
        <span className="pt-4 text-gray-600">Destination</span>
        <input
          type="text"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="bg-indigo-50 border border-indigo-200 text-gray-700 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
          placeholder="Intramuros, Manila City"
          required
        />
      </div>

      <div className="max-w-xl mx-auto mt-10">
        <span className="text-gray-600 text-m font-bold pt-6">Best Way</span>

        <div className="flex flex-col items-start bg-white rounded-lg shadow-xl mt-4 pr-4">
          <div className="flex justify-between items-center w-full px-4 py-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold text-xs">
                mH
              </div>
              <h2 className="text-xs font-semibold text-gray-700">mapHappens</h2>
            </div>
          </div>

          <div className="pl-14">
            <div className="text-xs text-gray-500 pt-1 pb-1">
              <span className="mb-2 block">Destination: Intramuros, Manila</span>
              <span className="mb-1 block">Tourist Spot Description</span>
              <span>
                Intramuros represents the Philippines' colonial past, where the Spanish influence is deeply woven into
                the country's culture, architecture, and traditions. It is a symbol of both the glory and the struggles
                during the Spanish colonization. Today, it serves as a popular tourist destination that offers a look back in time, showcasing historical landmarks, museums, and the enduring spirit of the Filipino people.
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-2 ml-6 mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
            </svg>

            <div className="flex items-center my-1">
              <span className="text-xs font-semibold text-gray-700 mr-2">Status</span>

              <div className="flex items-center border border-green-400 text-green-600 px-2 py-0.5 rounded-md mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-xs font-semibold">Approved by Admin</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-xl mx-auto mt-10">
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-600 text-m font-bold pt-6">Route Suggestion Post</span>
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="border border-gray-300 rounded-md p-2 bg-white text-gray-700 focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="">Sort By</option>
            <option value="time">Time</option>
            <option value="fare">Fare</option>
            <option value="popularity">Popularity</option>
            <option value="destination">Destination</option>
          </select>
        </div>
    <div 
      className="flex flex-col items-start bg-white rounded-lg shadow-xl mt-4 pr-4 cursor-pointer"
      onClick={() => setShowRouteModal(true)} // When clicked, show route modal
    >
      <div className="flex justify-between items-center w-full px-4 py-2">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold text-xs">
            mH
          </div>
          <h2 className="text-xs font-semibold text-gray-700">mapHappens</h2>
        </div>
      </div>

      <div className="pl-14">
        <div className="text-xs text-gray-500 pt-1 pb-1">
          <span className="mb-2 block">Destination: Intramuros, Manila</span>
          <span className="mb-1 block">Tourist Spot Description</span>
          <span>
            Intramuros represents the Philippines' colonial past, where the Spanish influence is deeply woven into
            the country's culture, architecture, and traditions. It is a symbol of both the glory and the struggles
            during the Spanish colonization.
          </span>
        </div>
      </div>

      {/* Status and Approved by Admin */}
      <div className="flex items-center space-x-2 ml-6 mb-2">
        <div className="flex items-center my-1">
          <span className="text-xs font-semibold text-gray-700 mr-2">Status</span>
          <div className="flex items-center border border-green-400 text-green-600 px-2 py-0.5 rounded-md mt-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-xs font-semibold">Approved by Admin</span>
          </div>
        </div>

        {/* Upvote and Downvote Buttons */}
        <div className="flex items-center space-x-3 ml-4">
          {/* Upvote Button */}
          <button 
            className={`flex items-center text-xs font-semibold ${upvoted ? 'text-green-700' : 'text-green-500'} hover:text-green-700`} 
            onClick={handleUpvote}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 mr-1 ${upvoted ? 'fill-green-700' : 'fill-none'}`} viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
            </svg>
            <span>Upvote</span>
          </button>
          <span className="text-xs text-green-600">{upvoteCount}</span> {/* Display upvote count */}

          {/* Downvote Button */}
          <button 
            className={`flex items-center text-xs font-semibold ${downvoted ? 'text-red-700' : 'text-red-500'} hover:text-red-700`} 
            onClick={handleDownvote}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 mr-1 ${downvoted ? 'fill-red-700' : 'fill-none'}`} viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
            <span>Downvote</span>
          </button>
          <span className="text-xs text-red-600">{downvoteCount}</span> {/* Display downvote count */}
        </div>
      </div>
    </div>
    </div>
      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-3xl w-full">
            {/* Header */}
            <header className="flex items-center mb-6">
              <div className="mr-4">
                <div className="w-12 h-12 bg-indigo-500 text-white rounded-full flex items-center justify-center text-lg font-bold">
                  JM
                </div>
              </div>
              <div>
                <h1 className="text-xl font-medium text-gray-700">Joanah Marie Aldave</h1>
                <p className="text-gray-500">@jmaldave</p>
              </div>
            </header>

            {/* Main Form */}
            <main>
              {/* Location Section */}
              <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div>
                  <label htmlFor="location" className="block text-gray-500 text-sm mb-2">
                    Location
                  </label>
                  <input
                    id="location"
                    type="text"
                    placeholder="E.g. Glori Bayan, Novaliches"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full border border-gray-300 rounded-md p-3 text-gray-700 bg-[#E0E7FF] focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label htmlFor="destination" className="block text-gray-500 text-sm mb-2">
                    Destination
                  </label>
                  <input
                    id="destination"
                    type="text"
                    placeholder="E.g. Intramuros, Manila"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full border border-gray-300 rounded-md p-3 text-gray-700 bg-[#E0E7FF] focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </section>

              {/* Fare Section */}
              <section className="mb-6">
                <label htmlFor="fare" className="block text-gray-500 text-sm mb-2">
                  Fare
                </label>
                <input
                  id="fare"
                  type="text"
                  placeholder="E.g. 150.00"
                  value={fare}
                  onChange={(e) => setFare(e.target.value)}
                  className="w-full border border-gray-300 rounded-md p-3 text-gray-700 bg-[#E0E7FF] focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </section>

              {/* Transportation Modes */}
              <section className="flex items-center justify-between gap-2 mb-6">
                {["Jeep", "E-Jeep", "Bus", "Train", "UV Express"].map((mode) => (
                  <button
                    key={mode}
                    className={`flex flex-col items-center justify-center w-16 h-16 bg-indigo-100 text-indigo-500 rounded-lg text-sm hover:bg-indigo-200 ${selectedMode === mode ? 'bg-indigo-300' : ''}`}
                    onClick={() => setSelectedMode(mode)} // Update selected mode
                  >
                    {/* Icons for different modes */}
                    {mode === "Jeep" && <FaCarSide className="w-8 h-8 mb-2" />}
                    {mode === "E-Jeep" && <FaCarAlt className="w-8 h-8 mb-2" />}
                    {mode === "Bus" && <FaBus className="w-8 h-8 mb-2" />}
                    {mode === "Train" && <FaTrain className="w-8 h-8 mb-2" />}
                    {mode === "UV Express" && <FaTaxi className="w-8 h-8 mb-2" />}
                    <span>{mode}</span>
                  </button>
                ))}
              </section>

              {/* Route Overview */}
              <section className="mb-6">
                <label htmlFor="route" className="block text-gray-500 text-sm mb-2">
                  Route Overview
                </label>
                <div className="flex items-center gap-2">
                  {/* Dropdown */}
                  <select
                    id="route"
                    className="w-40 border border-gray-300 rounded-md p-2 text-gray-700 bg-[#E0E7FF] focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="" disabled selected>
                      Select
                    </option>
                    <option value="Get In">Get on</option>
                    <option value="Get off">Get off</option>
                    <option value="walk">Walk</option>
                    <option value="additionalx">Additional Information</option>
                  </select>

                  {/* Destination Type Input */}
                  <input
                    type="text"
                    placeholder="Enter description type"
                    className="w-full border border-gray-300 rounded-md p-2 text-gray-700 bg-[#E0E7FF] focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </section>

              {/* Experiences */}
              <section className="mb-6">
                <label htmlFor="experience" className="block text-gray-500 text-sm mb-2">
                  Your Experiences
                </label>
                <textarea
                  id="experience"
                  placeholder="E.g. We started our journey at the Intramuros gates, aiming to explore the historical landmarks..."
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  className="w-full border border-gray-300 rounded-md p-3 text-gray-700 bg-[#E0E7FF] focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </section>
            </main>

              {/* Buttons for submit and cancel */}
            <div className="flex justify-end space-x-4">
              {/* Cancel Button */}
              <button 
                className="px-4 py-2 rounded-md bg-gray-500 text-white hover:bg-gray-600"
                onClick={handleCancel} // Close modal without saving
              >
                Cancel
              </button>
              
              {/* Submit Button */}
              <button 
                className="px-4 py-2 rounded-md bg-indigo-500 text-white hover:bg-indigo-600"
                onClick={handleSubmit} // Handle submission
              >
                Submit
              </button>
            </div>
          </div>
        </div>
        // <>Route Modal</>
      )}
      {showRouteModal && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-xl p-6 max-w-4xl w-full">
            <header className="mb-4 flex justify-between items-center">
              <h2 className="text-lg font-bold text-gray-800">Intramuros Route Information</h2>
              <button
                onClick={() => setShowRouteModal(false)}
                className="text-gray-500 hover:text-gray-800"
              >
                ✕
              </button>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-bold text-indigo-600 mb-2">Details</h3>
                <p className="text-gray-600">Location: Novaliches, Bayan Glori</p>
                <p className="text-gray-600">Destination: Intramuros, Manila</p>
                <p className="text-gray-600">Fare: ₱200.00</p>
                <h3 className="font-bold text-indigo-600 mt-4">Trivia & Facts</h3>
                <p className="text-gray-600">
                  Intramuros represents the Philippines' colonial past, a historic site that encapsulates the history of Spanish colonization.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-indigo-600 mb-2">Route Overview</h3>
                <ul className="text-gray-600">
                  <li>Route 1: Novaliches to Intramuros</li>
                  <li>Route 2: By train to the nearest station</li>
                  <li>Walk to final destination</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Feedback;
