import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function MyCard({name, education, photo, work, experience}) {

  const [trigger, setTrigger] = useState(false)

  let variants = {
    default: {
      y: "100%"
    },
    inClick: {
      y: "0%"
    }
  }

  const tapToReveal = () => {
    setTrigger(!trigger)
  }
    return (
      <motion.div transition={{  ease: [0.6, 0.01, -0.05, 0.95], duration: 2, }} onClick={tapToReveal} className='cursor-pointer w-full overflow-hidden mb-4 rounded-md gap-4 flex flex-col items-start text-start justify-start text-base transition-all duration-500'>
       <div className='relative w-full h-[14rem] flex items-start justify-center overflow-hidden'>
        <img src={photo} alt={name} className='w-[100%] h-[100%] rounded-md object-cover ease-in-out transition-all duration-500' />
       <motion.div
       layout
       initial={{ y: "100%" }}
       animate={trigger ? "inClick" : "default"}
       variants={variants}
       transition={{ duration: 1, ease: [0.075, 0.82, 0.300, 1] }}
       className='z-1 uppercase absolute top-0 left-0 w-full h-full bg-white flex flex-col items-start text-start gap-4 p-8'>
          <motion.p className='font-medium'>Work experience</motion.p>
          <motion.p className='text-sm text-gray-500'>{experience}</motion.p>
       </motion.div>
       </div>
       <div className='border-t-[1px] border-black pt-4 flex flex-col items-start gap-1 justify-between w-full font-bold text-sm'>
        <p className='grow text-start text-base font-[500]'>{name}</p>
        <p className='text-start font-[400] text-sm text-gray-400 w-[90%]'>{education}</p>
       </div>
      </motion.div>
    )
  }
  
