import React from 'react'
import { motion } from 'framer-motion'

const MotionWrapper = ({children, className}) => {
  return (
    <motion.div layout
      whileInView={{
        x: [-100, 0],
        opacity: [0, 1]
      }}
      transition= {{
        duration: 0.7
      }} 
      className={className}
      >
        {children}
    </motion.div>
  )
}

export default MotionWrapper