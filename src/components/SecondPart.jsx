import React from 'react'
import './SecondPart.css'

const SecondPart = ({ imgSrc, title, description, animation }) => {
  const animationClass = `animate__animated animate__${animation}`;

  return (
    <div className={`flex justify-center items-center p-6 ${animationClass}`}>
    <div  className='flex bg-opacity-20 xl:flex-row lg:flex-row md:flex-row sm:flex-col flex-col p-5 bg-[rgba(255,255,255,.5)]   w-[74rem] rounded-xl shadow-2xl '  >
        <div className='flex flex-col gap-y-8'>
            <h1 className='text-3xl font-semibold leading-9'>
                {title}
            </h1>

            <div className='flex flex-col gap-y-4'>
            <h1 className='text-lg p-2 leading-8'>{description}     
            </h1>
        </div>
        </div>
        {imgSrc.endsWith('.mp4') ? ( 
          <video className='w-[379px] h-[329px] rounded-xl' controls>
            <source src={imgSrc} type='video/mp4' />
          </video>
        ) : (
          <img src={imgSrc} alt={title} className='w-[379px] h-[329px] rounded-xl' />
        )}
    </div>
    </div>
  )
}

export default SecondPart