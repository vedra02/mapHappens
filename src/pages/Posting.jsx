import React, { useState } from "react";
import { FaBus, FaCarSide, FaCarAlt, FaTrain, FaTaxi } from "react-icons/fa"; // Import the necessary icons
import { useNavigate } from "react-router-dom"; // For navigation

const TravelInfoPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [location, setLocation] = useState("");
  const [destination, setDestination] = useState("");
  const [fare, setFare] = useState("");
  const [experience, setExperience] = useState("");
  const [selectedMode, setSelectedMode] = useState(""); // Track the selected transportation mode

  const handleSubmit = () => {
    const routeDetails = {
      location,
      destination,
      fare,
      experience,
      mode: selectedMode,
    };

    // Log or submit form data
    console.log("Form submitted:", routeDetails);

    // Navigate to RouteSuggestion with state
    navigate("/route-suggestion", { state: { routeDetails } });
  };

  return (
    <div className="bg-gray-100 font-sans p-6 min-h-screen flex items-center justify-center">
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
              placeholder="E.g. We started our journey at the Intramuros gates, aiming to explore the historic walled city..."
              rows="4"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-3 text-gray-700 bg-[#E0E7FF] focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </section>
        </main>

        {/* Footer */}
        <footer className="flex justify-end gap-4">
          {/* Cancel Button */}
          <button
            className="bg-gray-200 text-gray-600 px-6 py-3 rounded-md hover:bg-gray-300"
            onClick={() => navigate("/RouteSuggestion")} // Go back to RouteSuggestion page
          >
            Cancel
          </button>
          {/* Submit Button */}
          <button
            className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600"
            onClick={handleSubmit} // Submit form data
          >
            Submit
          </button>
        </footer>
      </div>
    </div>
  );
};

export default TravelInfoPage;
