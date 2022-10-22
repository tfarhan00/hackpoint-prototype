import React from 'react'
import fullstack from '../../assets/fullstack.png'
import mobile from '../../assets/mobile.png'
import server from '../../assets/server.png'
import ui from '../../assets/ui.png'
import cyber from '../../assets/cyber.png'
import { useRef } from 'react'
import { useDraggable } from "react-use-draggable-scroll"

export default function Categories() {

  const scrollableDiv = useRef()
  const { events } = useDraggable(scrollableDiv)

  return (
    <>
    <main className='w-[100%] flex flex-col items-center'>
      <div className='w-[95%] flex'>
        <div className='flex flex-col gap-1'>
        <h1 className='font-[600] text-3xl'>Top Categories</h1>
        <p className='text-gray-600'>Some of the most favorite categories</p>
        </div>
      </div>
      <div ref={scrollableDiv} {...events} className='w-[100%] cursor-grab gap-4 flex overflow-x-auto scrollbar-hide justify-between py-8'>
        <div className='bg-white   shrink-0 rounded-sm h-[20rem] w-[19rem] flex flex-col items-start justify-between p-8'>
          <img src={fullstack} alt='pict' className='w-[150px] h-[150px] object-contain' />
          <div className='flex flex-col'>
            <h1 className='font-bold text-xl'>Full Stack Web Dev</h1>
            <p className='text-sm'>Into JavaScript, NodeJS, mySQL, Express, Django, etc</p>
          </div>
        </div>
        <div className='bg-white   shrink-0 rounded-sm h-[20rem] w-[19rem] flex flex-col items-start justify-between p-8'>
          <img src={server} alt='pict' className='w-[150px] h-[150px] object-contain' />
            <div className='flex flex-col'>
            <h1 className='font-bold text-xl'>Cloud Engineer</h1>
          <p className='text-sm'>Manage AWS, Docker, Azure, and Network Protocol</p>
          </div>
        </div>
        <div className='bg-white   shrink-0 rounded-sm h-[20rem] w-[19rem] flex flex-col items-start justify-between p-8'>
          <img src={mobile} alt='pict' className='w-[150px] h-[150px] object-contain' />
          <div className='flex flex-col'>
            <h1 className='font-bold text-xl'>Mobile Developer</h1>
            <p className='text-sm'>Get Around With Kotlin, Swift UI, Flutter, and Dart Enviroment</p>
          </div>
        </div>
        <div className='bg-white   shrink-0 rounded-sm h-[20rem] w-[19rem] flex flex-col items-start justify-between p-8'>
          <img src={ui} alt='pict' className='w-[150px] h-[150px] object-contain' />
          <div className='flex flex-col'>
            <h1 className='font-bold text-xl'>UI/UX Designer</h1>
            <p className='text-sm'>Concept A Design Prototype With Figma, Adobe XD, and Webflow</p>
          </div>
        </div>
        <div className='bg-white   shrink-0 rounded-sm h-[20rem] w-[19rem] flex flex-col items-start justify-between p-8'>
          <img src={cyber} alt='pict' className='w-[150px] h-[150px] object-contain' />
          <div className='flex flex-col'>
            <h1 className='font-bold text-xl'>Cyber Security</h1>
            <p className='text-sm'>Keeping The Web Infrastructure Secure With Nmap, Metasploit, Wireshark, Kali Linux, etc.</p>
          </div>
        </div>
      </div>
    </main>
    </>
  )
}
