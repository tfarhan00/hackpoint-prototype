import React from 'react'
import BillingCard from './BillingCard'

export default function TableHistory() {
  return (
    <div className='w-[90%] flex flex-col gap-4'>
      <div className='w-full flex items-center justify-between font-[500] text-lg'>
        <p>Billing & Payment History</p>
        <button className='border-[1px] text-white bg-[#1a1a1a] px-4 py-2 rounded-md gap-4 flex items-center text-sm font-[500]'><i class="bi bi-cloud-download"></i>Download all</button>
      </div>
      <BillingCard />
      <BillingCard />
      <BillingCard />
      <BillingCard />
      <BillingCard />
      <BillingCard />
    </div>
  )
}
