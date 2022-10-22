import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function Intermezzo() {
  return (
    <AnimatePresence mode='wait'>
    <main className='md:w-[70%] w-[80%] flex flex-col items-start justify-start gap-4'>
        <div className='text-3xl md:text-4xl lg:text-5xl font-[500] w-[100%] lg:w-[70%] flex overflow-hidden'>
          <motion.div animate={{ y: ["100%", "0%"]}} transition={{ delay: 0.4, duration: 1, ease: [0.075, 0.82, 0.300, 1] }}>
            Meet our team of <motion.span className='font-normal italic'>creators</motion.span>, <motion.span className='font-normal italic'>designers</motion.span>, and enthusiast <motion.span className='font-normal italic'>problem solver</motion.span>
          </motion.div>
        </div>
        <div className='text-lg w-full lg:w-[70%] text-gray-600 overflow-hidden'>
          <motion.div animate={{ y: ["-100%", "0%"]}} transition={{ delay: 0.4, duration: 1, ease: [0.075, 0.82, 0.300, 1] }}>
            In order to get around with world of solution we need a bunch of critical thinking behaviour so that we can start changing the enviroment
          </motion.div>
        </div>
    </main>
    </AnimatePresence>
  )
}
