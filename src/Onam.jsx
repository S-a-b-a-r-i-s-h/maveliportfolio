import React from 'react'
import './onam.css'
import { motion,useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
const Onam = () => {

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

  return (
    <div className='onamSection' id='onam' ref={ref}>
        <p className='oneLine'>Harvest of Joy</p>
        <motion.h1 className='gradient Heading'
            initial='hidden'
            animate={controls}
            variants={headingVariants}  
        >
             ONAM
        </motion.h1>
        <p className='description quicksand'>
            Onam is a joyous harvest festival celebrated by my people to welcome me back to Earth every year. 
            It symbolizes unity, prosperity, and the spirit of hospitality. 
            During Onam, Keralites decorate their homes with colorful flower carpets, wear traditional attire, 
            and partake in feasts known as "Sadhya." Onam is a time for festivities, cultural performances, 
            and coming together with loved ones, transcending boundaries and celebrating the essence of our beautiful state.
        </p>
    </div>
  )
}

export default Onam