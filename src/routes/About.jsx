import React from 'react'
import MyCard from '../components/about/MyCard'
import { AnimatePresence, motion } from 'framer-motion'
import Intermezzo from '../components/about/Intermezzo'

export default function About() {

  const cardContain = {
    animate: {
      transition: {
          delayChildren: 0.4,
          staggerChildren: 0.7,
      },
  },
  }

  return (
    <AnimatePresence mode="wait">
        <motion.div
          layout
          key="aboutPage"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
        <main className="w-[100%] bg-white flex flex-col gap-8 justify-start items-center text-2xl py-16 px-8">
          
          <Intermezzo />

          <motion.div variants={cardContain} id='card-container' className='w-[80%] md:w-[70%] overflow-hidden grid justify-items-center lg:grid-cols-3 sm:grid-cols-2 md:grid-cols-2 gap-4'>
            <MyCard photo="https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" name="Sarah Verneer" education='Chief Engineering Officer'
             
            />  
            <MyCard photo="https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" name="Lana McBert" education='Chief Technology Officer'
             
            />  
            <MyCard photo="https://images.pexels.com/photos/1181391/pexels-photo-1181391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" name="Mike Dipp" education='Head Of Advisor'
             
            />  
            <MyCard photo="https://images.pexels.com/photos/3777564/pexels-photo-3777564.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" name="Brad Lambert" education='Marketing Senior'
             
            />  
            <MyCard photo="https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" name="Steve Wazerk" education='Product Manager'
              
            />
          </motion.div>
        </main>
      </motion.div>
    </AnimatePresence>
  )
}
