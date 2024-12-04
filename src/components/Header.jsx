import React, { useState, useRef, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

const Header = () => {
  const { pathname } = useLocation();
  const [NavDropdownOpen, setNavDropdownOpen] = useState(false);
  const [UserDropdownOpen, setUserDropdownOpen] = useState(false);

  const navDropdownRef = useRef(null);
  const userDropdownRef = useRef(null);

  // Toggle dropdowns logic
  const toggleNavDropdown = () => {
    setNavDropdownOpen(!NavDropdownOpen);
  };
  const toggleUserDropdown = () => {
    setUserDropdownOpen(!UserDropdownOpen);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navDropdownRef.current &&
        !navDropdownRef.current.contains(event.target) &&
        !event.target.closest('button')?.classList.contains('nav-button')
      ) {
        setNavDropdownOpen(false);
      }

      if (
        userDropdownRef.current &&
        !userDropdownRef.current.contains(event.target) &&
        !event.target.closest('button')?.classList.contains('user-button')
      ) {
        setUserDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='fixed w-full bg-[#fbfcff]'>
      <div className='flex justify-between items-center pt-3 px-3 md:px-0 md:pr-6'>
        <div className='flex items-center gap-3'>
          {/* MOB: Navigation dropdown */}
          <div className='relative' ref={navDropdownRef}>
            <button
              className='md:hidden p-2 rounded-lg bg-indigo-100/80 text-indigo-500 nav-button'
              onClick={toggleNavDropdown}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
              </svg>
            </button>
            <div
              className={`absolute left-0 w-[4rem] transform transition-all duration-300 ease-in-out ${NavDropdownOpen ? 'mt-3 opacity-100' : '-mt-1 opacity-0 pointer-events-none'
                }`}
            >
              <div className='flex flex-col justify-between gap-2 py-2 items-center bg-white shadow-lg shadow-indigo-950/5 border border-indigo-200/80 rounded-xl h-full'>
                {/* Navigation buttons */}
                <ul className='space-y-2'>
                  {[
                    {
                      icon: 'm2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25',
                      path: '/',
                    },
                    {
                      icon: 'M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z',
                      path: '/routes',
                    },
                    // About Page
                    {
                      icon: 'M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25',
                      path: '/about'
                    },
                    // Feedback Page
                    {
                      icon: 'M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155',
                      path: '/feedback'
                    },
                  ].map((item, index) => (
                    <li key={index}>
                      <Link
                        to={item.path}
                        onClick={() => setNavDropdownOpen(false)}
                        className={`${pathname === item.path ? '!bg-indigo-500 text-white' : ''
                          } bg-indigo-100/70 hover:bg-indigo-200/70 text-indigo-500 transition duration-300 ease-in-out flex items-center justify-center size-12 rounded-full border`}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                        </svg>
                      </Link>
                    </li>
                  ))}
                </ul>
                {/* Logout Button / Paalis nalang if logged out si user */}
                <button className='bg-red-100/70 hover:bg-red-200/70 text-red-500 transition duration-300 ease-in-out flex items-center justify-center size-12 rounded-full border'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {/* Logo Placeholder */}
          <div className='flex items-center gap-3'>
            <div className='md:size-[3.8rem] size-[2.5rem] bg-indigo-500 md:rounded-xl rounded-lg'></div>
            <h3>mapHappens</h3>
          </div>
        </div>
        {/* WEB: Middle content */}
        <div className='hidden md:flex items-center gap-2 border border-indigo-300/40 rounded-full p-1 pr-4'>
          {/* Avatar & Name */}
          <div>
            <div className='flex items-center gap-2 pr-4 p-1 rounded-full bg-indigo-200/50'>
              <div className='flex items-center justify-center size-8 rounded-full bg-indigo-500'>
                <span className='text-white text-sm'>G</span>
              </div>
              <p className='leading-none text-indigo-500 font-semibold'>Guest</p>
            </div>
          </div>
          <span className='text-indigo-400/30'>/</span>
          <div className='text-center text-xs leading-none w-full max-w-[7rem]'>You are currently browsing as <span className='font-semibold'>Guest</span></div>
        </div>
        {/* MOB: User dropdown */}
        <div className='md:hidden block relative' ref={userDropdownRef}>
          <button onClick={toggleUserDropdown} className='md:hidden p-1 rounded-full bg-indigo-200/50 user-button'>
            <div className='flex items-center justify-center size-8 rounded-full bg-indigo-500'>
              <span className='text-white text-sm'>G</span>
            </div>
          </button>
          <div
            className={`absolute right-0 w-[10rem] transform transition-all duration-300 ease-in-out ${UserDropdownOpen ? 'mt-3 opacity-100' : '-mt-1 opacity-0 pointer-events-none'
              }`}
          >
            <div className='bg-white shadow-lg p-4 space-y-4 shadow-indigo-950/5 border border-indigo-200/80 rounded-xl'>
              <p className='text-center'>
                You are currently browsing as <span className='font-semibold'>Guest</span>
              </p>
              <div className='space-y-2'>
                <button className='w-full px-3.5 py-2 rounded-lg bg-indigo-100/80 text-indigo-500 text-sm font-medium'>
                  Login
                </button>
                <button className='w-full px-3.5 py-2 rounded-lg bg-indigo-500 text-white text-sm'>Sign up</button>
              </div>
            </div>
          </div>
        </div>
        {/* WEB: Actions Buttons */}
        <div className='hidden md:flex items-center gap-3' >
          <button className='px-3.5 py-2 rounded-lg bg-indigo-100/80 text-indigo-500 text-sm font-medium'>Login</button>
          <button className='px-3.5 py-2 rounded-lg bg-indigo-500 text-white text-sm'>Sign up</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
