import React, { useState } from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import {RxCross1} from 'react-icons/rx'
import './navbar.css'
import anime from 'animejs';
//import anime from 'lib/anime.es.js';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const sunPath = "M55 27.5C55 42.6878 42.6878 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C42.6878 0 55 12.3122 55 27.5Z"
  const moonPath = "M14 27.5C14 42.6878 27.5 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C27.0528 0.0035621 14 12.3122 14 27.5Z"


  return(
  <motion.nav className='app__navbar'
    initial = {{ y:-300 }}
    animate = {{ y:0 }}
    transition = {{ delay:0.3, type:'tween' }}
  >
    <div className='app__navbar-logo gradient2'>
      മാവേലി
    </div>
    {/* <div>
      <svg 
        id='lightMode'
        width="14" 
        height="28" 
        viewBox="0 0 28 55" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className='moon'
          d="M14 27.5C14 42.6878 27.5 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C27.0528 0.0035621 14 12.3122 14 27.5Z" 
          fill="#FFC700"/>
      </svg>
    </div> */}

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