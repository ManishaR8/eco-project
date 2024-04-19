import React from 'react'
import TeamsComp from './TeamsComp'

const data = [
    {
        name: 'Shruthi',
        role: 'SOCIAL MEDIA',
        imageUrl: 'https://ecoyaan.com/images/about-us-social-media-team-01.png',
        description: 'Shruthi is in charge of our Instagram. She is a practising Vegan and cares deeply about sustainability. Follow her small business.',
    },
    {
        name: 'Urmil',
        role: 'SOCIAL MEDIA',
        imageUrl: 'https://ecoyaan.com/images/about-us-social-media-team-02.png',
        description: 'Urmil creates engaging content for us. She runs her own sustainable apparel store with her sister and advocates for slow fashion. Check out her business.',
    },
    {
        name: 'DIVYA',
        role: 'UX DESIGN',
        imageUrl: 'https://ecoyaan.com/images/about-us-product-team-01.png',
        description: 'Divya creates user-friendly and engaging interfaces for our platform. Check out more of her work on Behance',
    },
    {
        name: 'PRASHANITH',
        role: 'ENGINEERING',
        imageUrl: 'https://ecoyaan.com/images/about-us-product-team-02.png',
        description: 'Prashanith is our front-end engineer, who brings the UX designs to life',
    },
    {
        name: 'SAI ABHILASH',
        role: 'ENGINEERING',
        imageUrl: 'https://ecoyaan.com/images/about-us-product-team-03.png',
        description: 'Sai Abhilash is our back-end engineer, who manages and optimises the infrastructure and logic of our platform',
    },
    {
        name: '???',
        role: 'TEAM ECOYAAN',
        imageUrl: 'https://ecoyaan.com/images/favicon.png',
        description: 'This spot awaits you. Check out our open positions',
    },

]

const Teams = () => {
  return (
    <div className=''>
        <h1 className='text-6xl font-bold text-center text-teal-800 p-7'>Our Teams</h1>
        <div className='flex flex-wrap py-7 bg-gradient-to-r from-teal-100   to-lime-200  justify-around items-center gap-y-7'>
        {data.map((teamMember) => (
        <TeamsComp key={teamMember.name} {...teamMember} /> 
      ))}
        </div>
    </div>
  )
}

export default Teams