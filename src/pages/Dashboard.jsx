import React from 'react';

const Dashboard = () => {
  return (
<div>
  <h1 className="text-3xl font-bold">Welcome Admin! amuutooo</h1>
  <p>Here's an overview of TourEase Dashboard: Monitor user activity and feedbacks</p>
  <div className="grid grid-cols-o sm:grid-cols-2 gap-3 mt-3">
    <div className="bg-white text-white p-4 rounded-lg shadow-md">
      <h3 className="text-[#6366F1]">Users</h3>
      <p className="text-4xl font-bold text-black-500">4,300</p>
    </div>
    <div className="bg-white text-white p-4 rounded-lg shadow-md">
      <h3 className="text-[#6366F1]">Feedbacks</h3>
      <p className="text-4xl font-bold text-black-500">4,300</p>
        <userStyle>Normal</userStyle>
    </div>
  </div>
</div>

  );
};

export default Dashboard;