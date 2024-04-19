import React from 'react'
import Navbar from './Navbar'
import MainContext from './MainContext'
import SecondContext from './SecondContext'
import CommunityContext from './CommunityContext'
import Footer from './Footer'
import SubscribePart from './SubscribePart'

const Home = () => {
  return (
    <div>
        <div className=''>
            <Navbar />
            <MainContext />
            <SecondContext />
            <CommunityContext />
            <div className='px-8 flex items-center justify-center m-6'>
              <button className='bg-green-600 w-32 h-12 text-white rounded text-lg font-medium hover:bg-green-700 cursor-pointer'>Contact Us</button>
            </div>
            <SubscribePart />
            <Footer />
        </div>
    </div>
  )
}

export default Home