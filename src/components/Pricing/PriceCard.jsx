import React, { useState } from 'react'

export default function PriceCard({packageName, price, desc, buttonText, popular, bgColor}) {
  
    const [checked, setChecked] = useState(false)

    return (
    <div id='card' className={`${bgColor} shrink-0 relative h-[18rem] w-[15rem] flex flex-col items-start text-start justify-between bg-white rounded-md rounded-tr-2xl border-2 border-[#1a1a1a] p-6`}>
        <div className='flex items-center gap-2'>
            <p className='font-[500] uppercase'>{packageName}</p>
            {popular ? <div className='border-[1.5px] border-[#1a1a1a] px-3 py-1 text-sm rounded-full'>Popular</div> : null}
        </div>
        <p className='font-[500] text-5xl'>${price}<sub className='text-sm'>/ month</sub></p>
        <p className='text-sm'>{desc}</p>
        <button onClick={() => setChecked(!checked)}  className={checked ? 'border-2 rounded-md border-[#1a1a1a] font-[600] w-full py-2 text-sm' : 'bg-[#1a1a1a] border-2  w-full py-2 text-sm text-white rounded-sm'}>{checked ? "Selected" : "Select"}</button>
        {checked ? <div className='w-8 h-8 rounded-full flex items-center justify-center absolute top-4 right-4'><i class="bi bi-check-circle-fill"></i></div> : null}
    </div>
  )
}
