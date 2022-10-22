import React, { useCallback, useEffect, useRef, useState } from 'react'
import FormLogin from '../components/login/FormLogin'
import cover from '../assets/darkbubble.jpg'
import logo from '../assets/hero.png'
import { AnimatePresence, motion } from 'framer-motion'
import GlassCard from '../components/login/GlassCard'


export default function Login() {

  const inputRef = useRef(null)
  const mouseRef = useRef(null)

  const readFocus = () => {
    if (window.matchMedia("(min-width: 900px)").matches) {
      inputRef.current.focus()
    }
    inputRef.current.scrollIntoView({ behavior: "smooth", block: "start"})
  }

  const [mousePos, setMousePos] = useState({
    x: 0,
    y: 0,
  })

  console.log(mousePos)

  const mouseRender = useCallback((e) => {
      setMousePos({
        x: e.clientX,
        y: e.clientY,
      })
  }, [mousePos])
  
  useEffect(() => {

    if(window.matchMedia("(pointer: coarse)").matches) {
      mouseRef.current.style.display = "none"
    }

    window.addEventListener("mousemove", mouseRender)

    return () => {
      window.removeEventListener("mousemove", mouseRender)
    }
  }, [])

  const [allVariants, setAllVariants] = useState("default")

  const myVariant = {
    default: {
      x: mousePos.x - 25,
      y: mousePos.y - 25,
      opacity: 1,
    },
    onForm: {
      x: mousePos.x - 25,
      y: mousePos.y - 25,
      display: "none",
      opacity: 0,
    },
  }

  const enterForm = () => setAllVariants("onForm")
  const leaveForm = () => setAllVariants("default")

  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        className='w-[100%]'
        key="loginPage"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <main className='w-[100%] h-auto bg-gray-50 flex flex-col-reverse xs:flex-col-reverse md:flex-col-reverse lg:flex-row-reverse justify-between'>

          <motion.section layout whileHover={enterForm} onMouseLeave={leaveForm} id='left-side' className='relative grow min-h-[100vh] p-8 max-h-[200vh] flex flex-col gap-2 justify-center items-center bg-white'>
            <div id='logo' className='absolute top-8 right-8 font-bold text-lg flex items-center gap-2'>
              <img src={logo} alt='logo' className='w-8 h-8 object-contain'/>
              <p className='text-base'>hackpoint<sup className='font-normal'>beta</sup></p>
              </div>
            <div className='flex flex-col gap-2 w-[20rem] mb-4'>
              <h1 className='font-bold text-3xl'>Welcome back</h1>
              <p className='text-gray-500 text-xs'>Welcome back, please enter your detail</p>
            </div>
            <FormLogin forwardedRef={inputRef}/>
            <div id='copyright' className='absolute bottom-8 text-sm right-8 text-gray-500'>&copy; hackpoint 2022</div>
          </motion.section>

          <section id='right-side' className='relative grow min-w-[60%] h-[100vh] flex justify-center items-center bg-gray-600 overflow-hidden'>
              <motion.div
                layout
                ref={mouseRef}
                className='myCursor'
                variants={myVariant}
                initial={{ opacity: 0 }}
                animate={allVariants}
                transition={{ type: "spring", stiffness: "100" }}
                exit={{ opacity: 0 }}
              ><i class="bi bi-arrow-up-left"></i></motion.div>
              <img src={cover} alt='pict' className='absolute w-[150%] h-[150%] object-cover translate-y-32' />
              <div id='logo' className='absolute px-4 py-1 border-[1px] border-white rounded-full top-8 left-8 text-white text-xs flex items-center gap-2 transition-all duration-300 hover:scale-105'>
                <p>HELLO</p>
              </div>
              <div id='logo' className='absolute px-4 py-1 border-[1px] border-white rounded-full top-8 right-8 text-white text-xs flex items-center gap-2 transition-all duration-300 hover:scale-105'>
                <p>WELCOME</p>
              </div>
              <div id='logo' className='absolute px-4 py-1 border-[1px] border-white rounded-full bottom-8 left-8 text-white text-xs flex items-center gap-2 transition-all duration-300 hover:scale-105'>
                <p>TO HACKPOINT</p>
              </div>
              <div id='logo' className='absolute px-4 py-1 border-[1px] border-white rounded-full bottom-8 right-8 text-black bg-white text-xs flex items-center gap-2 transition-all duration-300 hover:scale-105'>
                <p>X: {mousePos.x} Y: {mousePos.y}</p>
              </div>
              <GlassCard readFocus={readFocus}/>    
          </section>
        </main>
      </motion.div>
    </AnimatePresence>
  )
}
