import React from 'react';
import { FaUsers, FaComments, FaSearch } from 'react-icons/fa'; // Icons for Users, Feedback, and Search

const Dashboard = () => {
  return (
    <div className="flex flex-col px-6 py-8 bg-[#F9FAFB] min-h-screen">
      {/* Header Section */}
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
          Welcome, Admin! amutoooo
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Here's an overview of TourEase Dashboard: Monitor user activity and feedbacks
        </p>
      </div>

      {/* Dashboard Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {/* Card for Users */}
        <div className="bg-white p-6 rounded-xl shadow-md flex items-center justify-between">
          <div>
            <h3 className="text-[#6366F1] text-lg font-medium">Users</h3>
            <p className="text-4xl font-bold text-gray-800 mt-2">4,300</p>
          </div>
          <FaUsers className="text-[#6366F1] text-4xl" />
        </div>

        {/* Card for Feedbacks */}
        <div className="bg-white p-6 rounded-xl shadow-md flex items-center justify-between">
          <div>
            <h3 className="text-[#6366F1] text-lg font-medium">Feedbacks</h3>
            <p className="text-4xl font-bold text-gray-800 mt-2">4,300</p>
          </div>
          <FaComments className="text-[#6366F1] text-4xl" />
        </div>
      </div>

      {/* Registered Accounts Section */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Registered Accounts</h3>
        
        {/* Search Bar */}
        <div className="flex justify-end items-center space-x-3 mb-4">
          <div className="flex items-center space-x-3">
            <FaSearch className="text-gray-400" />
            <input
              type="text"
              placeholder="Search for registered account"
              className="p-2 border border-gray-300 rounded-lg w-72"
            />
          </div>
        </div>
        
        <div className="bg-gray-200 p-4 rounded-lg">
          {/* Display registered accounts */}
          <p className="text-gray-500">No accounts to display here yet.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
