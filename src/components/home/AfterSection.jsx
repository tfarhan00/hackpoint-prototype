import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useRef } from 'react'
import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import EndSection from './EndSection'
import Company from './Company'
import knob1 from '../../assets/styling/knob.png'
import knob2 from '../../assets/styling/knob2.png'
gsap.registerPlugin(ScrollTrigger)

export default function AfterSection() {

  let arrOfRefs = useRef([])
  let firstImg = useRef(null)
  let secondImg = useRef(null)
  let animateText = useRef(null)
  let animeTextContain = useRef(null)
  let firstIcon = useRef(null)
  let secondIcon = useRef(null)

  useEffect(() => {
    arrOfRefs.current.forEach((container) => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          pin: true,
          pinSpacing: false,
          scrub: 0.5,
        }
      });
      
      tl.to(container, {
        autoAlpha: 1
      }).to(
        container,
        {
          autoAlpha: 0,
        },
        1
        )
        
      })
      
      let firstImage = firstImg.current
      let secondImage = secondImg.current
      let firstSection = arrOfRefs.current[0]
      console.log(firstSection)
      
      gsap.to(firstImage, {
        scrollTrigger: {
          trigger: firstSection,
          scrub: true,
        },
        y: 200,
      })

      gsap.to(secondImage, {
        scrollTrigger: {
          trigger: firstSection,
          scrub: true,
        },
        y: -200,
      })

      let firstShape = firstIcon.current
      let secondShape = secondIcon.current
      let thirdSection = arrOfRefs.current[2]

      gsap.to(firstShape, {
        scrollTrigger: {
          trigger: thirdSection,
          scrub: true,
        },
        y: 200,
        rotation: "+=360"
      })
      
      gsap.to(secondShape, {
        scrollTrigger: {
          trigger: thirdSection,
          scrub: true,
        },
        y: -200,
        rotation: "+=360"
      })

    let textAnime = animateText.current.querySelectorAll('p')
    let textContainer = animeTextContain.current

    gsap.to(textAnime, 
    {
      backgroundPositionX: "0%",
      stagger: 1,
      scrollTrigger: {
        trigger: textContainer,
        scrub: 1,
        pin: true,
      }
    })

 
  }, [])
  

  const addToRef = (el) => {
    if (el && !arrOfRefs.current.includes(el)) {
      arrOfRefs.current.push(el);
    }
  }



  return (
  <AnimatePresence>
    <motion.main id='main-container' className='w-full py-4 flex flex-col items-center'>

        <section ref={addToRef} className='invisible w-[90%] min-h-[100vh] py-4 relative flex flex-col items-center text-center justify-center gap-4'>
          <p className='text-[#1a1a1a] font-[500] text-4xl uppercase'>
           hola!!
          </p>
          <div ref={firstImg} className="absolute top-0 left-0 w-[15rem] h-[30rem] rounded-md">
              <img
                className="w-full h-full object-cover"
                src='https://images.pexels.com/photos/4126695/pexels-photo-4126695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                />
          </div>
          <div ref={secondImg} className="absolute bottom-0 right-0 w-[15rem] h-[30rem] rounded-md">
              <img
                className="w-full h-full object-cover"
                src='https://images.pexels.com/photos/4439418/pexels-photo-4439418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                />
          </div>
        </section>

        <section ref={addToRef} className='invisible w-[90%] min-h-[100vh] py-4 relative flex flex-col items-center text-center justify-center gap-4'>
          <p className='text-[#1a1a1a] font-[500] text-4xl uppercase'>
           we are the <span className='italic font-[400]'>hackpoint</span>
          </p>
        </section>

        <section ref={addToRef} className='invisible relative w-[90%] min-h-[100vh] py-4 relative flex flex-col items-center text-center justify-center gap-4'>
          <p className='text-[#1a1a1a] font-[500] text-4xl uppercase'>
           A Software company that provide digital platform for people who want to take a deeper dive with <code>code</code>
          </p>
          <div ref={firstIcon} className="absolute -top-32 -left-8 w-52 h-52 rounded-md">
              <img
                className="w-full h-full object-contain"
                src={knob1}
                />
          </div>
          <div ref={secondIcon} className="absolute -bottom-32 -right-8 w-52 h-52 rounded-md">
              <img
                className="w-full h-full object-contain"
                src={knob2}
                />
          </div>
        </section>

        <section ref={addToRef} className='invisible w-[70%] min-h-[100vh] py-4 relative flex flex-col items-start justify-center gap-4'>
          <h1 className='text-4xl lg:text-6xl font-[500]'>It's time to revolutionize the way of <span className='italic font-[400]'>understanding.</span></h1>
        </section>

        <section ref={animeTextContain} className='bg-[#1a1a1a] w-[100%] min-h-[100vh] py-4 relative flex flex-col items-center text-start justify-center gap-4'>
          <div ref={animateText} className='w-[90%] text-scroll font-[500] text-6xl uppercase'>
            <p>Enjoy</p>
            <p>The <span className='font-mono'>experience</span></p>
            <p>of becoming a <span className='font-mono'>developer</span></p>
            <p>in the <span className='font-mono'>timeline</span> of just 6 months</p>
          </div>
        </section>

        <section className='invisible w-[90%] min-h-[100vh] py-8 flex flex-col items-center justify-center gap-8'>
        </section>

       <Company />
       
       <EndSection />

      
    </motion.main>
    </AnimatePresence>
  )
}

