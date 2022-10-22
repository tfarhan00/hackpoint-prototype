import React from 'react'

export default function RoundText({ text }) {

  const characters = text.split('')

  return (
    <p className='-translate-y-[50px] uppercase tracking-[0.25rem]'>
        {characters.map((letter, i) => {
            return (
                <span 
                key={i}
                className='absolute text-[0.6rem] font-[500] text-center left-[50%] origin-[0_50px]' 
                style={{
                    transform: `rotate(${i * 8.7}deg)`,
                  }}>
                    {letter}
                </span>
            )
        })}
    </p>
  )
}
