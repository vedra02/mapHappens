import React, { useState } from "react";
import { FaBus, FaCar, FaTrain, FaTaxi, FaShuttleVan } from "react-icons/fa";

const Routes = () => {
  const [selectedVehicles, setSelectedVehicles] = useState([]);
  const [routeStepsData, setRouteStepsData] = useState([
    { step: "", description: "" },
  ]);
  const [uploadedImage, setUploadedImage] = useState(null);

  const vehicleTypes = [
    { name: "Jeep", icon: <FaCar className="text-indigo-500" /> },
    { name: "E-Jeep", icon: <FaTaxi className="text-indigo-500" /> },
    { name: "Bus", icon: <FaBus className="text-indigo-500" /> },
    { name: "Train", icon: <FaTrain className="text-indigo-500" /> },
    { name: "UV Express", icon: <FaShuttleVan className="text-indigo-500" /> },
  ];

  const routeSteps = ["Get On", "Get Off", "Walk", "Additional Information"];

  const toggleVehicleSelection = (vehicle) => {
    setSelectedVehicles((prevSelected) =>
      prevSelected.includes(vehicle)
        ? prevSelected.filter((item) => item !== vehicle)
        : [...prevSelected, vehicle]
    );
  };

  const addRouteStep = () => {
    setRouteStepsData((prevData) => [
      ...prevData,
      { step: "", description: "" },
    ]);
  };

  const handleStepChange = (index, e) => {
    const updatedSteps = [...routeStepsData];
    updatedSteps[index].step = e.target.value;
    setRouteStepsData(updatedSteps);
  };

  const handleCustomDescriptionChange = (index, e) => {
    const updatedSteps = [...routeStepsData];
    updatedSteps[index].description = e.target.value;
    setRouteStepsData(updatedSteps);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setUploadedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="max-w-6xl px-4 py-6">
      <h1 className="text-2xl font-bold mb-6">New Routes</h1>
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
        {/* Left Section */}
        <div className="lg:col-span-3 space-y-4">
          <div>
            <label className="block text-xs font-medium mb-2">
              Type of Vehicles
            </label>
            <div className="flex flex-wrap gap-4">
              {vehicleTypes.map(({ name, icon }) => (
                <label
                  key={name}
                  className={`flex items-center gap-2 text-xs cursor-pointer 
                              border-2 border-gray-300 rounded-md px-4 py-2 hover:bg-gray-100
                              ${
                                selectedVehicles.includes(name)
                                  ? "bg-blue-500 text-white"
                                  : "bg-white"
                              }`}
                >
                  <input
                    type="checkbox"
                    checked={selectedVehicles.includes(name)}
                    onChange={() => toggleVehicleSelection(name)}
                    className="hidden"
                  />
                  {icon} {name}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium mb-2">Fare</label>
            <input
              type="text"
              placeholder="e.g., Novaliches, Bayan Glori"
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md bg-[#eef2ff] focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-xs font-medium mb-2">
              Estimated Time
            </label>
            <input
              type="text"
              placeholder="e.g., 45 minutes - 1.5 hours"
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md bg-[#eef2ff] focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-xs font-medium mb-2">
              Route Overview
            </label>
            <div>
              {routeStepsData.map((stepData, index) => (
                <div key={index} className="mb-4">
                  <div className="flex items-center gap-2">
                    <select
                      value={stepData.step}
                      onChange={(e) => handleStepChange(index, e)}
                      className="w-full md:w-1/4 px-2 py-1 text-sm border border-gray-300 rounded-md bg-[#eef2ff] focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select</option>
                      {routeSteps.map((step, idx) => (
                        <option key={idx} value={step}>
                          {step}
                        </option>
                      ))}
                    </select>
                    {/* Plus button moved more to the right */}
                    {index === routeStepsData.length - 1 && (
                      <div className="ml-auto">
                        <button
                          onClick={addRouteStep}
                          className="px-2 py-1 text-xs border border-blue-500 text-blue-500 rounded-md hover:bg-blue-100"
                        >
                          +
                        </button>
                      </div>
                    )}
                  </div>
                  <textarea
                    value={stepData.description}
                    onChange={(e) => handleCustomDescriptionChange(index, e)}
                    placeholder="Add your custom description here..."
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md bg-[#eef2ff] focus:ring-2 focus:ring-blue-500 mt-2"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex gap-4">
            <button className="px-4 py-2 text-xs border border-red-500 text-red-500 rounded-md hover:bg-red-100">
              Cancel
            </button>
            <button className="px-4 py-2 text-xs bg-green-500 text-white rounded-md hover:bg-green-600">
              Add
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:col-span-3">
          <div className="border border-gray-300 p-4 rounded-md shadow-sm bg-white">
            <div className="mb-4">
              <label className="block text-xs font-medium mb-2">
                Upload Image
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-16 bg-[#eef2ff] flex items-center justify-center relative">
                <input
                  type="file"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  accept="image/*"
                  onChange={handleImageUpload}
                />
                {uploadedImage ? (
                  <img
                    src={uploadedImage}
                    alt="Uploaded preview"
                    className="max-h-40 object-cover"
                  />
                ) : (
                  <span className="text-gray-500 text-center">
                    Click to upload an image
                  </span>
                )}
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-xs font-medium mb-2">
                Description
              </label>
              <textarea
                placeholder="Location description here..."
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md bg-[#eef2ff] focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-xs font-medium mb-2">
                Trivia & Facts
              </label>
              <textarea
                placeholder="Interesting trivia and facts..."
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md bg-[#eef2ff] focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Routes;
