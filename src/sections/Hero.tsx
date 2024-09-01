// Imports
import memojiImages from '@/assets/images/memoji-computer.png'
import Image from 'next/image';
import ArrowDown from '@/assets/icons/arrow-down.svg'
import grainImage from '@/assets/images/grain.jpg'

export const HeroSection = () => {
  return( 
  <div className='py-32 md:py-48 lg:py-60 relative z-0'>
    <div className="absolute inset-0 -z-30 opacity-5" style={{backgroundImage: `url(${grainImage})`}}></div>
    
    <div className="absolute inset-0 size-[620px]border-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
    
    <div className="container">
      <div className="flex flex-col items-center">
      <Image src={memojiImages} className='size-[100px]' alt= "person"/>
      <div className='bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg'>
        <div className="bg-green-500 size-2.5 rounded-full"></div>
        <div className="text-sm font-medium">Available For New Projects</div>
      </div>
      </div>
      <div className="max-w-lg mx-auto">
      <h1 className='font-serif text-5xl text-center mt-8 tracking-wide'>
        Building Exceptional User Experience</h1>
      <p className='mt-4 text-center text-white/60 md:text-lg'>I specialize in transforming designs into a functional high-performing web application. Lets discuss your next project</p>
      </div>
      <div className="mt-8 md:mt-14 flex flex-col md:flex-row items-center md:justify-center gap-4">
        <button className='inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl'>
          <span className='font-semibold'>Explore My Work</span>
          <ArrowDown className = "size-4"/>
        </button>
        <button className='bg-white text-black inline-flex items-center gap-2 border hover:border-white/15 hover:bg-transparent hover:text-white transition delay-100 px-6 h-12 rounded-xl'>
          <span>👋</span>
          <span className='font-semibold'>Lets Connect</span>
        </button>
      </div>
    </div>
  </div>
);
};
