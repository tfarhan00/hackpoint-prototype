import React from 'react'

export default function BillingCard() {
  return (
    <div className='w-full flex justify-between items-center bg-white border-[1px] border-gray-200 rounded-md p-4'>
        <div className='flex flex-col items-start'>
            <p className='font-[500]'>Basic Plan - USD $10.50</p>
            <p className='text-sm'>Dec 1, 2022</p>
        </div>
        <div className='flex items-center gap-4'>
            <button className='border-[1px] border-[#1a1a1a] px-2 py-1 rounded-md gap-4 flex items-center text-sm font-[500]'>
                <img className='w-6 h-6 object-contain' src='https://download.logo.wine/logo/Mastercard/Mastercard-Logo.wine.png' alt='pict' />
            </button>
            <p className='text-sm font-[500]'>Card 1232 ****</p>
            <button className='border-[1px] border-[#1a1a1a] px-4 py-2 rounded-md gap-4 flex items-center text-sm font-[500]'><i class="bi bi-cloud-download"></i>Download</button>
        </div>
    </div>
  )
}
