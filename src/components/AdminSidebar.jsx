import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const AdminSidebar = () => {
  const { pathname } = useLocation();

  return (
    <div className="hidden md:block fixed h-full p-3 w-full max-w-[5.5rem]">
      <div className="h-full pt-[4.5rem]">
        <div className="flex flex-col justify-between gap-2 py-2 items-center bg-white border border-indigo-200/80 rounded-xl h-full">
          {/* Navigation buttons */}
          <ul className="space-y-2">
            {[
              // Dashboard
              {
                icon: 'M3 10l7.89-7.89a1.25 1.25 0 0 1 1.77 0L21 10M4 10v9.25c0 .69.56 1.25 1.25 1.25h4.5c.69 0 1.25-.56 1.25-1.25v-4.5c0-.69.56-1.25 1.25-1.25h1.5c.69 0 1.25.56 1.25 1.25v4.5c0 .69.56 1.25 1.25 1.25h4.5c.69 0 1.25-.56 1.25-1.25V10',
                path: '/dashboard',
              },
              // Add Routes
              {
                icon: 'M12 3v18m9-9H3',
                path: '/location',
              },
              // Feedback
              {
                icon: 'M17 8V7a4 4 0 0 0-8 0v1m1 4v5m6-5v5m-7.5-4h9',
                path: '/AdminFeedback',
              },
              // Post Suggestion
              {
                icon: 'M11.25 3.75v1.5m0 12v1.5m5.25-9.75h1.5m-12 0h1.5m10.43-5.56a8.25 8.25 0 1 0 0 11.62 8.25 8.25 0 0 0 0-11.62z',
                path: '/AddRouteSuggest',
              },
            ].map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className={`${
                    pathname === item.path ? '!bg-indigo-500 text-white' : ''
                  } bg-indigo-100/70 hover:bg-indigo-200/70 text-indigo-500 transition duration-300 ease-in-out flex items-center justify-center size-12 rounded-full border`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                </Link>
              </li>
            ))}
          </ul>
          {/* Logout Button */}
          <button className="bg-red-100/70 hover:bg-red-200/70 text-red-500 transition duration-300 ease-in-out flex items-center justify-center size-12 rounded-full border">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
