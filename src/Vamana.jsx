import React from 'react'
import './about.css'
import image2 from './vamanaimg.png'
import { motion,useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

const Vamana = () => {

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
      hidden:{x:-200},
      visible:{
        x:0,
        transition:{
          delay:0.3,
          type:'tween'
        }
      },
    }

  return (
    <div className='vamana'
        ref={ref}
    >
      <div className='vamanaContent'>
        <p className='oneLine'>Vamana</p>
        <motion.h1 className='gradient Heading'
          initial='hidden'
          animate={controls}
          variants={headingVariants}  
        >
          Divine Dwarf Incarnation
        </motion.h1>
        <p className='description quicksand'>
          As Mahabali, I behold Vamana, the divine enigma who appears before me in the guise of a diminutive Brahmin. 
          His presence radiates a potent blend of cosmic majesty and unassuming humility. With each step, 
          he traverses the realms of gods and mortals, embodying the delicate balance between power and sacrifice. 
          Vamana's mere form conceals a boundless universe, his purpose a cryptic dance of destiny itself. 
          In this moment, I, Mahabali, stand witness to the convergence of worlds, 
          forever humbled by the intricate design of existence he represents.
        </p>
      </div>
      <div className='vamanaImage'>
        <motion.img src={image2} alt="vamana"
          initial='hidden'
          animate={controls}
          variants={imageVariants}
        />
      </div>
    </div>
  )
}

export default Vamana