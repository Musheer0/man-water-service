import { ArrowUp} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    const links = [
        {
            label:'Home',
            href: '/'
        },
        {
            label:'About',
            href: '/#about'
        },
        {
            label:'Service',
            href: '/#service'
        },
    ]
  return (
<nav className="w-full movedown flex px-4 py-3 pt-5 items-center justify-between">
          <div className="logo">
          <div className="logo flex items-center gap-1">
              <Image
            width={40}
            height={40}
            src={'/logo.png'}
            alt='man waterlogo image'
            className='mix-blend-multiply'
            />
            <p className='text-sm font-semibold uppercase'>man water service</p>
          </div>
          </div>
          <div className="links flex items-center gap-7 text-[15px]  font-semibold  px-5 py-2 rounded-full">
            {links.map((link,i)=>{
                return (
                    <Link href={link.href} key={i}
                    className='hover:underline hover:text-sky-900'
                    >
                    {link.label}
                    </Link>
                )
            })}
          </div>
         <Link
         href={'/#contact'}
         >
          <button 
          className='sm:flex hidden group items-center gap-2 rounded-full
           bg-blue-700 p-2 pl-4.5 hover:bg-blue-600 cursor-pointer   text-zinc-50'>
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
        </nav>
  )
}

export default Navbar