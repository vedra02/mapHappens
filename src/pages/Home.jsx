import React from 'react';
import images from '../assets/images'; // Single import for all images

const Home = () => {
  return (
    <section className="p-6 flex">
      {/* Left Section */}
      <div className="flex-1">
        {/* Header Section */}
        <h1 className="text-5xl font-bold leading-none -mt-10"> {/* Added negative margin-top here */}
          Simplify Travel with <span className="text-blue-500">TourEase</span>
        </h1>
        <p className="mt-2">
          Conquer the Metro with ease! <span className="text-black-500 font-bold">TourEase</span> is your ultimate companion for <br />
          hassle-free commuting, offering clear routes, and navigation to make <br />
          every journey stress-free.
        </p>

        
        {/* Image Section */}
<div className="mt-0">
  <img
    src={images.logo123} // Access the logo image
    alt="TourEase Logo"
    className="w-full h-auto max-w-lg mx-20" // Increased size from max-w-sm to max-w-lg
  />
</div>


        {/* Search Section */}
        <div className="mt-0 flex justify-center items-center">
          <input
            type="text"
            placeholder="Whachu lookin' for?"
            className="border border-gray-300 p-2 rounded-md w-2/3"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-r-md">
            Let's go
          </button>
        </div>
      </div>

      {/* Right Section - Tourist Attractions */}
      <div className="w-2/5 ml-6 -mt-12"> {/* Set width to 1/3 or another desired width */}
        <h4 className="text-xl font-bold">Cities Tourist Attractions</h4>
        <div
          className="flex flex-col gap-5 overflow-y-scroll h-[29rem] mt-4 p-4 border border-gray-300 rounded-lg"
        >
          {/* Intramuros Card */}
          <div className="flex items-center gap-4 bg-gray-100 p-4 rounded-md">
            <img
              src={images.intramuros} // Access Intramuros image
              alt="Intramuros"
              className="w-20 h-20 object-cover rounded-md"
            />
            <div>
              <h5 className="text-lg font-semibold">Intramuros</h5>
              <p className="text-sm text-gray-500">Manila City</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-gray-100 p-4 rounded-md">
            <img
              src={images.intramuros} // Access Intramuros image
              alt="Intramuros"
              className="w-20 h-20 object-cover rounded-md"
            />
            <div>
              <h5 className="text-lg font-semibold">Intramuros</h5>
              <p className="text-sm text-gray-500">Manila City</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-gray-100 p-4 rounded-md">
            <img
              src={images.intramuros} // Access Intramuros image
              alt="Intramuros"
              className="w-20 h-20 object-cover rounded-md"
            />
            <div>
              <h5 className="text-lg font-semibold">Intramuros</h5>
              <p className="text-sm text-gray-500">Manila City</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-gray-100 p-4 rounded-md">
            <img
              src={images.intramuros} // Access Intramuros image
              alt="Intramuros"
              className="w-20 h-20 object-cover rounded-md"
            />
            <div>
              <h5 className="text-lg font-semibold">Intramuros</h5>
              <p className="text-sm text-gray-500">Manila City</p>
            </div>
          </div>  
          
          {/* Manila Ocean Park Card */}
          <div className="flex items-center gap-4 bg-gray-100 p-4 rounded-md">
            <img
              src={images.oceanpark} // Access Manila Ocean Park image
              alt="Manila Ocean Park"
              className="w-20 h-20 object-cover rounded-md"
            />
            <div>
              <h5 className="text-lg font-semibold">Manila Ocean Park</h5>
              <p className="text-sm text-gray-500">Manila City</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
