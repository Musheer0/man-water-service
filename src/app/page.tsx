import React from 'react'
import { InstagramIcon} from "lucide-react";
import About from '@/components/about';
import Experience from '@/components/experience';
import ContactSection from '@/components/contact';
import ServicesSection from '@/components/services';
import Footer from '@/components/footer';
import Hero from '@/components/hero';
import Seo from '@/components/seo';
import Link from 'next/link';

const page = () => {
  return (
<>
<Seo/>
<Hero/>

    <About/>
           <div className="ig flex flex-col items-center justify-center gap-2 py-10 text-zinc-100 bg-gradient-to-l from-pink-600 to-orange-500">
              <p className='flex items-center gap-1 font-semibold text-xs  bg-zinc-100/10 text-white  w-fit px-3 py-1 rounded-full'>
                <InstagramIcon size={14}/>
                Follow Our Journey
              </p>
              <h2 className='text-3xl font-semibold text-center py-2 leading-none'>See Our Work on Instagram</h2>
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
    <ServicesSection/>
    <Experience/>

    <ContactSection/>
    <Footer/>
</>
  )
}

export default page