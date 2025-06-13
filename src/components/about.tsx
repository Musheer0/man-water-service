"use client"
import { ArrowUp } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import {motion} from 'framer-motion'
const About = () => {
      const childVariants = {
  hidden: { opacity: 0, y: 20,filter:'blur(5px)' },
  show: { opacity: 1, y: 0,filter:'blur(0px)', transition: { duration: 0.33 } },
};
const highlight_text = `to keep your home and workplace crystal clean, safe, and stress-free`.split(' ');
const about = `Man Water Service provides expert cleaning solutions
         crafted to keep your home and workplace crystal clean, safe, and stress-free because you deserve spotless surroundings without lifting a finger.`.split(' ')
const staggerDuration = 0.025
const totalWords = about.length
const totalDelay = totalWords * staggerDuration -0.2
  return (
   <>
    <section className='w-full h-fit p-4 pb-20 '  id='about'>
        <motion.img
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        viewport={{once:true}}
        transition={{
          duration: 1
        }}
        src={'/about.png'}
        width={150}
        height={150}
        alt='about image'
        className='mx-auto mask-b'
        />
      <motion.h2
           initial="hidden"
      whileInView="show"
      viewport={{once:true}}
      variants={{
        hidden:{},
        show:{
          transition:{
            staggerChildren:0.025
          }
        }
      }}
      className='text-[30px] sm:text-[40px] max-w-5xl text-center mx-auto'>
       <span className='italic'>&quot;</span> 
       {about.map((e,i)=>{
        return(
          <motion.span 
          variants={childVariants}
          key={i} className={highlight_text.includes(e) ?"text-blue-600":""}>{e} </motion.span>
        )
       })}
                 <span className='italic'>&quot;</span>
      </motion.h2>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: totalDelay, duration: 0.5, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <Link href="/#service">
        <button
          className="flex group items-center gap-2 rounded-full
           bg-blue-700/10 p-3 my-2 pl-4.5 mx-auto cursor-pointer text-blue-500"
        >
          our service
          <span className="relative overflow-hidden bg-zinc-50 rounded-full p-1">
            <ArrowUp
              size={15}
              className="transition-all duration-300 ease-in-out rotate-45 group-hover:translate-x-1/2 group-hover:-translate-y-full"
            />
            <ArrowUp
              size={15}
              className="absolute top-full transition-all duration-300 ease-in-out rotate-45 left-0 group-hover:left-1/2 translate-x-0 group-hover:-translate-x-1/2 group-hover:top-1/2 group-hover:-translate-y-1/2"
            />
          </span>
        </button>
      </Link>
    </motion.div>
         
    </section>

   </>
  )
}

export default About