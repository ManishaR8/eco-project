import React from 'react'

const ValuesPart = () => {
    return (
        <div className=' bg-gradient-to-tr from-blue-200   to-white  xl:h-[75rem] lg:h-[95rem] md:h-[100rem] sm:h-[100rem] h-[172rem]  p-5'>
            <div className='flex flex-col h-fit  gap-y-9 justify-around items-center xl:mt-0 lg:mt-0 md:mt-0 sm:mt-0 mt-[22rem]'>
                <h1 className='text-6xl text-green-800 py-7 font-bold'>Our values</h1>
                
                <div className='bg-white py-9 shadow-2xl p-3 flex 
                xl:w-[45vw] lg:w-[79vw] md:w-[88vw] sm:w-[95vw] 
                w-[94vw] xl:flex-row lg:flex-row md:flex-row sm:flex-row flex-col rounded-lg gap-y-12  items-center hover:shadow-green-200'>

                    <img src='https://ecoyaan.com/images/Trust.png' className='h-56 w-84' />
                    <div className='flex flex-col xl:text-start lg:text-start md:text-start sm:text-start text-center gap-y-3'>

                        <h1 className='text-3xl font-bold'>Trust</h1>
                        <p className='text-lg'>We value the trust of our community. We strive to be transparent and honest in everything we do, from the content we share today to sourcing our products in the future.</p>
                    </div>
                </div>
                <div className='flex xl:flex-row lg:flex-col md:flex-col sm:flex-col flex-col w-full justify-around gap-y-9 items-center'>

                    <div className='bg-white  py-9 flex  shadow-2xl xl:w-[45vw] lg:w-[79vw] md:w-[88vw] sm:w-[95vw] 
                     w-[94vw] xl:flex-row lg:flex-row md:flex-row sm:flex-row flex-col rounded-lg hover:shadow-green-400'>

                    <img src='https://ecoyaan.com/images/Authenticity.png'
                    className='h-56 w-84' />
                        <div className='flex flex-col xl:text-start lg:text-start gap-y-7 md:text-start sm:text-start text-center '>
                            <h1  className='text-3xl font-bold'>Authenticity</h1>
                            <p className='text-lg'>We are genuine in our mission to promote sustainability and environmental awareness. An authentic community of eco-conscious people can inspire each other on the journey towards sustainability.</p>
                        </div>
                    </div>

                    <div className='bg-white py-9 px-5 flex  shadow-2xl xl:w-[45vw] lg:w-[79vw] md:w-[88vw] sm:w-[95vw] gap-y-7
                    w-[94vw] xl:flex-row lg:flex-row md:flex-row sm:flex-row flex-col rounded-lg hover:shadow-green-400'>
                        <img src='https://ecoyaan.com/images/Impact.png' className='h-56 w-62' />
                        <div className='flex flex-col xl:text-start lg:text-start md:text-start sm:text-start text-center gap-y-3'>
                            <h1 className='text-3xl font-bold'>Impact</h1>
                            <p className='text-lg'>We measure our success by our impact on the planet and our community. We aim to empower our sellers and customers to make responsible choices that benefit their well-being and the well-being of others.</p>
                        </div>
                    </div>
                </div>
                <div className='bg-white flex py-9 px-5  shadow-2xl xl:w-[45vw] lg:w-[79vw] md:w-[88vw] sm:w-[95vw] 
                w-[94vw] xl:flex-row lg:flex-row md:flex-row gap-y-7 sm:flex-row flex-col rounded-lg hover:shadow-green-400'>
                     <img src='https://ecoyaan.com/images/FunAndEngaging.png'
                     className='h-56 w-84' />
                    <div className='flex flex-col xl:text-start lg:text-start md:text-start sm:text-start text-center gap-y-3'>
                        <h1 className='text-3xl font-bold'>Fun & Engaging</h1>
                        <p className='text-lg'>Moving towards a sustainable lifestyle and the constant news around climate change can be stressful. We aim to inject fun and creativity into everything we do, from designing our products to providing services.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ValuesPart