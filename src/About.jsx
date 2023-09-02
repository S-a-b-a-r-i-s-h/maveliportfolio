import React from 'react'
import './about.css'
import image from './aboutmaveli-removebg-preview_upscaled.png'
import image2 from './vamanaimg.png'
import { motion,useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

const About = () => {

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
    hidden:{x:'-100vw'},
    visible:{
      x:0,
      transition:{
        delay:0.3,
        type:'tween'
      }
    },
  }

  return (
      <div className='aboutSection' id='about' 
        ref={ref}
      >
        <div className='aboutImage'>
          <motion.img src={image} alt="aboutImage"
            initial='hidden'
            animate={controls}
            variants={imageVariants}
          />
        </div>
        <div className='aboutContent'>
          <p className='oneLine'>Beloved King of <span className='a'>Kerala</span></p>
          <motion.h1 className='gradient Heading'
            initial='hidden'
            animate={controls}
            variants={headingVariants}
          >
            MAHABALI
          </motion.h1>
          <p className='description quicksand'>
            Maveli, the legendary king of Kerala, embodies benevolence and equity in local lore. 
            His reign symbolizes an era of prosperity and fairness, etching his name in the cultural consciousness. 
            The annual festival of Onam celebrates his return, adorned with vibrant flower carpets and exuberant festivities, 
            fostering unity and preserving his legacy of compassion for generations to come.
          </p>
        </div>
    </div>
  )
}

export default About