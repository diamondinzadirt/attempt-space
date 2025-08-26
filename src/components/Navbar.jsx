import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { IconClose, IconHamburger, Logo } from '../assets/shared'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const { pathname } = useLocation()

  const navbar = `
    w-[70%] absolute top-0 bg-custom-blur backdrop-filter backdrop-blur-[86px] right-0 h-full flex-col ${toggle ? 'flex' : 'hidden'}
    sm:w-[50%] sm:h-20 sm:flex sm:flex-row
    lg:pl-10 lg:mt-5
  `

  return (
    <div className="flex justify-between w-[90%] mx-auto my-0 mt-8 lg:items-center z-[1]">
      <NavLink to="/">
        <img src={Logo} className="w-10 h-10 -mt-3 lg:mt-3" alt="logo" />
      </NavLink>

      {/* divider tinted light brown */}
      <div className="hidden xl:block xl:w-[473px] xl:bg-[#d2b48c]/25 xl:mix-blend-normal xl:h-[1px] xl:z-[1] xl:left-44 xl:absolute md:mt-3" />

      {/* hamburger */}
      <img
        src={IconHamburger}
        className="w-6 h-[1.3125rem] sm:hidden"
        alt="menu icon"
        role="button"
        tabIndex={0}
        aria-label="Open menu"
        onClick={() => setToggle((prev) => !prev)}
        onKeyDown={(e) => e.key === 'Enter' && setToggle((p) => !p)}
      />

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className={navbar}
      >
        {/* close */}
        <img
          src={IconClose}
          className="w-5 h-5 mt-5 mr-5 self-end sm:hidden"
          alt="close icon"
          role="button"
          tabIndex={0}
          aria-label="Close menu"
          onClick={() => setToggle((prev) => !prev)}
          onKeyDown={(e) => e.key === 'Enter' && setToggle((p) => !p)}
        />

        <div className="flex flex-col ml-8 mt-14 sm:flex-row sm:justify-evenly sm:items-center sm:m-0 sm:mx-auto sm:w-full">
          {['home', 'destination', 'crew', 'technology'].map((link) => (
            <div
              key={link}
              className="relative mt-5 tracking-wider"
              onClick={() => toggle && setToggle(false)}
            >
              <NavLink
                to={link === 'home' ? '/' : link}
                className="font-paragraph font-normal sm:text-sm leading-10 uppercase mb-2 flex text-[#d2b48c]"
              >
                {/* kept the index badge empty as in your snippet */}
                <span className="font-extrabold mr-2 sm:hidden lg:block"></span>
                {link}
              </NavLink>

              {/* active underline in light brown */}
              <div
                className={`${
                  pathname === `/${link === 'home' ? '' : link}` ? 'block' : 'hidden'
                } sm:bg-[#d2b48c] sm:h-[2px] sm:w-full sm:absolute sm:top-[40px]`}
              />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default Navbar
