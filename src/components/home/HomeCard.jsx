import React from 'react'
import { AnimatePresence, LayoutGroup, motion, useScroll, useTransform } from 'framer-motion'
import Loader from './Loader'
import { useState } from 'react'
import NavbarCopy from '../NavbarCopy'
import Hero from './Hero'
import AfterSection from './AfterSection'
import MainImage from './MainImage'
import FooterCopy from '../FooterCopy'



export default function HomeCard() {

  const [loading, setLoading] = useState(true)

  const {scrollYProgress} = useScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.55])
  const rotateCircle = useTransform(scrollYProgress, [0, 1], [0, 1])

  console.log(scale)

  return (
      <LayoutGroup type='crossfade'>
        <AnimatePresence mode='wait'>
        {loading ? (
          <motion.div key='loaderId'>
            <Loader setLoading={setLoading}/>
          </motion.div>
        ) : (
          <div className='w-full flex flex-col items-center'>
          <NavbarCopy />
          <Hero />
          <div className='relative min-h-[30rem] py-4 w-[100%] flex flex-col items-center'>          
            {!loading && (

              <MainImage scale={scale} rotateCircle={rotateCircle}/>
            
              )}
          </div>
              <AfterSection />
              <FooterCopy />
          </div>
        )}
        </AnimatePresence>
      </LayoutGroup>
  )
}
