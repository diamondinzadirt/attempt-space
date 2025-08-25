import React from 'react'
import { NavLink } from 'react-router-dom'

import { BackgroundHomeDesktop, BackgroundHomeMobile, BackgroundHomeTablet } from '../assets/home'
import MotionWrapper from './MotionWrapper'

const Home = () => {
  return (
    <MotionWrapper className='flex flex-col mt-2 lg:mt-10 xl:mt-20 items-center xl:flex-row'>
      <div className='flex flex-col text-center xl:text-left mx-auto my-0 xl:w-2/6 xl:ml-48 '>
          <h5 className='font-paragraph uppercase tracking-widest text-color-2 text-[1.75rem]'>so, you want to travel to</h5>
          <div className='uppercase font-Heading tracking-widest text-[5rem] mt-3 text-color-3 xl:text-[6.5rem]'>space</div>
          <div className='mt-2.5 text-[0.94rem] text-color-2 leading-7 w-[87%] mx-auto my-0 text-center xl:text-left xl:mx-0 '>
            Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind 
            of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
          </div>
      </div>
      <NavLink to='destination'>
      <div className='text-color-1 bg-white text-center flex justify-center items-center rounded-[50%]
                        w-[11rem] h-[11rem] uppercase text-xl mt-20 xl:mr-60 xl:hover:outline xl:hover:outline-[60px]
                         xl:hover:outline-white/10 xl:hover:transition-all xl:hover:duration-1000'>
        <span>explore</span>
      </div>
      </NavLink>
    </MotionWrapper>
  )
}

export default Home