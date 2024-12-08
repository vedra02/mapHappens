import React from 'react'
import { Link } from 'react-router-dom';

const Feedback = () => {
  return (
    <section>

<div class="flex flex-col flex-start py-3 bg-gray-50 w-full max-w-xl mx-auto rounded-md">


<div className="flex items-center justify-between mb-2 bg-gray-50 w-full max-w-xl mx-auto rounded-md">
      <span className="text-gray-600 font-bold">Details</span>

      {/* Use Link component to navigate */}
      <Link to="/posting">
        <button className="bg-indigo-500 text-white px-4 py-0.5 rounded hover:bg-indigo-500 focus:outline-none focus:ring focus:ring-indigo-400">
          Post
        </button>
      </Link>
    </div>


<span class="mt-2 text-gray-500">Location</span>
<input type="text" id="Location" class="bg-indigo-50 border border-indigo-200 text-gray-700
 rounded-lg focus:ring-blue-600 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600
  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Novaliches, Bayan Glori" required />
  <span class="pt-4 text-gray-600">Destination</span>
<input type="text" id="Location" class="bg-indigo-50 border border-indigo-200 text-gray-700
 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600
  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Intramuros, Manila City" required />
  </div>
 


  <div class="max-w-xl mx-auto mt-10">
 
  <span class="text-gray-600 text-m font-bold pt-6">Best Way</span>


 
  <div class="flex flex-col items-start bg-white rounded-lg shadow-xl mt-4 pr-4">
   
   
    <div class="flex justify-between items-center w-full px-4 py-2">
   
    <div class="flex items-center gap-2">
   
      <div class="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold text-xs">
        mH
      </div>
        <h2 class="text-xs font-semibold text-gray-700">mapHappens</h2>
    </div>
  </div>


  <div class="pl-14">
  <div class="text-xs text-gray-500 pt-1 pb-1">
 
    <span class="mb-2 block">Destination: Intramuros, Manila</span>
 
    <span class="mb-1 block">Tourist Spot Description</span>
    <span> Intramuros represents the Philippines' colonial past,
      where the Spanish influence is deeply woven into the country's
      culture, architecture, and traditions. It is a symbol of both
      the glory and the struggles during the Spanish colonization.
      Today, it serves as a popular tourist destination that offers
      a look back in time, showcasing historical landmarks, museums,
      and the enduring spirit of the Filipino people.</span>
  </div>
  </div>
   
  <div class="flex items-center space-x-2 ml-6 mb-2">
 <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
 </svg>


 <div class="flex items-center my-1">
<span class="text-xs font-semibold text-gray-700 mr-2">Status</span>


<div class="flex items-center border border-green-400 text-green-600 px-2 py-0.5 rounded-md mt-1">
  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
  </svg>
  <span class="text-xs font-semibold">Approved by Admin</span>
</div>
</div>
</div>
 
  </div>
</div>


  <div class="max-w-xl mx-auto mt-10">
 
  <span class="text-gray-600 text-m font-bold pt-6">Route Post Suggestion</span>


<div class="bg-white rounded-lg shadow-xl mt-4 pr-4">


<div class="flex flex-col items-start">
<div class="flex justify-between items-center w-full px-4 py-2">
   
    <div class="flex items-center gap-2">
   
      <div class="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold text-xs">
        JM
      </div>
     
      <div class="flex flex-col">
        <h2 class="text-xs font-semibold text-gray-700">Joanah Marie Aldave</h2>
        <span class="text-xs text-gray-500">@jmaldave</span>
      </div>
    </div>
 
    <div class="text-xs text-gray-500">12 hours ago</div>
  </div>
</div>
 
    <div class="text-xs text-gray-500 ml-14 pt-1">
   
      <span class="mb-2 block">Destination: Intramuros, Manila</span>
   
      <span class="mb-1 block">Tourist Experience:</span>
      <span> We started our journey at the Intramuros gates, aiming to explore the historic walled city. We initially
        struggled with finding parking, but a guard directed us to a nearby lot. The cobblestone streets were
        enchanting but tricky to navigate without a map. A tricycle driver offered a short tour, which made it
        easier to locate iconic spots like Fort Santiago and San Agustin Church. Getting lost led us to a quaint
        café serving authentic Filipino dishes.</span>
        </div>


<div class="flex justify-between w-full">


<div class="flex flex-row my-3">
<div class="flex items-center my-2 ml-6 mr-2">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
    </svg>  </div>


   <div class="flex items-center">
    <span class="text-xs font-semibold text-gray-700 mr-2">Status</span>
    </div>


    <div class="flex items-center border border-green-400 text-green-600 px-2 py-0.5 rounded-md mt-1">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
      </svg>
          <span class="text-xs font-semibold">Approved by Admin</span>
    </div>


 
</div>


<div class="flex items-center mr-4">
<button class="flex items-center border border-green-400 text-green-600 px-2 py-1 rounded-md mt-1 mr-2">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-3.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
    </svg>
        <span class="text-xs font-semibold ml-1">50</span>
  </button>


  <button class="flex items-center border border-red-400 text-red-600 px-2 py-1 rounded-md mt-1">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-3.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
    </svg>
        <span class="text-xs font-semibold ml-1">2</span>
</button>


</div>
  </div>
</div>


<div class=" bg-white rounded-lg shadow-xl mt-4 pr-4">


<div class="flex flex-col items-start">
<div class="flex justify-between items-center w-full px-4 py-2">
   
    <div class="flex items-center gap-2">
   
      <div class="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold text-xs">
        JM
      </div>
     
      <div class="flex flex-col">
        <h2 class="text-xs font-semibold text-gray-700">Joanah Marie Aldave</h2>
        <span class="text-xs text-gray-500">@jmaldave</span>
      </div>
    </div>
 
    <div class="text-xs text-gray-500">12 hours ago</div>
  </div>
</div>
 
    <div class="text-xs text-gray-500 ml-14 pt-1">
   
      <span class="mb-2 block">Destination: Intramuros, Manila</span>
   
      <span class="mb-1 block">Tourist Experience:</span>
      <span> We started our journey at the Intramuros gates, aiming to explore the historic walled city. We initially
        struggled with finding parking, but a guard directed us to a nearby lot. The cobblestone streets were
        enchanting but tricky to navigate without a map. A tricycle driver offered a short tour, which made it
        easier to locate iconic spots like Fort Santiago and San Agustin Church. Getting lost led us to a quaint
        café serving authentic Filipino dishes.</span>
        </div>


<div class="flex justify-between w-full">


<div class="flex flex-row my-3">
<div class="flex items-center my-2 ml-6 mr-2">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
    </svg>  </div>


   <div class="flex items-center">
    <span class="text-xs font-semibold text-gray-700 mr-2">Status</span>
    </div>


    <div class="flex items-center border border-green-400 text-green-600 px-2 py-0.5 rounded-md mt-1">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
      </svg>
          <span class="text-xs font-semibold">Approved by Admin</span>
    </div>


 
</div>


<div class="flex items-center mr-4">
<button class="flex items-center border border-green-400 text-green-600 px-2 py-1 rounded-md mt-1 mr-2">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-3.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
    </svg>
        <span class="text-xs font-semibold ml-1">50</span>
  </button>


  <button class="flex items-center border border-red-400 text-red-600 px-2 py-1 rounded-md mt-1">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-3.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
    </svg>
        <span class="text-xs font-semibold ml-1">2</span>
</button>


</div>
  </div>
</div>


<div class=" bg-white rounded-lg shadow-xl mt-4 pr-4">


<div class="flex flex-col items-start">
<div class="flex justify-between items-center w-full px-4 py-2">
   
    <div class="flex items-center gap-2">
   
      <div class="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold text-xs">
        JM
      </div>
     
      <div class="flex flex-col">
        <h2 class="text-xs font-semibold text-gray-700">Joanah Marie Aldave</h2>
        <span class="text-xs text-gray-500">@jmaldave</span>
      </div>
    </div>
 
    <div class="text-xs text-gray-500">12 hours ago</div>
  </div>
</div>
 
    <div class="text-xs text-gray-500 ml-14 pt-1">
   
      <span class="mb-2 block">Destination: Intramuros, Manila</span>
   
      <span class="mb-1 block">Tourist Experience:</span>
      <span> We started our journey at the Intramuros gates, aiming to explore the historic walled city. We initially
        struggled with finding parking, but a guard directed us to a nearby lot. The cobblestone streets were
        enchanting but tricky to navigate without a map. A tricycle driver offered a short tour, which made it
        easier to locate iconic spots like Fort Santiago and San Agustin Church. Getting lost led us to a quaint
        café serving authentic Filipino dishes.</span>
        </div>


<div class="flex justify-between w-full">


<div class="flex flex-row my-3">
<div class="flex items-center my-2 ml-6 mr-2">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
    </svg>  </div>


   <div class="flex items-center">
    <span class="text-xs font-semibold text-gray-700 mr-2">Status</span>
    </div>


    <div class="flex items-center border border-green-400 text-green-600 px-2 py-0.5 rounded-md mt-1">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
      </svg>
          <span class="text-xs font-semibold">Approved by Admin</span>
    </div>


 
</div>


<div class="flex items-center mr-4">
<button class="flex items-center border border-green-400 text-green-600 px-2 py-1 rounded-md mt-1 mr-2">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-3.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
    </svg>
        <span class="text-xs font-semibold ml-1">50</span>
  </button>


  <button class="flex items-center border border-red-400 text-red-600 px-2 py-1 rounded-md mt-1">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-3.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
    </svg>
        <span class="text-xs font-semibold ml-1">2</span>
</button>


</div>
  </div>
</div>


<div class=" bg-white rounded-lg shadow-xl mt-4 pr-4">


<div class="flex flex-col items-start">
<div class="flex justify-between items-center w-full px-4 py-2">
   
    <div class="flex items-center gap-2">
   
      <div class="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold text-xs">
        JM
      </div>
     
      <div class="flex flex-col">
        <h2 class="text-xs font-semibold text-gray-700">Joanah Marie Aldave</h2>
        <span class="text-xs text-gray-500">@jmaldave</span>
      </div>
    </div>
 
    <div class="text-xs text-gray-500">12 hours ago</div>
  </div>
</div>
 
    <div class="text-xs text-gray-500 ml-14 pt-1">
   
      <span class="mb-2 block">Destination: Intramuros, Manila</span>
   
      <span class="mb-1 block">Tourist Experience:</span>
      <span> We started our journey at the Intramuros gates, aiming to explore the historic walled city. We initially
        struggled with finding parking, but a guard directed us to a nearby lot. The cobblestone streets were
        enchanting but tricky to navigate without a map. A tricycle driver offered a short tour, which made it
        easier to locate iconic spots like Fort Santiago and San Agustin Church. Getting lost led us to a quaint
        café serving authentic Filipino dishes.</span>
        </div>


<div class="flex justify-between w-full">


<div class="flex flex-row my-3">
<div class="flex items-center my-2 ml-6 mr-2">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
    </svg>  </div>


   <div class="flex items-center">
    <span class="text-xs font-semibold text-gray-700 mr-2">Status</span>
    </div>


    <div class="flex items-center border border-green-400 text-green-600 px-2 py-0.5 rounded-md mt-1">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
      </svg>
          <span class="text-xs font-semibold">Approved by Admin</span>
    </div>


 
</div>


<div class="flex items-center mr-4">
<button class="flex items-center border border-green-400 text-green-600 px-2 py-1 rounded-md mt-1 mr-2">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-3.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
    </svg>
        <span class="text-xs font-semibold ml-1">50</span>
  </button>


  <button class="flex items-center border border-red-400 text-red-600 px-2 py-1 rounded-md mt-1">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-3.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
    </svg>
        <span class="text-xs font-semibold ml-1">2</span>
</button>


</div>
  </div>
</div>


<div class=" bg-white rounded-lg shadow-xl mt-4 pr-4">


<div class="flex flex-col items-start">
<div class="flex justify-between items-center w-full px-4 py-2">
   
    <div class="flex items-center gap-2">
   
      <div class="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold text-xs">
        JM
      </div>
     
      <div class="flex flex-col">
        <h2 class="text-xs font-semibold text-gray-700">Joanah Marie Aldave</h2>
        <span class="text-xs text-gray-500">@jmaldave</span>
      </div>
    </div>
 
    <div class="text-xs text-gray-500">12 hours ago</div>
  </div>
</div>
 
    <div class="text-xs text-gray-500 ml-14 pt-1">
   
      <span class="mb-2 block">Destination: Intramuros, Manila</span>
   
      <span class="mb-1 block">Tourist Experience:</span>
      <span> We started our journey at the Intramuros gates, aiming to explore the historic walled city. We initially
        struggled with finding parking, but a guard directed us to a nearby lot. The cobblestone streets were
        enchanting but tricky to navigate without a map. A tricycle driver offered a short tour, which made it
        easier to locate iconic spots like Fort Santiago and San Agustin Church. Getting lost led us to a quaint
        café serving authentic Filipino dishes.</span>
        </div>


<div class="flex justify-between w-full">


<div class="flex flex-row my-3">
<div class="flex items-center my-2 ml-6 mr-2">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
    </svg>  </div>


   <div class="flex items-center">
    <span class="text-xs font-semibold text-gray-700 mr-2">Status</span>
    </div>


    <div class="flex items-center border border-green-400 text-green-600 px-2 py-0.5 rounded-md mt-1">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
      </svg>
          <span class="text-xs font-semibold">Approved by Admin</span>
    </div>


 
</div>


<div class="flex items-center mr-4">
<button class="flex items-center border border-green-400 text-green-600 px-2 py-1 rounded-md mt-1 mr-2">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-3.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
    </svg>
        <span class="text-xs font-semibold ml-1">50</span>
  </button>


  <button class="flex items-center border border-red-400 text-red-600 px-2 py-1 rounded-md mt-1">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-3.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
    </svg>
        <span class="text-xs font-semibold ml-1">2</span>
</button>


</div>
  </div>
</div>


<div class=" bg-white rounded-lg shadow-xl mt-4 pr-4">


<div class="flex flex-col items-start">
<div class="flex justify-between items-center w-full px-4 py-2">
   
    <div class="flex items-center gap-2">
   
      <div class="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold text-xs">
        JM
      </div>
     
      <div class="flex flex-col">
        <h2 class="text-xs font-semibold text-gray-700">Joanah Marie Aldave</h2>
        <span class="text-xs text-gray-500">@jmaldave</span>
      </div>
    </div>
 
    <div class="text-xs text-gray-500">12 hours ago</div>
  </div>
</div>
 
    <div class="text-xs text-gray-500 ml-14 pt-1">
   
      <span class="mb-2 block">Destination: Intramuros, Manila</span>
   
      <span class="mb-1 block">Tourist Experience:</span>
      <span> We started our journey at the Intramuros gates, aiming to explore the historic walled city. We initially
        struggled with finding parking, but a guard directed us to a nearby lot. The cobblestone streets were
        enchanting but tricky to navigate without a map. A tricycle driver offered a short tour, which made it
        easier to locate iconic spots like Fort Santiago and San Agustin Church. Getting lost led us to a quaint
        café serving authentic Filipino dishes.</span>
        </div>


<div class="flex justify-between w-full">


<div class="flex flex-row my-3">
<div class="flex items-center my-2 ml-6 mr-2">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
    </svg>  </div>


   <div class="flex items-center">
    <span class="text-xs font-semibold text-gray-700 mr-2">Status</span>
    </div>


    <div class="flex items-center border border-green-400 text-green-600 px-2 py-0.5 rounded-md mt-1">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
      </svg>
          <span class="text-xs font-semibold">Approved by Admin</span>
    </div>


 
</div>


<div class="flex items-center mr-4">
<button class="flex items-center border border-green-400 text-green-600 px-2 py-1 rounded-md mt-1 mr-2">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-3.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
    </svg>
        <span class="text-xs font-semibold ml-1">50</span>
  </button>


  <button class="flex items-center border border-red-400 text-red-600 px-2 py-1 rounded-md mt-1">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-3.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
    </svg>
        <span class="text-xs font-semibold ml-1">2</span>
</button>


</div>
  </div>
</div>
</div>


 <button class="fixed bottom-4 right-4
 bg-indigo-500 text-white h-12  w-12 p-1 rounded-full hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
  <span class="flex items-center justify-center text-white text-3xl font-bold">+</span>
</button>
    </section>
  )
}
export default Feedback


