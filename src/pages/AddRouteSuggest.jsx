import React from "react";
import { FaBus, FaCarSide, FaCarAlt } from "react-icons/fa"; // Import the necessary icons

const AddRoutePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-md max-w-7xl w-full">
        {/* Title */}
        <h2 className="text-3xl font-semibold text-gray-700 text-center mb-8">
          Route Posts Suggestions
        </h2>

        {/* Suggestions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[...Array(4)].map((_, idx) => (
            <div
              key={idx}
              className="bg-indigo-50 border border-gray-200 rounded-lg p-6 shadow-sm"
            >
              <header className="flex items-center mb-4">
                <div className="w-12 h-12 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  JM
                </div>
                <div className="ml-3">
                  <h3 className="text-gray-700 font-medium text-lg">
                    Joanah Marie Aldave
                  </h3>
                  <p className="text-sm text-gray-500">@jmaldave</p>
                  <p className="text-xs text-gray-400">12 hours ago</p>
                </div>
              </header>

              {/* Route Details */}
              <div className="mb-4">
                <p className="text-sm text-gray-500 mb-1">Location:</p>
                <p className="text-gray-700 font-medium">
                  Novaliches, Bayan Glori
                </p>
              </div>
              <div className="mb-4">
                <p className="text-sm text-gray-500 mb-1">Destination:</p>
                <p className="text-gray-700 font-medium">Intramuros, Manila</p>
              </div>
              <div className="mb-4">
                <p className="text-sm text-gray-500 mb-1">Types of Vehicles:</p>
                <div className="flex items-center space-x-4">
                  {/* Vehicle Type Icons */}
                  <div className="flex items-center space-x-2">
                    <FaCarAlt className="text-indigo-500" />
                    <span className="text-gray-700 font-medium">Jeep</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaCarSide className="text-indigo-500" />
                    <span className="text-gray-700 font-medium">Modern E-Jeep</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaBus className="text-indigo-500" />
                    <span className="text-gray-700 font-medium">Bus</span>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <p className="text-sm text-gray-500 mb-1">Fare:</p>
                <p className="text-gray-700 font-medium">PHP 150.00</p>
              </div>

              {/* Route Overview */}
              <div className="mb-6">
                <p className="text-sm text-gray-500 mb-1">Route Overview:</p>
                <p className="text-gray-700 text-sm">
                  Estimated time: 45 minutes to 1 hour depending on traffic.
                  <br />
                  Directions:
                  <br />
                  1. Take a Jeep from Bayan Glori to Edsa Monumento.
                  <br />
                  2. Transfer to a Bus heading to Quiapo.
                  <br />
                  3. Drop off at Manila City Hall and walk to Intramuros.
                </p>
              </div>

              {/* Experience */}
              <div className="mb-6">
                <p className="text-sm text-gray-500 mb-1">Your Experiences:</p>
                <p className="text-gray-700 text-sm">
                  We started our journey at the Intramuros gates, aiming to
                  explore the historic walled city. We initially struggled with
                  parking, but a guard directed us to a nearby lot...
                </p>
              </div>

              {/* Buttons */}
              <footer className="flex items-center justify-between">
                <button className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 text-sm">
                  Decline
                </button>
                <button className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 text-sm">
                  Approve
                </button>
              </footer>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddRoutePage;
