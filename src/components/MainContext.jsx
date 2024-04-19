import React from 'react'

const MainContext = () => {
  return (
   <div className='xl:px-16 lg:px-16 md:px-9 sm:px-14  px-3 py-4'>
     <div className=' bg-gradient-to-r from-green-400 to-lime-400    mt-20 rounded h-[48rem] shadow-2xl shadow-green-800 relative'>

        <img src='https://img.freepik.com/free-photo/close-up-green-leaves-nature_23-2149006019.jpg?t=st=1713506716~exp=1713510316~hmac=2a1df7948a1fefa22a9489148f43963b5b236d46e7320fd1bef2261c48d5589f&w=1380' className='h-full w-full rounded-lg hue-rotate-30  ' />
       
       
        <div className='absolute xl:w-[90%] lg:w-[90%] md:w-[100%] sm:w-[100%] w-[100%] top-0 h-[97%] justify-end items-center flex xl:px-14 lg:px-14 md:px-14 sm:px-10  px-2'>

        <div className='flex flex-col xl:w-[60%] lg:w-[77%] md:w-[99%] sm:w-[100%] w-[100%] rounded-3xl h-[48%] hover:bg-opacity-60 bg-opacity-30 bg-slate-50   p-2  
        justify-evenly items-center  hover:border-green-300 '>

            <h1 className='text-5xl text-center text-green-900 font-extrabold'>
            Explore Sustainable Solutions
            </h1>
            <p className='text-xl text-center font-semibold leading-9'>Discover Eco-Friendly Products for a Greener Tomorrow. Embrace eco-conscious living with our carefully curated selection of environmentally friendly items</p>
        </div>
        </div>
    </div>
   </div>
  )
}

export default MainContext