import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const AdminSidebar = () => {
  const { pathname } = useLocation();

  return (
    <div className='hidden md:block fixed h-full p-3 w-full max-w-[5.5rem]'>
      <div className='h-full pt-[4.5rem]'>
        <div className='flex flex-col justify-between gap-2 py-2 items-center bg-white border border-indigo-200/80 rounded-xl h-full'>
          {/* Admin Navigation */}
          <ul className='space-y-2'>
            {[ 
              // Dashboard
              {
                icon: 'M4 12h16M12 4v16',
                path: '/dashboard',
                label: 'Dashboard',
              },
              // Location
              {
                icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z',
                path: '/admin/location',
                label: 'Location',
              },
              // Comment
              {
                icon: 'M21 12.78C20.44 12.29 19.7 12 18.9 12c-.8 0-1.54.29-2.1.78L12 16.66 7.2 12.78c-.56-.49-1.3-.78-2.1-.78-2.44 0-4.4 1.7-4.9 4.1-.39 1.5.04 2.9 1.2 4.1l3.2 3.2c.56.56 1.31.88 2.1.88h4.2c.8 0 1.54-.32 2.1-.88l3.2-3.2c1.16-1.2 1.59-2.6 1.2-4.1-.5-2.4-2.46-4.1-4.9-4.1z',
                path: '/admin/comments',
                label: 'Comment',
              },
              // Route Suggestion
              {
                icon: 'M16 2h4a1 1 0 011 1v4a1 1 0 01-1 1h-2v12a1 1 0 01-1 1H5a1 1 0 01-1-1V8H2a1 1 0 01-1-1V3a1 1 0 011-1h4',
                path: '/admin/route-suggestion',
                label: 'Route Suggestion',
              },
            ].map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className={`${
                    pathname === item.path ? '!bg-indigo-500 text-white' : 'text-indigo-300'
                  } hover:bg-indigo-600 transition duration-300 ease-in-out flex flex-col items-center justify-center size-12 p-3 rounded-full`}
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
                  <span className="text-xs mt-1">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
          {/* Logout Button */}
          <button className='bg-red-600 hover:bg-red-700 text-white transition duration-300 ease-in-out flex items-center justify-center size-12 rounded-full p-2'>
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
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1m0-12v1m-4.07 3.93a8 8 0 1 1 1.66 7.66"
              />
            </svg>
            <span className="text-xs mt-1">Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
