import React from 'react'
import AllCourses from '../components/courses/AllCourses'
import Categories from '../components/courses/Categories'
import study from '../assets/studyart.png'
import coffeeart from '../assets/coffeeart.png'
import cover from '../assets/bubble.jpg'
import { AnimatePresence, motion } from 'framer-motion'

export default function Courses() {
  return (
    <React.Fragment>
      <AnimatePresence mode='wait'>
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
        <main className='w-[100%] flex flex-col items-center gap-4'>
          <div className='relative bg-white w-[100%] h-[25rem] flex flex-col justify-center items-center py-16 px-8 text-center'>
            <h1 className='font-[500] text-5xl'>Welcome to the courses</h1>
            <p className='mt-2 w-[50%] text-gray-500 text-sm'>Choose some of our best courses available and get discount up to 85% with our special student promo, also don't forget to claim your first learner ticket here!</p>
            <button className='mt-4 bg-gray-900 text-white px-4 py-2 text-sm rounded-sm flex items-center gap-2'><i class="bi bi-tags-fill"></i><p>Take 60% Discount Ticket</p></button>
            {/* <img src={study} alt='pict' className='absolute -left-32 md:left-2 lg:left-8 bottom-8 w-[300px] h-[300px] object-contain' />
            <img src={coffeeart} alt='pict' className='absolute -right-32 md:right-2 lg:right-8 bottom-8 w-[300px] h-[300px] object-contain' /> */}
          </div>
          <div className='w-[100%] px-8 mb-8 mt-4'>
            <Categories />
            <AllCourses />
          </div>
        </main>
        </motion.div>
      </AnimatePresence>
    </React.Fragment>
  )
}
