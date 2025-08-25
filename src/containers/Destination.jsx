import React, {useState} from 'react'
import {motion} from 'framer-motion'

import data from '../assets/data.json'
import { MoonImage, MarsImage, EuropaImage, TitanImage} from '../images/images'
import MotionWrapper from './MotionWrapper'

const Destination = () => {
  const [index, setIndex] = useState(0)
  const [planetImg, setPlanetImg] = useState(MoonImage)

  const { destinations } = data
 

  const handleClick = (planet, id) => {
    if (planet.name === 'Moon') {
      setIndex(0)
      setPlanetImg(MoonImage)
    } else if (planet.name === 'Mars') {
      setPlanetImg(MarsImage)
      setIndex(1) 
    } else if (planet.name === 'Europa') {
      setIndex(2)
      setPlanetImg(EuropaImage)
    } else {
      setIndex(3)
      setPlanetImg(TitanImage)
    }
  }
  return ( 
    <MotionWrapper className='text-white'>
      <div className='uppercase font-paragraph tracking-[3.375px] text-center md:text-left md:ml-7 xl:ml-44 mb-6'>
        <span className='font-paragraph text-white/25 font-bold mr-2'>01</span>pick your destination
      </div>
      <div className='flex flex-col items-center xl:flex-row xl:w-[80%] xl:mx-auto xl:my-0 xl:justify-between'>
        <motion.img whileTap={{ rotate: [0, 360]}} whileHover={{ rotate: [null, 0, 180]}} whileInView={{ rotate: [0, 360], scale: [0, 0.5, 1]}} transition={{ duration: 1, delay: 0.2}} src={planetImg} className='w-40 h-40 sm:w-52 sm:h-52 xl:w-72 xl:h-72 xl:ml-20' alt='planet' />
        <div className='flex flex-col w-[90%] xl:w-2/5'>
          <div className='flex justify-between w-4/5 mx-auto my-0 uppercase mt-5 font-paragraph sm:w-3/6  xl:w-3/5 xl:mx-0'>
            {destinations.map((planet, i) => {
            return (
               <div className={`${i === index ? 'border-b-2' : 'border-invisible'} 
               cursor-pointer hover:border-white/50 hover:border-b-2`} key={i} 
               onClick={() => handleClick(planet, i)}>{planet.name}
               </div>
              )
            })}
          </div>
          <div className='font-Heading text-6xl text-center mt-8 uppercase xl:text-left xl:text-8xl'>{destinations[index].name}</div>
          <motion.div layout transition={{ duration: 1}} className='text-center text-color-2 xl:w-[100%] xl:text-left xl:text-lg'>{destinations[index].description}</motion.div>
          <div className='bg-[#383B4B] h-[1px] w-[100%] my-7' />
          <div className='xl:flex xl:flex-row justify-between'>
            <div>
              <div className='text-color-2 font-paragraph text-sm uppercase tracking-[.2em] text-center'>avg. distance</div>
              <div className='font-Heading text-[28px] mt-2 uppercase text-center'>{destinations[index].distance}</div>
            </div>
            <div>
              <div className='text-color-2 font-paragraph text-sm uppercase tracking-[.2em] text-center'>est. time travel</div>
              <div className='font-Heading text-[28px] mt-2 uppercase text-center'>{destinations[index].travel}</div>
            </div>
          </div>
        </div>
      </div>
        
    </MotionWrapper>
  )
}

export default Destination