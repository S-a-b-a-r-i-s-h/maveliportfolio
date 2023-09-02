import React from 'react'
import { motion,useAnimation } from 'framer-motion'
import './wishes.css'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

const Wishes = () => {

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
      hidden:{x:-300},
      visible:{
        x:0,
        transition:{
          delay:0.3,
          type:'spring'
        },
      },
    }

  return (
    <div id='wishes' className='wish'>
        <p className='para1 quicksand'>
            As Thiruvonam fades into cherished memories, 
            I depart with a heart filled with joy and gratitude for your warm embrace. 
            Your love and celebrations have once again made my visit unforgettable.
            So, my people, wear your smiles proudly and let happiness be our guiding light.
        </p>
        <p className='para2'>
            I carry with me the joy of your celebrations and the warmth of your hearts as I depart. 
            Fear not, for just as Thiruvonam returns, so shall I.
        </p>
        <motion.h2 className='manasilayo gradient2'
            ref={ref}
            initial='hidden'
            animate={controls}
            variants={headingVariants} 
        >മനസിലായോ</motion.h2>
    </div>
  )
}

export default Wishes