import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { NavLink } from 'react-router';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className='px-10 py-4 border-b-2 border-gray-300'>
    <div className='flex items-center justify-between '>
      <div className='flex items-center gap-1'>
        <img src={logo} alt="Logo"  className='w-12'/>
        <h1 className='text-2xl font-bold'>MoviePilot</h1>
      </div>

      {/* desktop view */}

      <div className='hidden md:flex gap-5'>
        <NavLink to={"/"} className={({isActive})=>isActive ? 'text-yellow-500' : 'text-white'}>Home</NavLink>
        <NavLink to={"/favourites"} className={({isActive})=>isActive ? 'text-yellow-500' : 'text-white'}>Favourites</NavLink>
      </div>

      <button className='md:hidden' onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <RxCross2 /> : <AiOutlineMenu />}
        </button>
    </div>

    {/* mobile phone view */}
    <div>
        {isMenuOpen && (
            <div className='flex flex-col items-center justify-center gap-5 mt-5 md:hidden'>
                <NavLink to={"/"} className={({isActive})=>isActive ? 'text-yellow-500' : 'text-white'}>Home</NavLink>
                <NavLink to={"/favourites"} className={({isActive})=>isActive ? 'text-yellow-500' : 'text-white'}>Favourites</NavLink>
            </div>
        )}
    </div>
    </nav>
  )
}

export default Navbar
