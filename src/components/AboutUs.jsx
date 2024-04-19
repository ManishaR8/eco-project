import React from 'react'
import Navbar from './Navbar'
import AboutPart from './AboutContext/AboutPart'
import ValuesPart from './AboutContext/ValuesPart'
import Footer from './Footer'
import StoryPart from './AboutContext/StoryPart'
import Teams from './AboutContext/Teams'

const AboutUs = () => {
  return (
    <div className='h-fit'>
      <Navbar/>
        <AboutPart />
        <ValuesPart />
        <StoryPart/>
        <Teams />
        <Footer />
    </div>
  )
}

export default AboutUs