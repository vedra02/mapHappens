import React from 'react';
import { FaTaxi, FaCar, FaBus } from 'react-icons/fa';

const RouteSuggestion = () => {
  return (
    <section className="px-4 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="bg-white rounded-lg shadow-xl p-4 sm:p-6">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold text-xs">
                  JM
                </div>
                <div className="flex flex-col">
                  <h2 className="text-xs sm:text-sm font-semibold text-gray-700">Joanah Marie Aldave</h2>
                  <span className="text-xs sm:text-sm text-gray-500">@jmaldave</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 mb-6">
              <div className="flex flex-col w-full sm:w-[350px]">
                <span className="text-xs sm:text-sm text-gray-600 font-semibold pb-1">Location</span>
                <input
                  type="text"
                  id="Location"
                  className="text-xs sm:text-sm bg-indigo-50 border border-indigo-200 text-gray-700 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5"
                  placeholder="Novaliches, Bayan Glori"
                  required
                />
                <span className="text-xs sm:text-sm pt-4 text-gray-600 font-semibold pb-1">Destination</span>
                <input
                  type="text"
                  id="Destination"
                  className="text-xs sm:text-sm bg-indigo-50 border border-indigo-200 text-gray-700 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5"
                  placeholder="Intramuros, Manila City"
                  required
                />

                <div className="flex flex-col border border-indigo-700 mt-7 rounded-lg p-4">
                  <div className="flex justify-between items-center px-2 py-2">
                    <span className="text-xs sm:text-sm text-gray-700">Types of Vehicles</span>
                    <span className="text-xs sm:text-sm text-gray-700">Fare: ₱200.00</span>
                  </div>
                  <div className="flex flex-row justify-between m-1 rounded-lg bg-indigo-50 py-3 px-8">
                    <div className="flex flex-col items-center">
                      <FaTaxi size={32} color="#6366F1" />
                      <span className="text-xs sm:text-sm text-gray-500">Jeep</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <FaCar size={32} color="#6366F1" />
                      <span className="text-xs sm:text-sm text-gray-500">Modern Jeep</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <FaBus size={32} color="#6366F1" />
                      <span className="text-xs sm:text-sm text-gray-500">Bus</span>
                    </div>
                  </div>
                  <span className="flex justify-center items-center text-xs sm:text-sm text-gray-500">
                    Estimated Time: 45 minutes to 1.5 hours depending on traffic.
                  </span>
                  <span className="text-xs sm:text-sm text-gray-700 px-2 pt-6">Route Overview</span>

                  {/* Route Details */}
                  <div className="-my-5">
                    <div className="relative pl-1 sm:pl-24 pt-6 group">
                      <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-green-600 sm:before:ml-[5rem] before:self-start before:-translate-x-1/2 before:translate-y-1">
                        <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs sm:text-sm w-20 h-6 mb-3 sm:mb-0 text-emerald-600 rounded-full">Get On</time>
                      </div>
                      <div className="text-xs sm:text-sm mt-2 text-gray-600">
                        Ride a jeepney from Glori Bayan, Novaliches, going towards Monumento or EDSA.
                      </div>
                      <div className="text-xs sm:text-sm my-2 text-gray-600">Get down at North Avenue along EDSA.</div>
                      <div className="text-xs sm:text-sm my-2 text-gray-600">Take a jeep or bus heading towards Quezon Avenue.</div>
                      <div className="text-xs sm:text-sm mt-2 text-gray-600">
                        Get down at the intersection of Quezon Avenue and España Boulevard.
                      </div>
                    </div>

                    <div className="relative pl-1 py-1.5 group">
                      <div className="flex flex-col sm:pl-[90px] sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[5rem] before:self-start before:-translate-x-1/2 before:translate-y-1">
                        <time className="sm:absolute left-0.5 translate-y-0.5 inline-flex items-center justify-center text-xs sm:text-sm w-20 h-6 mb-3 sm:mb-0 text-blue-700 rounded-full">Get Off</time>
                        <div className="text-xs sm:text-sm mt-2 text-gray-600">Ride a jeep to Manila, then get off at Lerma Street.</div>
                      </div>

                      <div className="flex flex-row mb-6 sm:pl-16 gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                          <circle cx="13" cy="4" r="2" fill="#6366F1" />
                          <path fill="#6366F1" d="M13.978 12.27c.245.368.611.647 1.031.787l2.675.892l.633-1.896l-2.675-.892l-1.663-2.495a2 2 0 0 0-.769-.679l-1.434-.717a2 2 0 0 0-1.378-.149l-3.193.797a2 2 0 0 0-1.306 1.046l-1.794 3.589l1.789.895l1.794-3.589l2.223-.556l-1.804 8.346l-3.674 2.527l1.133 1.648l3.675-2.528c.421-.29.713-.725.82-1.225l.517-2.388l2.517 1.888l.925 4.625l1.961-.393l-.925-4.627a2 2 0 0 0-.762-1.206l-2.171-1.628l.647-3.885z" />
                        </svg>
                        <div className="text-xs sm:text-sm mt-2 text-gray-600">Walk to Intramuros via Padre Burgos or General Luna Street.</div>
                      </div>
                    </div>
                  </div>
                </div>

                <span className="text-xs sm:text-sm text-gray-600 font-semibold my-2">Your experiences</span>
                <span className="text-xs sm:text-sm text-gray-600">
                  We started our journey at the Intramuros gates, aiming to explore the historic walled city. We initially struggled with finding parking, but a guard directed us to a nearby lot. The cobblestone streets were enchanting but tricky to navigate without a map.
                </span>

                {/* Approve and Reject Buttons */}
                <div className="flex justify-between mt-4">
                  <button className="px-4 py-2 bg-green-500 text-white text-xs sm:text-sm rounded-lg hover:bg-green-600">
                    Approve
                  </button>
                  <button className="px-4 py-2 bg-red-500 text-white text-xs sm:text-sm rounded-lg hover:bg-red-600">
                    Reject
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RouteSuggestion;
