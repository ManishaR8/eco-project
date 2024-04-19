import React from 'react';

const AboutPart = () => {
  return (
    <div className=" shadow-2xl">
      <div className="h-[55rem]">
        <div className="flex gap-y-6 flex-col justify-center items-center relative">
          
          <div className="relative overflow-hidden w-full group">
            <img
              src="https://ecoyaan.com/images/about-us-sustainable-lifestyle-partner.png"
              className="xl:h-[90vh] lg:h-[90vh] md:h-[90vh] sm:h-[98vh] h-[132vh] w-full transition duration-500 ease-in-out transform hover:scale-105"
              alt="Ecoyaan - Sustainable Lifestyle Partner"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 via-green-500/50 to-green-500/80 opacity-100 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute top-56 xl:px-9 lg:px-9 md:px-9 sm:px-9 px-1 pb-9 text-6xl font-bold text-white">About Ecoyaan</div>

              <div className="text-xl xl:mt-[17rem] lg:mt-[17rem] md:mt-[17rem] sm:mt-[17rem] mt-[21rem] flex flex-col gap-y-8 font-semibold xl:px-8 lg:px-8 md:px-8 sm:px-8 px-2 py-12 xl:w-[70vw] lg:w-[70vw] md:w-[95vw] sm:w-[100vw] w-[99vw] text-white">
                <p className='leading-8'>
                  At Ecoyaan, we are more than just a platform. Our goal is to build a community of eco-conscious people who share a common vision and passion for a more sustainable world.
                </p>
                <p className='leading-8'>
                  We recognize that sustainability is a journey (as the Sanskrit word “yaan” suggests). To keep you motivated on this journey, on our platform and our social media pages, you can find:
                </p>
                <ul className='leading-8'>
                <li>Tips and tricks to adopt a more eco-friendly and low-waste lifestyle</li>
                  <li>Videos, posts, and quizzes on climate change and sustainability</li>
                  <li>Events and pledges that invite you to adopt a more sustainable lifestyle</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPart;
