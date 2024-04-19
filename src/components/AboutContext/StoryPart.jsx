import React from 'react'

const StoryPart = () => {
  return (
    <div className=' flex justify-center items-center px-3 p-7'>
        <div className='bg-gray-100 shadow-inner lg:w-[80vw] md:w-[89vw] sm:w-[97vw] w-[97vw] xl:w-[57vw] rounded-xl  p-3 flex flex-col gap-y-9'
        style={{boxShadow: "rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset"}}>

            <h1 className='text-5xl text-center font-bold text-teal-700 py-6'>Our Story</h1>

            <div className='flex justify-around items-center xl:flex-row lg:flex-row md:flex-row sm:flex-row flex-col gap-y-6'>
               <div className='bg-white shadow-2xl rounded-2xl'>
                    <img src='https://ecoyaan.com/images/about-us-founding-team-01.png' className=' h-72' />
               </div>
                <div className='bg-white shadow-2xl rounded-2xl'>
                    <img src='https://ecoyaan.com/images/about-us-founding-team-02.png' className=' h-72'/>
                </div>
            </div>
            <div className='px-20 flex pb-4 flex-col gap-y-7 text-center'>
                <p>We started Ecoyaan after watching an episode of “Our Planet II”, where we saw the devastating impact of plastic pollution and climate change on the albatross birds. That moment ignited our mission.</p>
                <p>
                    Our research suggests that many Indians understand global warming, yet access to sustainable practices and products remains limited. We also noticed that there is a lack of support for eco-friendly businesses.
                </p>
                <p>
                     We created Ecoyaan to connect consumers, businesses, and sustainability experts. We want to make it easy and convenient for people to access eco-friendly products and services, learn and share best practices, and support sustainability initiatives.
                </p>
                <p>
                As founders, we are not perfect, but we are passionate. We believe that every small step matters. Join us and be a part of the Ecoyaan community — together, we’ll make a difference.
                Connect with the founders on LinkedIn here: Abhishek Rao   Sarwanjeet Singh
                </p>
            </div>
        </div>
    </div>
  )
}

export default StoryPart