import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className='xl:px-24 lg:px-24 md:px-16 sm:px-16 px-16 bg-white fixed top-0 w-full z-10 bg-opacity-85 shadow-xl shadow-green-200 p-4'>
      <div className='flex justify-between items-center'>
        <Link to= '/'>
        <div>
          <h1 className='text-4xl font-bold text-green-800 '> Ecoyaan</h1>
        </div>
        </Link>
        <div className='hidden md:flex justify-around mt-1 text-xl text-green-800 w-[48rem] '>
          <Link to= '/'>
            <h1 className='hover:shadow-md cursor-pointer'>Home</h1>
          </Link>
         
          <Link to='/about'>
            <h1 className='hover:shadow-md cursor-pointer'>About Us</h1>
          </Link>
          <h1 className='hover:shadow-md cursor-pointer'>Sell on Ecoyaan</h1>
          <h1 className='hover:shadow-md cursor-pointer'>Careers</h1>
        </div>
        <div className='md:hidden'>
          <button
            onClick={toggleMenu}
            className='text-green-800 focus:outline-none'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16m-7 6h7'
              />
            </svg>
          </button>
        </div>
      </div>
      {showMenu && (
        <div className='md:hidden mt-4'>
          <Link to='/'>
            <h1 className='block text-xl text-green-800 py-2 hover:bg-green-100'>
              Home
            </h1>
          </Link>
          <Link to='/about'>
            <h1 className='block text-xl text-green-800 py-2 hover:bg-green-100'>
              About Us
            </h1>
          </Link>
          <h1 className='block text-xl text-green-800 py-2 hover:bg-green-100'>
            Sell on Ecoyaan
          </h1>
          <h1 className='block text-xl text-green-800 py-2 hover:bg-green-100'>
            Careers
          </h1>
        </div>
      )}
    </div>
  );
};

export default Navbar;
