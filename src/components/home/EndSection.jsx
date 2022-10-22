import React from 'react'
import { Avatar, AvatarGroup } from '@chakra-ui/react'
import person from '../../assets/styling/person.png'
import abstract from '../../assets/styling/perspective.png'
import { AnimatePresence, motion } from 'framer-motion'
import CarouselReview from './CarouselReview'

export default function EndSection() {
  return (
    <AnimatePresence>

 
    <section className='w-[100%] h-auto py-8 relative flex flex-col items-center text-center justify-center'>
          
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[90%] gap-[0.15rem] p-[0.15rem] bg-[#1a1a1a] mt-4 rounded-md'>
      
        <motion.div className='bg-white relative rounded-xl h-[28rem] overflow-hidden w-full col-span-1 md:col-span-2 lg:col-span-3 flex flex-col md:flex-row justify-between items-center p-8'>
            <div className='flex flex-col text-start items-start text-7xl font-[500] p-8'>
              <motion.h1>Hackpoint.</motion.h1>
              <motion.h1>For.</motion.h1>
              <motion.h1>Enterprise.</motion.h1>
              <div className='flex items-center gap-4 mt-8'>
                <button className='px-5 py-3 bg-[#1a1a1a] text-base text-white rounded-full'>Make Reservation</button>
                <button className='h-12 w-12 flex items-center justify-center text-sm  border-2 border-[#1a1a1a] rounded-full'><i class="bi bi-envelope-fill"></i></button>
              </div>
            </div>
            <img src={person} alt='pict' className='absolute w-[42rem] -bottom-32 -right-16 h-[42rem] object-contain'/>
        </motion.div>

        <div className='relative bg-gray-100 rounded-xl h-[19rem] flex overflow-hidden w-full'>
          <CarouselReview />
        </div>
        
        <motion.div className='bg-white rounded-xl h-[19rem] overflow-hidden w-full p-8'>
            <div className='flex items-start text-start text-2xl text-gray-700 flex-col h-full justify-between'>
              <div className='flex items-start text-start text-2xl text-gray-700 flex-col gap-2 justify-between'>
                <p className='w-[100%] font-[600] text-[#1a1a1a]'>The most experienced platform ever, they really nailed their work</p>
                <p className='w-[100%] font-[400] text-base text-gray-500'>Work with us</p>
              </div>
              <div className='flex items-center'>
                <AvatarGroup max={3} size='md'>
                  <Avatar name='Hello There' src='https://images.pexels.com/photos/3777557/pexels-photo-3777557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
                  <Avatar name='nice zer' src='https://images.pexels.com/photos/3460134/pexels-photo-3460134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
                  <Avatar name='for real' src='https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
                  <Avatar name='someone nice' />
                  <Avatar name='someone nice' />
                </AvatarGroup>
                <p className='ml-4 font-bold text-sm'>Meet Our Advisor</p>
              </div>
            </div>
        </motion.div>
        
        <motion.div className='bg-white rounded-xl relative h-[19rem] overflow-hidden w-full flex items-center justify-center'>
            <motion.img
            initial={{ scale: 1.4 }}
            whileHover={{ scale: [1.4, 1]}}
            translate={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 1, repeat: 4, repeatType: "loop" }}
            src={abstract} alt='pict' className='absolute w-full h-full object-cover'/>
            <h1 className='z-auto font-bold text-4xl'>MINDMAP</h1>
        </motion.div>
        
      
      </div>
  </section>
  </AnimatePresence>
  )
}
