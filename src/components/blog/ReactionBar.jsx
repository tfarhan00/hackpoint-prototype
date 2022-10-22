import React, { useState } from 'react'
import { useEffect } from 'react'
import OptionPop from './OptionPop'

export default function ReactionBar({postData}) {
    
    const [clicked, setClicked] = useState(false)

    const reactButton = () => {
        setClicked(!clicked)
    }

    const randomNum = () => {
        let num = Math.round(Math.random() * 3000)
        return num
      }



  return (
    <div className='w-24 h-[100%] flex flex-col gap-4 items-center py-16 bg-gray-100'>
        <div onClick={reactButton} className={`${clicked ? 'text-red-600' : ''} cursor-pointer flex flex-col  items-center gap-2`}>
            <i className="bi bi-heart-fill"></i>
            <p>{randomNum().toLocaleString()}</p>
        </div>
        <div onClick={reactButton} className={`${clicked ? 'text-yellow-500' : ''} cursor-pointer flex flex-col  items-center gap-2`}>
            <i className="bi bi-star-fill"></i>
            <p>{randomNum().toLocaleString()}</p>
        </div>
        <div onClick={reactButton} className={`${clicked ? 'text-indigo-600' : ''} cursor-pointer flex flex-col items-center gap-2`}>
            <i className="bi bi-bookmark-plus-fill"></i>
            <p>{randomNum().toLocaleString()}</p>
        </div>
        <div onClick={() => setOption(!option)} className='flex cursor-pointer flex-col items-center gap-2'>
            <OptionPop postData={postData}/>
        </div>
    </div>
  )
}
