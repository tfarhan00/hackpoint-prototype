import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import HomeCard from '../components/home/HomeCard'

export default function Home() {
  return (
    <React.Fragment>
      <AnimatePresence mode="wait">
        <motion.div
          key="homePage"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <HomeCard />
        </motion.div>
      </AnimatePresence>
    </React.Fragment>
  )
}
