import React from 'react'

const Header = () => {
  return (
    <div className='fixed w-full bg-[#fbfcff]'>
      <div className='flex justify-between items-center p-3 pr-6'>
        {/* Logo Placeholder */}
        <div className='flex items-center gap-3'>
          <div className='size-[3.8rem] bg-indigo-500 rounded-xl'></div>
          <h3>TourEase</h3>
        </div>
        {/* Middle */}
        <div className='flex items-center gap-2 border border-indigo-300/40 rounded-full p-1 pr-4'>
          {/* Avatar & Name */}
          <div>
            <div className='flex items-center gap-2 pr-4 p-1 rounded-full bg-indigo-200/50'>
              <div className='flex items-center justify-center size-8 rounded-full bg-indigo-500'>
                <span className='text-white text-sm'>G</span>
              </div>
              <p className='leading-none text-indigo-500 font-semibold'>Guest</p>
              {/*  */}
            </div>
          </div>
          <span className='text-indigo-400/30'>/</span>
          <div className='text-center text-xs leading-none w-full max-w-[7rem]'>You are currently browsing as <span className='font-semibold'>Guest</span></div>
        </div>
        {/* Actions Buttons */}
        <div className='flex items-center gap-3'>
          <button className='px-3.5 py-2 rounded-lg bg-indigo-100/80 text-indigo-500 text-sm font-medium'>Login</button>
          <button className='px-3.5 py-2 rounded-lg bg-indigo-500 text-white text-sm'>Sign up</button>
        </div>
      </div>
    </div>
  )
}

export default Header
