import React from 'react'
import { CiGlobe } from "react-icons/ci";
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <div className='flex md:ml-5 gap-1 '>
            <img className='w-10 rounded-full cursor-pointer'
              alt="Tailwind CSS Navbar component"
              src="images/Rexbylogo.png" />
            <p className=" text-4xl font-medium text-[#1b83a6] cursor-pointer">Rexby</p>
          </div>
        </div>
        <button className="px-6 py-1 cursor-pointer border mr-4 border-gray-200 rounded-lg text-gray-800 font-medium">
              Login
            </button>
        <div className="flex-none cursor-pointer mr-2">
          <CiGlobe size={26} />
        </div>
        
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="m-2 md:mt-3 cursor-pointer"><IoMdMenu size={26}/></div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
              <li><a>Item 1</a></li>
              <li><a>Item 2</a></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar