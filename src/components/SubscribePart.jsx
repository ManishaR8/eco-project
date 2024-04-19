import React from 'react'

const SubscribePart = () => {
  return (
    <div className='bg-gradient-to-r from-green-300 via-emerald-300  to-lime-300 h-[25rem]  p-3 flex justify-center px-4 items-center'>
        <div className='flex flex-col items-center justify-around h-full'>
            <h1 className='text-2xl text-center text-balance '>Subscribe to receive updates on blogs, future launches and more !</h1>
            <div className='flex flex-col justify-center items-center gap-y-4'>
                <input placeholder='Your Email Address' 
                    className='p-3 xl:w-[40rem] lg:w-[40rem] md:w-[40rem] sm:w-[40rem] w-[76vw] text-xl'></input>
                <p className='text-balance text-center text-lg'>By subscribing, you agree to receive notifications</p>
                <p>Privacy Policy</p>
            </div>
                
            <button className='bg-green-600 xl:w-[34vw] lg:w-[38vw] md:w-[45vw] sm:w-[38vw] w-[49vw] h-12 text-white rounded text-lg font-medium hover:bg-green-700 cursor-pointer'>
                Subscribe
            </button>
        </div>
    </div>
  )
}

export default SubscribePart