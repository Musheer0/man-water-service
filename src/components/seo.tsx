import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Seo = () => {
  return (
    <>
    <section className='hidden'>
  <h1>
    <span>Sparkling</span> Clean Homes,<br />Every Time.
  </h1>

  <p>
    Keep your workspace and home spotless with our top-notch cleaning service
  </p>

  <p>We&apos;re a local team, born and raised — we know the water tanks *and* the weather.</p>

  <div>
    <div>
      <strong>500+</strong><br />
      Customers
    </div>
    <div>
      <strong>4.9★</strong><br />
      Rating
    </div>
    <div>
      <strong>100%</strong><br />
      Satisfaction Guaranteed
    </div>
  </div>
</section>
  <section className='hidden '  id='about'>
        <Image
        src={'/about.avif'}
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
            
     
       </button>
       </Link>

         
    </section>
    </>
  )
}

export default Seo