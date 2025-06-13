"use client"
import React, { useEffect, useState } from 'react'
import {animate, motion, useMotionValue} from 'framer-motion'

const Ratings = () => {
    const customers = useMotionValue(0);
    const ratings = useMotionValue(0);
    const satifaction = useMotionValue(0);
    const [c,setC] = useState(0)
    const [r,setR] = useState('0')
    const [s,setS] = useState(0)
    useEffect(()=>{
        const controls = animate(customers,500,{
               duration: 0.9,
      ease: "easeInOut",
         onUpdate: (latest) => {
        setC(Math.floor(latest))
      },
        });
        return ()=>{
            controls.stop()
        }
    },[])
        useEffect(()=>{
        const controls = animate(ratings,4.9,{
               duration: .8,
      ease: "easeInOut",
               onUpdate: (latest) => {
        setR(latest.toFixed(1))
      },
        });
        return ()=>{
            controls.stop()
        }
    },[])
        useEffect(()=>{
        const controls = animate(satifaction,100,{
               duration: 0.78,
      ease: "easeInOut",
               onUpdate: (latest) => {
        setS(Math.floor(latest))
      },
        });
        return ()=>{
            controls.stop()
        }
    },[])
  return (
     <motion.div className="flex fadein gap-6 mt-6 mb-5 w-full  text-sm text-zinc-600">
        
  <div>
    <strong className="text-xl text-black">{c}+</strong><br />
    Customers
  </div>
  <div>
    <strong className="text-xl text-black">{r}★</strong><br />
     Rating
  </div>
  <div>
    <strong className="text-xl text-black">{s}%</strong><br />
    Satisfaction Guaranteed
  </div>
</motion.div>
  )
}

export default Ratings