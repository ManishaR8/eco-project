import React from 'react'
import FooterDownPart from './FooterUpperRight'
import FooterUpperLeft from './FooterUpperLeft'
import FooterUpperRight from './FooterUpperRight'

const Footer = () => {
  return (
    <div className=' bg-gradient-to-tl border-t-4 border-gray-300 from-green-300 via-blue-100   to-white p-4 pt-8 xl:h-[20rem] lg:h-[20rem] md:h-[30rem] sm:h-[34rem] h-[48rem]'>
        <div className=''>
            <div className='flex justify-evenly xl:flex-row lg:flex-row md:flex-col sm:flex-col flex-col'>
                <FooterUpperLeft />
                <FooterUpperRight />
            </div>
            {/* <FooterDownPart /> */}
        </div>

    </div>
  )
}

export default Footer