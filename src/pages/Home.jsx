import React from 'react'
import images from '../assets/images'

const Home = () => {
  return (
    <section className='flex h-full'>
      {/* Hero & Headline */}
      <div className='flex-grow p-8 space-y-4'>
        <div className='inline-flex items-center gap-1.5 text-sm rounded-full px-2.5 py-1 bg-indigo-50 border border-indigo-500 text-indigo-500'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-3">
            <path fillRule="evenodd" d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z" clipRule="evenodd" />
          </svg>
          Official site
        </div>
        <h1 className='leading-none'>Simply Travel with <span className='text-indigo-500'>TourEase</span></h1>
        <p className='w-full max-w-2xl'>Conquer the Metro with ease! TourEase is your ultimate companion for
        hassle-free commuting, offering clear routes, and navigation to make
        every journey stress-free.</p>
        <div className='flex flex-col justify-center items-center pt-4'>
          <div className='relative h-64 w-auto'>
          <img src={images.landingIllustration} alt="Landing Image Illustration" className='w-full h-full' />
        </div>
        <div className='flex items-center pt-12'>
          <div className='relative w-[30rem]'>
            <input type="text" className='absolute px-4 py-3 bg-white  focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition duration-300 ease-in-out  rounded-xl border w-full pr-24 shadow-lg shadow-indigo-900/5' placeholder='Whachu lookin’ for?' />
            <button className='absolute top-1.5 right-2 px-3.5 py-2 rounded-lg bg-indigo-500 text-white text-sm'>Let's go</button>
          </div>
        </div>
        </div>
      </div>
      {/* Tourist Attractions */}
      <div className='w-full max-w-[21rem] space-y-2 mr-12'>
        <h5>Cities Tourist Attractions</h5>
        <div className='flex flex-col gap-3 bg-white border border-indigo-200/80 shadow-lg shadow-indigo-900/5 rounded-2xl h-[95%] overflow-y-auto p-3 custom-scrollbar'>
          {/* Sample Card */}
          <a href='#' className='relative w-full h-[12rem] rounded-xl'>
            <img src="https://placehold.co/30x30" alt="" className='object-cover w-full h-full rounded-xl' />
            <div className='absolute bottom-4 left-4'>
              <h4 className='leading-none'>Intramuros</h4>
              <p>Manila City</p>
            </div>
          </a>
          {/* Sample Card */}
          <a href='#' className='relative w-full h-[12rem] rounded-xl'>
            <img src="https://placehold.co/30x30" alt="" className='object-cover w-full h-full rounded-xl' />
            <div className='absolute bottom-4 left-4'>
              <h4 className='leading-none'>Intramuros</h4>
              <p>Manila City</p>
            </div>
          </a>
          {/* Sample Card */}
          <a href='#' className='relative w-full h-[12rem] rounded-xl'>
            <img src="https://placehold.co/30x30" alt="" className='object-cover w-full h-full rounded-xl' />
            <div className='absolute bottom-4 left-4'>
              <h4 className='leading-none'>Intramuros</h4>
              <p>Manila City</p>
            </div>
          </a>
          {/* Sample Card */}
          <a href='#' className='relative w-full h-[12rem] rounded-xl'>
            <img src="https://placehold.co/30x30" alt="" className='object-cover w-full h-full rounded-xl' />
            <div className='absolute bottom-4 left-4'>
              <h4 className='leading-none'>Intramuros</h4>
              <p>Manila City</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Home