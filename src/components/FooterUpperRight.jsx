import React from 'react'

const FooterUpperRight = () => {
  return (
    <div className='  p-5'>
      <div className='flex justify-around xl:flex-row lg:flex-row md:flex-row sm:flex-row flex-col'>
        <div className='p-2 flex flex-col gap-y-5'>
          <h1 className='text-xl font-semibold'> Registered Address:</h1>
          <div className='w-[30vw]'>
            <p className=' xl:w-[20vw] lg:w-[20vw] md:w-[20vw] sm:w-[20vw] w-[70vw] leading-7'>
            1-N-12T-781/1
            Sri Krishna Vilasa,
            Urvastores,
            Ashoknagar(MR),
            Mangalore,
            Dakshina Kannada- 575006,
            Karnataka, India
            </p>
          </div>
        </div>
        <div className='p-2 flex flex-col gap-y-5'>
          <h1 className='text-xl font-semibold'>Legal Business Name: </h1>
          <div className='xl:w-[20vw] lg:w-[20vw] md:w-[20vw] sm:w-[20vw] w-[70vw]  flex flex-col gap-y-3'>
            <p>
               Kindkarma E-Retail Private Limited
            </p>
            <p>CIN: U47912KA2023PTC182592
              Telephone: +91 9980490777</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterUpperRight