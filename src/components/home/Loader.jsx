import React from "react";
import { motion } from "framer-motion";

const container = {
  show: {
    transition: {
      delay: 1,
      staggerChildren: 0.35,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 200, scale: 1.1 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
  exit: {
    opacity: 0,
    y: -200,
    scale: 0.9,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
    },
  },
};

const itemMain = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.4,
    },
  },
};

const Loader = ({ setLoading }) => {
  return (
    <motion.div className="h-[100vh] overflow-hidden">
      <motion.div
        variants={container}
        onAnimationComplete={() => setLoading(false)}
        initial="hidden"
        animate="show"
        exit="exit"
        className="w-full h-[100vh] relative flex items-center justify-center overflow-hidden"
      >
        <ImageBlock className='absolute origin-center top-16 left-16 w-64 h-64' variants={item} image='https://images.pexels.com/photos/935977/pexels-photo-935977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' id="image-1" />
          <div className="w-[30rem] h-[20rem]">

            <motion.div  
              layoutId="main-image-1" 
              variants={itemMain} 
              className="overflow-hidden w-[30rem] h-[20rem] rounded-md">
              <motion.img
                className="w-full h-full object-cover"
                src='https://images.pexels.com/photos/5473298/pexels-photo-5473298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                />
            </motion.div>
            
          </div>
        <ImageBlock className='absolute origin-center top-16 right-16 w-64 h-64' variants={item} image='https://images.pexels.com/photos/109919/pexels-photo-109919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' id="image-3" />
        <ImageBlock className='absolute origin-center bottom-4 left-16 w-64 h-64' variants={item} image='https://images.pexels.com/photos/5952651/pexels-photo-5952651.jpeg?auto=compress&cs=tinysrgb&w=600' id="image-4" />
        <ImageBlock className='absolute origin-center bottom-16 right-16 w-64 h-64' variants={item} image='https://images.pexels.com/photos/12899189/pexels-photo-12899189.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' id="image-5" />
      </motion.div>
    </motion.div>
  )
}

export const ImageBlock = ({ className, posX, posY, variants, id, image}) => {
  return (
    <motion.div
      variants={variants}
      className={className}
      style={{
        top: `${posY}vh`,
        left: `${posX}vw `,
      }}
    >
      <img
        src={image}
        alt={id}
      />
    </motion.div>
  );
};
export default Loader;
