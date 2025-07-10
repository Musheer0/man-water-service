import ContactSection from "@/components/contact"
import PhotoGrid from "./_components/photo-grid"
import { InstagramIcon } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center  text-gray-800">
        See the Difference We Make
          </h1>
          <p className="text-zinc-400 text-center mb-8">Proof We Don&apos;t Play When It Comes to Clean.</p>
          <PhotoGrid />
        </div>
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
        <ContactSection/>
      </div>
    </main>
  )
}
