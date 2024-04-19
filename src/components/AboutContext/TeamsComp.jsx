import React from 'react'

const TeamsComp = ({ name, role, imageUrl, description }) => {
  return (
    <div className='bg-white rounded-2xl shadow-lg hover:shadow-blue-300 hover:shadow-xl p-2'>
        <div className='rounded-xl w-96 p-2 h-[34rem] flex flex-col justify-evenly items-center'>
           <div className='bg-pink-100 rounded-full p-1'>
            <img src={imageUrl} alt={name} 
                className='h-56 ' />
           </div>
            <h1 className='text-2xl'>{name}</h1>
            <h1 className='text-xl text-red-700'>{role}</h1>
            <p className='text-lg text-center leading-9'
            >
                {description}
            </p>
        </div>
    </div>
  )
}

export default TeamsComp