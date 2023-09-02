import React, { useState } from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import {RxCross1} from 'react-icons/rx'
import './navbar.css'
import { motion } from 'framer-motion';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return(
  <motion.nav className='app__navbar'
    initial = {{ y:-300 }}
    animate = {{ y:0 }}
    transition = {{ delay:0.3, type:'tween' }}
  >
    <div className='app__navbar-logo gradient2'>
      മാവേലി
    </div>
    <ul className='app__navbar-links'>
      <li className='quicksand'><a href="#home">Home</a></li>
      <li className='quicksand'><a href="#about">About</a></li>
      <li className='quicksand gradient'><a href="#onam">Onam</a></li>
      <li className='quicksand'><a href="#contact">Contact</a></li>
    </ul>

    <div className='app__navbar-smallscreen'>
      <GiHamburgerMenu color="#dbbb48" fontSize={27} className="hamburg" onClick={() => {setToggleMenu(true)}} />
      {toggleMenu && (
      <motion.div className='app__navbar-smallscreen_overlay flex__center'
        initial = {{ y:'-100vh'}}
        animate = {{ y:0 }}
        transition = {{ type:'tween'}}
        onClick={() => {setToggleMenu(false)}}
      >
        <RxCross1 fontSize={27}  className="overlay__close slide-up" onClick={() => {setToggleMenu(false)}} />
        <ul className='app__navbar-smallscreen_links'>
          <li className='quicksand'><a href="#home">Home</a></li>
          <li className='quicksand'><a href="#about">About</a></li>
          <li className='quicksand gradient'><a href="#onam">onam</a></li>
          <li className='quicksand'><a href="#contact">Contact</a></li>
        </ul>
      </motion.div>
    )}
    </div>
  </motion.nav>
  )};
  
export default Navbar