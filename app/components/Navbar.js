import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  const a = ["Home", "About", "Education", "Skill"];

  return (
    <nav className='flex justify-center'>
      <div className='bg-white shadow-lg flex justify-between w-[85vw] m-5 rounded-full top-0 fixed z-50'>
        <div className='flex items-center pl-2 md:pl-10'>
          <img src="/logo.png" alt="logo" className='md:w-[6vw] w-[18vw]' />
          <span className='ml-2 text-sm md:text-xl font-semibold'>PORTFOLIO</span>
        </div>

        <div className="hidden md:flex  gap-7 items-center pr-12">
          {a.map((items, index) => (
            <li key={index} className='list-none hover:text-black'>{items}</li>
          ))}
        </div>

        {/* <div className="flex md:hidden items-center pr-4">
          <button className="text-black">Menu</button>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
