
import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './SecondContext.css';
import { Link } from 'react-router-dom';

const SecondContext = () => {

  return (
    <>
     <div className='flex flex-row  mt-14  gap-y-12 justify-center items-center p-2  mb-10 '>

     <div className='flex w-[90vw] md:flex-col sm:flex-col flex-col xl:flex-row lg:flex-row gap-y-5  justify-around items-center'>

     <div className='py-12  shadow-2xl rounded-md flex  p-4  flex-col xl:w-[50rem] lg:w-[47rem] md:w-[30rem] sm:w-[35rem] w-[35rem] text-center gap-y-5 items-center max-w-[24rem]'>
        <h1 className=' text-3xl text-blue-800 font-semibold'>Learn more about us </h1>
        <p className=' text-wrap text-green-800 font-medium leading-9 text-medium'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique omnis iure modi earum reprehenderit deleniti unde, magnam odit aperiam quas commodi id delectus, velit nihil. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, maiores.</p>
      </div>

      <Carousel
         showStatus={false}
         showThumbs={false}
         interval={10000}
         infiniteLoop={true}
         autoPlay={true}
         className=' xl:w-[65vw] lg:w-[65vw]  md:w-[90vw] sm:w-[90vw] w-[90vw]'>
        <div className='flex items-center justify-start'>
          <img src="https://ecoyaan.com/images/carousel-1.png" className='xl:h-[35rem] lg:h-[35rem] md:h-[35rem] sm:h-[35rem] h-[37rem]' />

          <div className='absolute top-0 h-[20rem] flex justify-center items-end'>
          <div className=' top-0 xl:w-[23rem] lg:w-[19rem] md:w-[25rem] sm:w-[18rem] w-[17rem] flex flex-col gap-y-3 items-center  '>
         <p className='font-bold tracking-wide font-sans text-wrap text-2xl my-3 '>Buy Less, Buy Better!</p>

          <p className='text-medium xl:w-[20rem] lg:w-[14rem] md:w-[20rem] sm:w-[20rem] w-[10rem] break-words '>Authentic source of truth for your sustainability needs.</p>
          <Link to={"/about"}>
         <button className='bg-green-600 w-32 h-12 text-white rounded-3xl text-lg font-medium hover:bg-green-700 cursor-pointer'>About Us</button>
         </Link>
         </div>
          </div>
        </div>

        <div>
          <img src="https://ecoyaan.com/images/carousel-2.png" className='xl:h-[35rem] lg:h-[35rem] md:h-[35rem] sm:h-[35rem] h-[37rem]' />
          <div className='absolute top-0 h-[20rem] flex justify-end items-end'>
          <div className=' top-0 xl:w-[23rem] lg:w-[19rem] md:w-[25rem] sm:w-[18rem] w-[17rem] flex flex-col gap-y-3 items-center  '>

         <p className='font-bold tracking-wide font-sans text-wrap text-2xl my-3 '>Follow us on Instagram</p>
          <p className='text-medium my-4 xl:w-[20rem] lg:w-[14rem] md:w-[20rem] sm:w-[15rem] w-[10rem]'>
            For climate news, lifestyle tips, & updates
          </p>
         <button className='bg-green-600 w-32 h-12 text-white rounded-3xl text-lg font-medium hover:bg-green-700 cursor-pointer'>Follow Us</button>
         </div>
        </div>
        </div>
        <div>
          <img src="https://ecoyaan.com/images/carousel-3.png"
          className='xl:h-[35rem] lg:h-[35rem] md:h-[35rem] sm:h-[35rem] h-[37rem]' />

          <div className='absolute top-0 h-[20rem] flex justify-end items-end p-3'>
          <div className='  top-0 xl:w-[45rem] lg:w-[31rem] md:w-[25rem] sm:w-[18rem] w-[17rem] flex flex-col gap-y-3 items-center    '>
         <p className=' break-words font-bold tracking-wide font-sans text-2xl my-3 '>Are you a business that truly cares about sustainability?</p>
          <p className='text-medium my-4'>We would love to work with you</p>
       <button className='bg-green-600 w-32 h-12 text-white rounded-3xl text-lg font-medium hover:bg-green-700 cursor-pointer'>Get in Touch</button>
         </div>
        </div>
        </div>
      </Carousel>
     </div>
     </div>  
    </>
  )
}

export default SecondContext;

