import React from 'react'
import { useEffect } from 'react'
import './home.css'
import image from './homemaveli.png'
import { motion,useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Home = () => {
  const controls = useAnimation();
  const {ref,inView} = useInView();
  useEffect(() => {
    if(inView){
      controls.start('visible')
    }
    if(!inView){
      controls.start('hidden')
    }
  }, [controls,inView]);

  const headingVariants = {
    hidden:{opacity:0},
    visible:{
      opacity:1,
      transition:{
        duration:3,
        delay:0.5
      },
    },
  }

  const imageVariants = {
    hidden:{x:'100vw'},
    visible:{
      x:0,
      transition:{
        delay:0.3,
        type:'tween'
      }
    },
  }
  
  return (
    <div className='homeSection' id='home' 
      ref={ref}
    >
      <div className='homeContent'>
        <p className='oneLine '>King <span className='a'>Maveli</span></p>
        <motion.h1 className='gradient Heading'
          
          initial='hidden'
          animate={controls}
          variants={headingVariants}  
        >
          Unveiling the Mythical Majesty and Cultural Legacy
        </motion.h1>
      </div>
      <motion.div className='homeImage'>
        <motion.img src={image} alt="maveli"
          // initial='hidden'
          // animate={controls}
          // variants={imageVariants}
        />
      </motion.div>
    </div>
  )
}

export default Home