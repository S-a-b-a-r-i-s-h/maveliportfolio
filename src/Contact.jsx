import React from 'react'
import { useState,useRef } from 'react'
import './contact.css'
import { motion,useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import image from './mavelicontact.png'
import emailjs from '@emailjs/browser'
// import './button'


const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name:'',
        email:'',
        message:'',
    })
    const [loading, setLoading] = useState('')
    const handleChange = (e) => {
        const {name,value} = e.target;
        setForm({...form,[name]:value})
    }
    //template_mhtvrq5
    //service_dtzv8yc
    //1mrnHE0-9vbb4_pmw
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        emailjs.send(
            'service_dtzv8yc',
            'template_mhtvrq5',
            {
                from_name:form.name,
                to_name:'Sabarish',
                from_email:form.email,
                to_email:'sabrusabarish@gmail.com',
                message:form.message,
            },
            '1mrnHE0-9vbb4_pmw'
        )
        .then(() => {
            setLoading(false);
            setForm({
                name:'',
                email:'',
                message:''
            })
        },(error)=>{
            setLoading(false)
            console.log(error);
            alert('Something wend wrong.')
        })
        const btn = document.querySelector("[data-btn]");
        btn.classList.toggle("animating")
    }

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

    const imageVariants = {
        hidden:{x:200},
        visible:{
          x:0,
          transition:{
            delay:0.3,
            type:'tween'
          }
        },
      }
      const imageVariants2 = {
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
    <div className='contactSection' ref={ref}>
        <motion.div 
            className='contactContent quicksand'
            id='contact'
            
            // initial='hidden'
            // animate={controls}
            // variants={imageVariants}
        >
            <p className='contactPara quicksand'>
                 Your wisdom and aspirations are the heartbeat of our state. 
                As Mahabali, I invite you to share your ideas for advancing our culture and development. 
                Your input is invaluable in steering Kerala towards a brighter future.
            </p>

            <form 
                className='contactForm quicksand'
                ref={formRef}
                onSubmit={handleSubmit}
            >
                <label>
                    <span>Your Name</span>
                    <input 
                        type="text" 
                        name='name' 
                        value={form.name}
                        onChange={handleChange}
                        placeholder="What's your Name?"
                        required
                    />
                </label>
                <label>
                    <span>Your Email</span>
                    <input 
                        type="email" 
                        name='email' 
                        value={form.email}
                        onChange={handleChange}
                        placeholder="What's your Email?"
                        required
                    />
                </label>
                <label>
                    <span>Your Suggestion</span>
                    <textarea 
                        rows="7"
                        name='message' 
                        value={form.message}
                        onChange={handleChange}
                        placeholder="What do you want to say?"
                        required
                    />
                </label>
                <div className='btndiv'>
                    <button className='btn' data-btn type='submit'>
                        {/* {loading? 'Sending':'Send'} */}
                        Submit
                    </button>
                    <div className="checkmark-container">
                        <svg 
                            className='checkmark-svg'
                            x="0px" y="0px"
                            // stroke='red'
                            fill='none'
                            
                            viewBox="0 0 25 30" >
                            <path d="M2,19.2C5.9,23.6,9.4,28,9.4,28L23,2"/>
                        </svg>
                    </div>
                </div>
            </form>
        </motion.div>

        <div className='contactImage'>
            <motion.img src={image} alt="maveli"
                initial='hidden'
                animate={controls}
                variants={imageVariants2}
            />
        </div>
    </div>
  )
}

export default Contact