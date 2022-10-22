import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import PriceCard from '../components/Pricing/PriceCard'
import TableHistory from '../components/Pricing/TableHistory'

export default function Pricing() {
  return (
    <AnimatePresence mode='wait'>
      <motion.div
        className='w-[100%]'
        key="pricingPage"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
      <main className='w-full flex flex-col items-center py-16'>
      <div className='w-[90%] flex'>
        <div className='flex flex-col'>
        <h1 className='font-[600] text-2xl'>Price & Billing</h1>
        <p className='text-gray-600'>Manage your plan and billing details.</p>
        </div>
      </div>
      <div className='relative overflow-x-auto bg-white w-[90%] h-[25rem] flex gap-8 items-center justify-center text-center scrollbar-hide'>
        <PriceCard
          packageName='basic'
          price='25'
          desc='Basic features for up to 1 users with limited courses access and our features'
          buttonText='Current Plan'
          bgColor='bg-purple-100'
          />
        <PriceCard
          packageName='growth'
          price='40'
          desc='Upgraded plan for up to 5 users with unlimited courses access and our features'
          buttonText='Current Plan'
          bgColor='bg-blue-100'
          popular={true}
          />
        <PriceCard
          packageName='scale'
          price='80'
          desc='Scale up your team knowledge with features for up to 15 users with unlimited access and get special perks'
          buttonText='Current Plan'
          bgColor='bg-orange-100'
          />
        <PriceCard
          packageName='business'
          price='135'
          desc='Mainly for corporate small team, so no need to tell the boss how you can be much better'
          buttonText='Current Plan'
          bgColor='bg-red-100'
        />
      </div>
      <TableHistory />
      </main>
      </motion.div>
    </AnimatePresence>
  )
}
