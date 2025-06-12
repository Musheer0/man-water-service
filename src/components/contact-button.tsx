
import { ArrowUp } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const ContactButton = () => {
  return (
    <Link href={'/#contact'}>
     <button 
          className='flex group items-center gap-2 rounded-full
           bg-blue-700 p-3 pl-4.5 hover:bg-blue-600 cursor-pointer   text-zinc-50'>
            contact us
            
           <span className='text-zinc-950 relative overflow-hidden bg-zinc-50 rounded-full p-1'>
             <ArrowUp size={15}
             className='transition-all duration-300 ease-in-out  rotate-45 group-hover:translate-x-1/2  group-hover:-translate-y-full'
             />
             <ArrowUp size={15}
             className='absolute top-full transition-all duration-300 ease-in-out rotate-45 left-0 group-hover:left-1/2 translate-x-0 group-hover:-translate-x-1/2 group-hover:top-1/2 group-hover:-translate-y-1/2'/>
           </span>
            </button>
    </Link>
  )
}

export default ContactButton