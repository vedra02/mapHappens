import React from "react";

const About = () => {
  return (
    <section className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <header className="text-center py-10 bg-white shadow-md">
        <div className="w-20 h-20 bg-blue-200 rounded-full mb-4 mx-auto"></div>
        <h1 className="text-4xl font-bold text-gray-800">
          Your Travel, Your Way, it's{" "}
          <span className="text-blue-600">mapHappens!!</span>
        </h1>
        <p className="mt-2 text-gray-600">Founded by</p>
        <div className="w-20 h-20 bg-blue-200 rounded-full mb-4 mx-auto"></div>
        <h4 className="mt-1 text-2xl text-blue-500 font-semibold">Group Name</h4>
        <p className="text-sm text-gray-500">CCS IT-3 Students</p>
      </header>

      {/* About Section */}
      <div className="text-center py-10 px-5">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          TourEase: Your Ultimate Metro Companion
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Say goodbye to stress and confusion with TourEase, your go-to tool
          for hassle-free commuting. Whether you're a daily commuter or an
          occasional traveler, TourEase simplifies your journey by offering
          curated routes, reliable schedules, and real-time updates. Navigate
          with ease and confidence and make every trip enjoyable. Experience a
          metro system that revolves around YOU.
        </p>
      </div>

      {/* Team Section */}
      <div className="py-10 bg-[#E0E7FF]">
        <h2 className="text-center text-3xl font-bold text-gray-800 mb-8">
          Meet Our Talented Team
        </h2>
        <div className="max-w-6xl mx-auto px-4">
          {/* Top Row with First Two Members */}
          <div className="grid grid-cols-2 gap-8 mb-8">
            <div className="flex flex-col justify-center items-center text-center col-span-1">
              <div className="w-20 h-20 bg-blue-200 rounded-full mb-4 mx-auto"></div>
              <h4 className="font-semibold text-gray-800">
                Johana Eunice Abellana
              </h4>
              <p className="text-sm text-gray-500">
                Project Manager <br /> Head Researcher
              </p>
            </div>
            <div className="flex flex-col justify-center items-center text-center col-span-1">
              <div className="w-20 h-20 bg-blue-200 rounded-full mb-4 mx-auto"></div>
              <h4 className="font-semibold text-gray-800">
                Joanah Marie L. Aldave
              </h4>
              <p className="text-sm text-gray-500">
                Assistant Project Manager <br /> UI/UX Designer <br /> Head
                Researcher
              </p>
            </div>
          </div>

          {/* Grid for Remaining Members */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
            <div className="flex flex-col justify-center items-center text-center">
              <div className="w-20 h-20 bg-blue-200 rounded-full mb-4 mx-auto"></div>
              <h4 className="font-semibold text-gray-800">
                Gabriel Q. Bruzula
              </h4>
              <p className="text-sm text-gray-500">Programmer</p>
            </div>
            <div className="flex flex-col justify-center items-center text-center">
              <div className="w-20 h-20 bg-blue-200 rounded-full mb-4 mx-auto"></div>
              <h4 className="font-semibold text-gray-800">Gerson A. Boyboy</h4>
              <p className="text-sm text-gray-500">
                UI/UX Designer <br /> Researcher
              </p>
            </div>
            <div className="flex flex-col justify-center items-center text-center">
              <div className="w-20 h-20 bg-blue-200 rounded-full mb-4 mx-auto"></div>
              <h4 className="font-semibold text-gray-800">
                Marc Jerald B. De Guzman
              </h4>
              <p className="text-sm text-gray-500">Researcher</p>
            </div>
            <div className="flex flex-col justify-center items-center text-center">
              <div className="w-20 h-20 bg-blue-200 rounded-full mb-4 mx-auto"></div>
              <h4 className="font-semibold text-gray-800">
                Sean Zidane L. Dumlao
              </h4>
              <p className="text-sm text-gray-500">Programmer</p>
            </div>
            <div className="flex flex-col justify-center items-center text-center">
              <div className="w-20 h-20 bg-blue-200 rounded-full mb-4 mx-auto"></div>
              <h4 className="font-semibold text-gray-800">
                Icko Cristian M. Llanillo
              </h4>
              <p className="text-sm text-gray-500">Researcher</p>
            </div>
            <div className="flex flex-col justify-center items-center text-center">
              <div className="w-20 h-20 bg-blue-200 rounded-full mb-4 mx-auto"></div>
              <h4 className="font-semibold text-gray-800">
                Patricia Mae R. Romillo
              </h4>
              <p className="text-sm text-gray-500">
                UI/UX Designer <br /> Researcher
              </p>
            </div>
            <div className="flex flex-col justify-center items-center text-center">
              <div className="w-20 h-20 bg-blue-200 rounded-full mb-4 mx-auto"></div>
              <h4 className="font-semibold text-gray-800">Ashley A. Ruaza</h4>
              <p className="text-sm text-gray-500">Programmer</p>
            </div>
            <div className="flex flex-col justify-center items-center text-center">
              <div className="w-20 h-20 bg-blue-200 rounded-full mb-4 mx-auto"></div>
              <h4 className="font-semibold text-gray-800">
                John Paul J. Saavedra
              </h4>
              <p className="text-sm text-gray-500">Programmer</p>
            </div>
            <div className="flex flex-col justify-center items-center text-center">
              <div className="w-20 h-20 bg-blue-200 rounded-full mb-4 mx-auto"></div>
              <h4 className="font-semibold text-gray-800">
                John Cedric G. Salinas
              </h4>
              <p className="text-sm text-gray-500">Programmer</p>
            </div>
            <div className="flex flex-col justify-center items-center text-center">
              <div className="w-20 h-20 bg-blue-200 rounded-full mb-4 mx-auto"></div>
              <h4 className="font-semibold text-gray-800">
                Joshua Emmanuel P. Valeza
              </h4>
              <p className="text-sm text-gray-500">Programmer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
