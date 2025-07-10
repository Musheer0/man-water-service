"use client"
import Compare from '@/components/compare'
import ContactButton from '@/components/contact-button'
import React from 'react'
import { MapPin } from "lucide-react";
import {motion} from 'framer-motion'
import Ratings from './rating';
const Hero = () => {
    const childVariants = {
  hidden: { opacity: 0, y: 20,filter:'blur(5px)' },
  show: { opacity: 1, y: 0,filter:'blur(0px)', transition: { duration: 0.33 } },
};
  return (
    <motion.section 
    className='
    bg-gradient-to-t
    rounded-t-3xl
    to-blue-100
    from-transparent
   min-h-screen
    px-10 py-10 flex items-center flex-wrap  flex-col lg:flex-row  gap-5  w-full'>
    <div className="left h-full flex-1  mb-5  flex flex-col items-start justify-center">
      <div className="mt-6 space-y-2 text-zinc-600">
  <motion.div
  initial={childVariants.hidden}
  animate={childVariants.show}
  className="flex items-center gap-2">
    <MapPin className="h-5 w-5 text-blue-700" />
    <span>Kerala</span>
  </motion.div>
</div>
        <motion.h1
                 initial="hidden"
      animate="show"
          variants={{
        hidden:{},
        show:{
            transition:{
                staggerChildren:0.11
            }
        }
    }}
      className='text-[12vw] sm:text-[8vw] md:text-[7.5vw] lg:text-[7.7vw] xl:text-[70px] leading-none  font-semibold'
      >
      {'Sparkling Clean Homes, <br/>Every Time.'.split(' ').map((e,i)=>{
        if(i==0)
            return(
               <motion.span
                      key={i}
                
       variants={childVariants}

       className='text-blue-600'>
     {e}
        </motion.span> )
    else
        return(
            <motion.span key={i}
                   variants={childVariants}
      dangerouslySetInnerHTML={{__html:' '+e}}
            />

        )
      })}
      </motion.h1>
       <motion.div
             initial="hidden"
      animate="show"
          variants={{
        hidden:{},
        show:{
            transition:{
                staggerChildren:0.3
            }
        }
    }}
       >
             <motion.p 
      variants={childVariants}
      className='pt-4  text-zinc-400 max-w-md '>
        Keep your workspace and home spotless with our top-notch cleaning service
      </motion.p>
<motion.p 
      variants={childVariants}

className="mt-2 text-zinc-500 text-sm italic">
    We&apos;re a local team, born and raised — we know the water tanks *and* the weather.
    </motion.p>
       </motion.div>
 
          <Ratings/>
      <ContactButton/>
    </div>
      <div className="right shadow  h-full max-h-[500px] max-w-[500px] mx-auto flex-1 min-w-[300px]  overflow-hidden  ">
        <Compare
        firstItem={
            <img src="/before.avif" alt=""  />
        }
        secondItem={
                      <img src="/after.avif" alt=""  className=' h-full'/>

        }
className='w-fit h-full'
        />
    </div>
    </motion.section>
  )
}

export default Hero