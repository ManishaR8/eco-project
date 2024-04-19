import React from 'react'

const FooterUpperLeft = () => {
  return (
    <div className=' p-5 xl:w-[50vw] lg:w-[50vw] md:w-[90vw] sm:w-[90vw] w-[90vw]' >
        <div className='flex xl:items-start lg:items-start md:items-start sm:items-start items-center justify-around xl:flex-row lg:flex-row md:flex-row sm:flex-row flex-col gap-y-9 '>

        <div className='flex flex-col gap-y-2'>
            <h1 className='text-xl font-semibold'>Company</h1>
            <div className=' flex flex-col gap-y-2'>
                <h2>About Us</h2>
                <h2>Sell on Ecoyaan</h2>
                <h2>Careers</h2>
            </div>
        </div>

        <div className='flex flex-col gap-y-3'>
        <h1 className='text-xl font-semibold'>Links</h1>
            <div className=' flex flex-col gap-y-2'>
                <h2>Privacy Policy</h2>
                <h2>Terms of use</h2>
            </div>

        </div>

        <div className='flex flex-col items-center gap-y-2'>
             <h1 className='text-xl font-semibold'>Follow Us</h1>
            <div className=' flex  gap-x-4'>
                <img src='https://cdn-icons-png.freepik.com/256/174/174855.png?uid=R109850205&ga=GA1.1.1895320206.1709354466&semt=ais_hybrid'  className='h-4'/>
                <img src='https://cdn-icons-png.freepik.com/256/174/174857.png?uid=R109850205&ga=GA1.1.1895320206.1709354466&semt=ais_hybrid'  className='h-4'/>

                <img src='https://cdn-icons-png.freepik.com/256/145/145802.png?uid=R109850205&ga=GA1.1.1895320206.1709354466&semt=ais_hybrid' className='h-4'/>
            </div>
        </div>
        </div>

    </div>
 
  )
}

export default FooterUpperLeft