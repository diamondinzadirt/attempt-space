import React, {useState} from 'react'
import { nanoid } from 'nanoid'
import { NavLink, useLocation } from 'react-router-dom'
import {motion} from 'framer-motion'

import {IconClose, IconHamburger, Logo } from '../assets/shared'


const Navbar = () => {
   const [toggle, setToggle] = useState(false)
   const { pathname } = useLocation()
   
    const navbar = `
    w-[70%] absolute top-0 bg-custom-blur backdrop-filter backdrop-blur-[86px] right-0 h-full  flex-col  ${toggle ? 'flex' : 'hidden'}
    sm:w-[50%] sm:h-20 sm:flex sm:flex-row 
    lg:pl-10 lg:mt-5 
   `


  return (
    <div className='flex justify-between w-[90%] mx-auto my-0 mt-8 lg:items-center z-[1]' >
      <NavLink to='/'><img src={Logo} className='w-10 h-10 -mt-3 lg:mt-3' alt='logo' ></img></NavLink>
      <div className='hidden xl:block xl:w-[473px] xl:bg-white/25 xl:mix-blend-normal xl:h-[1px] xl:z-[1] xl:left-44 xl:absolute md:mt-3'></div>
      <img src={IconHamburger} className=' w-6 h-[1.3125rem] sm:hidden' alt='menu-icon' onClick={() => setToggle(prev => !prev)} />
      <motion.div whileInView={{ opacity: [0, 1]}} transition={{ duration: 0.5}}  className={navbar} >
          <img src={IconClose} className='w-5 h-5 mt-5 mr-5 self-end sm:hidden' alt='close-icon' onClick={() => setToggle(prev => !prev)}/>
          <div className='flex flex-col ml-8 mt-14 sm:flex-row sm:justify-evenly sm:items-center sm:m-0 sm:mx-auto sm:w-full' >
          {['home', 'destination', 'crew', 'technology'].map((link, i) => {
            return (
              <div key={nanoid()} id={nanoid()} className='relative mt-5 tracking-wider' onClick={() => toggle && setToggle(false)} >
              <NavLink to={link === 'home' ? '/' : link} 
              className='text-color-3 font-paragraph font-normal  sm:text-sm leading-10 uppercase mb-2 flex'>     
              <span className='font-extrabold mr-2 sm:hidden lg:block'></span>{link}
              </NavLink>
              <div className={` ${pathname === `/${link === 'home' ? '' : link}` ? 'block' : 'hidden'} sm:bg-white sm:h-[2px] sm:w-full sm:absolute sm:top-[40px] `}></div>
              </div>
          )})}
          </div>
      </motion.div>
    </div>
  )
}

export default Navbar