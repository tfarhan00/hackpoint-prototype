import React from 'react'
import { motion } from 'framer-motion'

export default function GlassCard({readFocus}) {

  return (
    <motion.div
      drag
      dragConstraints={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
      className="cursor-grab active:cursor-grabbing"
    >
    <div className='glass relative w-[22rem] min-h-[26rem] sm:w-[25rem] sm:min-h-[29rem] flex flex-col items-start justify-between gap-4 p-8 rounded-sm'>
        <div className='flex flex-col gap-3'>
          <h1 className='font-base text-white text-xl '>The Hackpoint Network</h1>
          <p className='w-64 border-b-[1px] border-gray-200'></p>
          <h1 className='font-bold text-white text-2xl'>A Developer platform for everyone.</h1>
          <p className='font-base text-white text-sm'>1 Million+ devs around the world have been joined already. We invite you to join the cult.</p>
        </div>
        <div className='flex flex-col items-start gap-1'>
          <p className='font-base text-white text-base'>Ready To Get Onboard ?</p>
          <button onClick={readFocus} className='hover:scale-105 font-medium text-white text-xl transition-all duration-300'>Start Explore <i className="bi bi-arrow-right"></i></button>
        </div>
    </div>
    </motion.div>
  )
}
