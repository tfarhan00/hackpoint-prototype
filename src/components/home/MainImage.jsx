import React from 'react'
import { motion } from 'framer-motion'
import { useRef, useState } from 'react'
import { useEffect } from 'react'
import RoundText from './RoundText'


export default function MainImage({scale, rotateCircle}) {



  return (
    <div className='relative min-h-[35rem] w-[90%]'>

    <motion.div
    initial={{ height: "20rem", width: "30rem" }}
    layoutId='main-image-1'
    animate={{ width: "100%", height: "32rem"}} 
    transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1.6 }}
    className='relative overflow-hidden w-full h-full rounded-md'>
        <motion.img
          initial={{ scale: 1 }}
          style={{ scale: scale }}
          className='w-full h-full object-cover rounded-md -z-1'
          transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1.6 }}
          src='https://images.pexels.com/photos/5473298/pexels-photo-5473298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'                       
          />
    </motion.div> 


    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }} 
      transition={{ delay: 2, ease: [0.6, 0.01, -0.05, 0.9], duration: 1.6 }}
      className='absolute z-auto -top-12 left-16 w-28 h-28 rounded-full bg-black text-white flex flex-col items-center justify-center'>
          <div className='relative w-full h-full rounded-full flex items-center justify-center'>
            <motion.div style={{ transform: `rotate(${rotateCircle}deg)`}} className='circle-text absolute w-full h-full flex items-center justify-center'>
                <RoundText text='scroll&nbsp;down &bull; scroll&nbsp;down &bull; scroll&nbsp;down &bull;' />
            </motion.div>
          <i className="font-[500] absolute text-xl bi bi-arrow-down"></i>
          </div>
    </motion.div>
    </div>
  )
}
