import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
    
    const title = {
        initial: {
            opacity: 0,
            y: 200
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                delayChildren: 0.4,
                staggerChildren: 0.1,
            },
        },
    }

    const letterAni = {
        initial: { y: 400 },
        animate: {
          y: 0,
          transition: {
            ease: [0.6, 0.01, -0.05, 0.95],
            duration: 1,
          },
        },
      };
      

  return (
    <main className='w-full relative h-[27rem] flex flex-col items-center justify-center'>
        <motion.div animate="animate" transition={{ staggerChildren: 0.4 }} variants={title}>
            <div className='overflow-hidden py-2.5'>
            <AnimateLetter key={1} delayNum={0.4}  text='building' letterAni={letterAni} title={title} />
            </div>

            <div className='overflow-hidden py-2.5'>
            <AnimateLetter key={2} delayNum={0.6}  text='skilled' letterAni={letterAni} title={title} />
            </div>

            <div className='overflow-hidden py-2.5'>
            <AnimateLetter className='italic' key={3} delayNum={0.8} text='developer.' letterAni={letterAni} title={title} />
            </div>
        </motion.div>

        <div className='hidden md:flex font-[400] absolute top-32 right-32 w-48 text-xs overflow-hidden'>
            <motion.div 
            initial={{ y: 200 }} 
            animate={{ y: 0 }} 
            transition={{ delay: 1, ease: [0.6, 0.01, -0.05, 0.95], duration: 1.2, }}
            >
                We are providing you the best learning source available on the internet so that you don't need to stuck in a tutorial hell
            </motion.div>
        </div>


        <div className='hidden md:flex font-[400] absolute bottom-24 left-32 w-48 text-xs overflow-hidden'>
            <motion.div 
            initial={{ y: 200 }} 
            animate={{ y: 0 }} 
            transition={{ delay: 1.5, ease: [0.6, 0.01, -0.05, 0.95], duration: 1.2, }}
            >
                Get stuck at unfamiliarly annoying syntax ? Don't worry we got you covered with our 10/10 system where we wouldn't let you finish without understand it first.
            </motion.div>
        </div>

        <div className='hidden md:flex font-[400] absolute top-20 left-60 justify-center text-6xl overflow-hidden'>
            <motion.div 
            initial={{ y: 200 }} 
            animate={{ y: 0 }} 
            transition={{ delay: 1.8, ease: [0.6, 0.01, -0.05, 0.95], duration: 1.2, }}
            >
               <i class="bi bi-braces-asterisk"></i>
            </motion.div>
        </div>

        <div className='hidden md:flex font-[400] absolute bottom-20 right-48 justify-center text-6xl overflow-hidden'>
            <motion.div 
            initial={{ y: 200 }} 
            animate={{ y: 0 }} 
            transition={{ delay: 2.2, ease: [0.6, 0.01, -0.05, 0.95], duration: 1.2, }}
            >
               <i class="bi bi-code-slash"></i>
            </motion.div>
        </div>
        
    </main>
  )
}

const AnimateLetter = ({text, disabled, title, letterAni, delayNum, className}) => {
    return (
<motion.div className={className} initial={{ y: 200 }} animate={{ y: 0 }} transition={{ delay: delayNum, ease: [0.6, 0.01, -0.05, 0.95], duration: 1.2 }}>
        <motion.span
        className='text-5xl lg:text-7xl font-[500] relative tracking-wide inline-block whitespace-nowrap'
        variants={disabled ? null : title}
        initial='initial'
        animate='animate'>
        {[...text].map((letter) => (
            <motion.span
            className='text-5xl lg:text-7xl font-[500] relative tracking-wide inline-block whitespace-nowrap'
            variants={disabled ? null : letterAni}>
            {letter}
        </motion.span>
        ))}
    </motion.span>
</motion.div>
    )
}
