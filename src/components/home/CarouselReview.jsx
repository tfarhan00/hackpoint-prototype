import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import netflix from '../../assets/company/netflix.svg'
import amazon from '../../assets/company/amazon.svg'
import walmart from '../../assets/company/walmart.svg'
import { useDraggable } from 'react-use-draggable-scroll'

export default function CarouselReview() {

    const scrollableDiv = useRef()
    const { events } = useDraggable(scrollableDiv)

  return (
      <div ref={scrollableDiv} {...events} className='bg-[#1a1a1a] cursor-hand snap-proximity w-full h-full flex overflow-x-auto scrollbar-hide'>
            <motion.div className='snap-center shrink-0 relative bg-red-100 rounded-xl h-[19rem] overflow-hidden w-full p-8'>
            <div className='flex items-start text-start text-2xl text-gray-700 flex-col h-full justify-between'>
              <p className='w-[70%]'>They are very proactive and work to make your employee better</p>
              <img src={netflix} alt='pict' className='w-20 opacity-90 object-contain' />
            </div>
              <i className="bi bi-quote absolute text-4xl rotate-180 top-8 right-8"></i>
            </motion.div>

            <motion.div className='snap-center shrink-0 relative bg-orange-100 rounded-xl h-[19rem] w-full overflow-hidden w-full p-8'>
            <div className='flex items-start text-start text-2xl text-gray-700 flex-col h-full justify-between'>
              <p className='w-[70%]'>They are very proactive and work to make your employee better</p>
              <img src={amazon} alt='pict' className='w-20 opacity-90 object-contain' />
            </div>
              <i className="bi bi-quote absolute text-4xl rotate-180 top-8 right-8"></i>
            </motion.div>

            <motion.div className='snap-center shrink-0 relative bg-blue-100 rounded-xl h-[19rem] w-full overflow-hidden w-full p-8'>
            <div className='flex items-start text-start text-2xl text-gray-700 flex-col h-full justify-between'>
              <p className='w-[70%]'>They are very proactive and work to make your employee better</p>
              <img src={walmart} alt='pict' className='w-20 opacity-90 object-contain' />
            </div>
              <i className="bi bi-quote absolute text-4xl rotate-180 top-8 right-8"></i>
            </motion.div>
        </div>
  )
}
