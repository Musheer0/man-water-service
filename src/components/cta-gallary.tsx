import { ArrowUp } from "lucide-react"
import Link from "next/link"

export default function CTAGallerySection() {
  return (
    <section
      className="relative py-24 px-4 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://res.cloudinary.com/ddvhik9jq/image/upload/v1752143641/posters/gfofjffpjh9ysk7raoab.jpg')",
      }}
    >
      <div className="container mx-auto max-w-4xl text-center text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">See Our Work in Action</h2>
        <p className="text-xl md:text-2xl mb-8 text-gray-200">
          Professional cleaning results that speak for themselves.
      </p>
        <Link
         href={'/gallery'}
         >
          <button 
          className='flex mx-auto group items-center gap-2 rounded-full
           bg-blue-700 p-3 pl-4.5 hover:bg-blue-600 cursor-pointer   text-zinc-50'>
           Veiw our works
            
           <span className='text-zinc-950 relative overflow-hidden bg-zinc-50 rounded-full p-1'>
             <ArrowUp size={15}
             className='transition-all duration-300 ease-in-out  rotate-45 group-hover:translate-x-1/2  group-hover:-translate-y-full'
             />
             <ArrowUp size={15}
             className='absolute top-full transition-all duration-300 ease-in-out rotate-45 left-0 group-hover:left-1/2 translate-x-0 group-hover:-translate-x-1/2 group-hover:top-1/2 group-hover:-translate-y-1/2'/>
           </span>
            </button>
         </Link>
      </div>
    </section>
  )
}
