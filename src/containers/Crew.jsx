import React, { useState } from 'react'

import data from '../assets/data.json'
import { Member1Image, Member2Image, Member3Image, Member4Image } from '../images/images'
import MotionWrapper from './MotionWrapper'

const Crew = () => {
  const [index, setIndex] = useState(0)
  const { crew } = data
  const Images = [Member1Image, Member2Image, Member3Image, Member4Image]

  // direct index setter (no branching)
  const handleClick = (i) => setIndex(i)

  return (
    <MotionWrapper className="text-white">
      <div className="uppercase font-paragraph sm:text-xl text-center tracking-[.2109rem] sm:text-left md:ml-7 xl:ml-44 mb-6">
        <span className="font-paragraph text-white/25 font-bold mr-2">02</span>
        meet your crew
      </div>

      <div className="flex flex-col items-center sm:flex-col-reverse xl:flex-row-reverse xl:w-[80%] xl:mx-auto xl:my-0 xl:justify-between">
        <img
          src={Images[index]}
          className="w-[14.125rem] h-[13.9375rem] sm:w-[18.75rem] sm:h-[21.875rem] xl:w-[25rem] xl:h-[28.125rem] xl:ml-20"
          alt={`${crew[index].name} portrait`}
        />

        {/* divider — light brown tint */}
        <div className="bg-[#d2b48c]/25 h-[.0625rem] w-[90%] my-7 -mt-px sm:hidden" />

        <div className="flex flex-col xl:ml-12">
          {/* dots */}
          <div className="flex justify-between w-[25%] mx-auto my-0 uppercase mt-3 font-paragraph sm:order-3 sm:w-[10%] sm:mb-5 xl:w-[20%] xl:mx-0">
            {crew.map((member, i) => (
              <button
                key={member.name ?? i}
                type="button"
                aria-label={`Show ${member.name}`}
                aria-pressed={i === index}
                onClick={() => handleClick(i)}
                className={`w-[.625rem] h-[.625rem] rounded-full mix-blend-normal cursor-pointer transition-opacity
                  ${i === index ? 'bg-[#d2b48c]' : 'bg-[#d2b48c]/30 hover:bg-[#d2b48c]/60'}`}
              />
            ))}
          </div>

          {/* role — light brown */}
          <div className="uppercase text-center font-Heading mt-8 sm:text-2xl xl:-mt-2 xl:text-left text-[#d2b48c]/60">
            {crew[index].role}
          </div>

          {/* name */}
          <div className="font-Heading text-2xl text-center mt-2 uppercase sm:text-3xl xl:text-left xl:text-5xl">
            {crew[index].name}
          </div>

          {/* bio */}
          <div className="text-center text-lg font-paragraph w-[87%] text-white/80 sm:w:[80%] mx-auto my-0 leading-6 mt-3 sm:text-left sm:mb-5 xl:w-[65%] xl:mx-0 xl:text-lg">
            {crew[index].bio}
          </div>
        </div>
      </div>
    </MotionWrapper>
  )
}

export default Crew
