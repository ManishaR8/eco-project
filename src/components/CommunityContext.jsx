import React, { useState, useEffect } from 'react';

import SecondPart from './SecondPart';
import './SecondPart.css'

const CommunityContext = () => {

    const data = [
        {
          imgSrc: "https://ecoyaan.com/images/Impact.png",
          title: "Join our community in creating a more sustainable future for everyone",
          description: "At Ecoyaan, we are more than just a platform. Our vision is to build an eco-conscious community for people and products Consider us your partner for all things sustainable. To keep you motivated on the journey, we will provide you with engaging information about climate change, the latest updates on climate policies and lifestyle tips that you can adopt to reduce your impact on the environment.",
        },
        {
          imgSrc: "https://ecoyaan.com/images/ProductCuration.mp4",
          title: "Carefully curated Eco-friendly products",
          description: "We believe that every purchase you make can have a positive impact on the planet and the future.Soon, we will be connecting you with eco-friendly and sustainable products that are carefully selected based on their environmental and social benefits.",
        },
        {
          imgSrc: "https://ecoyaan.com/images/OurStory4.png",
          title: "For businesses that care deeply about sustainability",
          description: "Do you run a business that is committed to sustainability in every aspect of your work? Do you want to showcase your products to an incredible audience of eco-conscious consumers who care? If yes, then you are the perfect fit for our platform. Our community appreciates and supports businesses that are transparent, ethical, and innovative in their approach to sustainability. Contact us today:",
        },
      ];


      const [animationState, setAnimationState] = useState('initial');

      useEffect(() => {
        const interval = setInterval(() => {
          setAnimationState('animate');  
        }, 5000); 
    
        return () => clearInterval(interval);
      }, []); 
    

  return (
    <div>
        <div className="community-container bg-gradient-to-l from-green-100   to-white ">
        {data.map((item, index) => (
        <SecondPart
          key={index}
          imgSrc={item.imgSrc}
          title={item.title}
          description={item.description}
          animation={animationState === 'animate' ? (index % 2 === 0 ? 'left-to-center' : 'right-to-center') : 'initial'} 
        />
      ))}
        </div>
    </div>
  )
}

export default CommunityContext