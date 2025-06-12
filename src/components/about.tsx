import { ArrowUp, InstagramIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
   <>
    <section className='w-full h-fit p-4 pb-20 doodle'  id='about'>
        <Image
        src={'/about.png'}
        width={150}
        height={150}
        alt='about image'
        className='mx-auto mask-b'
        />
      <h2 className='text-[30px] sm:text-[40px] max-w-5xl text-center mx-auto'>
       <span className='italic'>&quot;</span> Man Water Service provides expert cleaning solutions
         crafted <span className='text-blue-600'>to keep your home and workplace crystal clean,
          safe, and stress-free</span> because you deserve spotless surroundings without lifting a finger.
                 <span className='italic'>&quot;</span>
      </h2>
     <Link
     href={'/#service'}
     >
       <button 
          className='flex group items-center gap-2  rounded-full
           bg-blue-700/10  p-3 my-2 pl-4.5 mx-auto cursor-pointer   text-blue-500'>
            our service
            
           <span className=' relative overflow-hidden bg-zinc-50 rounded-full p-1'>
             <ArrowUp size={15}
             className='transition-all duration-300 ease-in-out  rotate-45 group-hover:translate-x-1/2  group-hover:-translate-y-full'
             />
             <ArrowUp size={15}
             className='absolute top-full transition-all duration-300 ease-in-out rotate-45 left-0 group-hover:left-1/2 translate-x-0 group-hover:-translate-x-1/2 group-hover:top-1/2 group-hover:-translate-y-1/2'/>
           </span>
       </button>
       </Link>

         
    </section>
       <div className="ig flex flex-col items-center gap-2 py-10 text-zinc-100 bg-gradient-to-l from-pink-600 to-orange-500">
              <p className='flex items-center gap-1 font-semibold text-xs  bg-zinc-100/10 text-white  w-fit px-3 py-1 rounded-full'>
                <InstagramIcon size={14}/>
                Follow Our Journey
              </p>
              <h2 className='text-3xl font-semibold py-2 leading-none'>See Our Work on Instagram</h2>
              <p className='text-center max-w-xl'>Follow
                 <Link
              className='font-semibold underline text-white
              '
                 href={
                  'https://www.instagram.com/man_water_service/'
                 }
                 >
                 @man_water_service
                 </Link> for daily updates, 
                 cleaning tips, and behind-the-scenes content 
                 from our professional cleaning team.</p>
                <Link
              className='font-semibold underline bg-zinc-100 px-4 py-2 rounded-full cursor-pointer
              '
                 href={
                  'https://www.instagram.com/man_water_service/'
                 }
                 >
                 <button className='bg-gradient-to-l from-pink-600 cursor-pointer to-orange-500 bg-clip-text text-transparent'>
                  Follow Us
                 </button>
                 </Link>
            </div>
   </>
  )
}

export default About