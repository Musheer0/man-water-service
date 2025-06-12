import Compare from '@/components/compare'
import ContactButton from '@/components/contact-button'
import React from 'react'
import { MapPin } from "lucide-react";
import About from '@/components/about';
import Experience from '@/components/experience';
import ContactSection from '@/components/contact';
import ServicesSection from '@/components/services';
import Footer from '@/components/footer';

const page = () => {
  return (
<>
    <section 

    className='

    bg-gradient-to-t
    rounded-t-3xl
    to-blue-100
    from-transparent
   min-h-screen
    px-4 py-10 flex items-center flex-wrap  flex-col lg:flex-row  gap-5  w-full'>
    <div className="left h-full flex-1  mb-5  flex flex-col items-start justify-center">
      <div className="mt-6 space-y-2 text-zinc-600">
  <div className="flex items-center gap-2">
    <MapPin className="h-5 w-5 text-blue-700" />
    <span>Kerala</span>
  </div>
</div>
        <h1
      className='text-[12vw] sm:text-[8vw] md:text-[7.5vw] lg:text-[7.7vw] xl:text-[70px] leading-none  font-semibold'
      >
       <span className='text-blue-600'>
       Sparkling 
        </span> Clean Homes, 
        
          <br/> Every Time.
      </h1>
      <p className='pt-4  text-zinc-400 max-w-md '>
        Keep your workspace and home spotless with our top-notch cleaning service
      </p>
<p className="mt-2 text-zinc-500 text-sm italic">We&apos;re a local team, born and raised — we know the water tanks *and* the weather.</p>
      <div className="flex gap-6 mt-6 mb-5 w-full  text-sm text-zinc-600">
        
  <div>
    <strong className="text-xl text-black">500+</strong><br />
    Customers
  </div>
  <div>
    <strong className="text-xl text-black">4.9★</strong><br />
     Rating
  </div>
  <div>
    <strong className="text-xl text-black">100%</strong><br />
    Satisfaction Guaranteed
  </div>
</div>

      <ContactButton/>
    </div>
      <div className="right shadow  h-full max-h-[500px] max-w-[500px] mx-auto flex-1 min-w-[300px]  overflow-hidden  ">
        <Compare
        firstItem={
            <img src="/before.png" alt=""  />
        }
        secondItem={
                      <img src="/after.png" alt=""  className=' h-full'/>

        }
className='w-fit h-full'
        />
    </div>
    </section>
    <About/>
    <ServicesSection/>
    <Experience/>
    {/* <PromoCard/> */}
    <ContactSection/>
    <Footer/>
</>
  )
}

export default page