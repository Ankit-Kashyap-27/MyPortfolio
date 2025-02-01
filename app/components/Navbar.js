import React from 'react'
import Image from 'next/image'
const Navbar = () => {

  const a = ["Home", "About", "Education", "Skill"]
  return (
    <nav className='flex justify-center'>
      <div className=' bg-slate-500 flex  justify-between w-[85vw] m-5 rounded-full fixed  '>
        <div className='flex items-center pl-10'>
          <Image width={80} height={80} src="/logo.png" alt="logo" />
          <span className=''>PORTFOLIO</span>
        </div>

        <div className="flex  gap-7 items-center pr-12">
          {a.map((items, index) => {
            return <div key={index} className="">
              <li className='list-none hover:text-black'>{items}</li>
            </div>
          })}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
