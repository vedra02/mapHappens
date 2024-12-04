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
                  {[/* Navigation items here */].map((item, index) => (
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
        {/* WEB: Admin Logged In */}
        <div className='hidden md:flex items-center gap-2'>
          {/* Admin Logged In */}
          <div className='flex items-center gap-2'>
            <div className='flex items-center justify-center size-8 rounded-full bg-indigo-500'>
              <span className='text-white text-sm'>A</span>
            </div>
            <p className='leading-none text-indigo-500 font-semibold'>Admin</p>
          </div>
          <span className='text-indigo-400/30'>/</span>
          <div className='text-center text-xs leading-none w-full max-w-[7rem]'>
            Admin logged in as <span className='font-semibold'>Admin</span>
          </div>
        </div>
        {/* WEB: Actions Buttons */}
        <div className='hidden md:flex items-center gap-3'>
          {/* Only Admin section */}
        </div>
      </div>
    </div>
  );
};

export default Header;
