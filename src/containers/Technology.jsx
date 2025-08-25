import React, {useState} from 'react'
import { motion } from 'framer-motion'

import MotionWrapper from './MotionWrapper'
import { 
  SpaceCapsuleImageLandscape, SpaceCapsuleImagePortrait, SpacePortImageLandscape, SpacePortImagePortrait,LaunchVehicleImagePortrait, LaunchVehicleImageLandscape
} from '../images/images'
import data from '../assets/data.json'

const Technology = () => {
  const [index, setIndex] = useState(0)
  const [bigScreenWidth, setBigScreenWidth] = useState(0)
  const images = [[LaunchVehicleImageLandscape, LaunchVehicleImagePortrait], 
  [SpaceCapsuleImageLandscape, SpaceCapsuleImagePortrait], 
  [SpacePortImageLandscape, SpacePortImagePortrait]]

  const { technology } = data

  const handleClick = (id) => {
    if (id === 0) {
      setIndex(0)
     if (window.innerWidth > 1024) {
      setBigScreenWidth(1)
     }
    } else if (id === 1) {
      setIndex(1)
      if (window.innerWidth > 768) {
        setBigScreenWidth(1)
       }
    } else if (id === 2) {
      setIndex(2)
      if (window.innerWidth > 768) {
        setBigScreenWidth(1)
       }
    } else {
      setIndex(3)
      if (window.innerWidth > 768) {
        setBigScreenWidth(1)
       }
    }
  }

  return (
    <MotionWrapper className='text-white'>
      <div className='uppercase font-paragraph sm:text-xl text-center tracking-[.2109rem] sm:text-left xl:ml-44 mb-6'>
      <span className='font-paragraph text-white/25 font-bold mr-2 uppercase'>03</span>space launch 101
      </div>
      <div className='xl:flex xl:flex-row-reverse items-center'>
      <motion.img className=' h-[10.625rem] w-full sm:h-[20rem] xl:h-[23.125rem] xl:w-[21.875rem] xl:bg-contain xl:bg-center' src={images[index][bigScreenWidth]} alt='technology image' />
      <div className='xl:flex xl:flex-row xl:h-full xl:ml-44 xl:mt-7'>
      <div className='flex justify-between text-center mt-10 w-3/6 mx-auto xl:w-2/5 xl:flex-col xl:my-0 xl:justify-between'>
        {
          technology.map((tech, i) => {
            return (
              <motion.div key={i} whileInView={{ opacity: [0, 1]}} transition={{ duration: 1.5}} onClick={() => handleClick(i)} className={` ${i === index ? 'bg-white text-[#0B0D17] border-0' : 'bg-transparent border-solid'} xl:hover:bg-white/50 xl:hover:text-[#0B0D17] rounded-[50%] h-10 w-10 font-Heading text-lg sm:text-2xl border-[1px] sm:w-16 sm:h-16 cursor-pointer`}>
                <div className='mt-1 sm:mt-[14px]'>{i + 1}</div>
              </motion.div>
            )
          })
        }
      </div>
      <div className='md:mt-10'>
      <div className='uppercase text-color-2 mix-blend-normal text-center font-paragraph tracking-[.1477rem] mt-8 sm:text-2xl xl:text-xl xl:-mt-2 xl:text-left'>
        The Terminology...
      </div>
      <div className='font-Heading text-2xl text-center mb-4 mt-2 uppercase sm:text-3xl xl:text-left xl:text-5xl'>{technology[index].name}</div>
      <div className='text-center font-paragraph w-[87%] text-color-2 sm:w-[80%] mx-auto leading-9 text-lg my-0 sm:mt-3 sm:text-left sm:mb-5 xl:w-[70%] xl:mx-0  xl:text-base'>{technology[index].description}</div>
     </div>
     </div>
     </div>
    </MotionWrapper>
  )
}

export default Technology