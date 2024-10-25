// Imports
import memojiImages from '@/assets/images/memoji-computer.png'
import Image from 'next/image';
import ArrowDown from '@/assets/icons/arrow-down.svg';
import grainImage from '@/assets/images/grain.jpg';
import StarIcons from '@/assets/icons/star.svg';
import { HeroOrbit } from '@/components/HeroOrbit';
import Sparkle from '@/assets/icons/sparkle.svg';

export const HeroSection = () => {
  return( 
  <div className='py-28 md:py-32 lg:py-32 relative z-0 overflow-x-clip'>
    <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
    <div className="absolute inset-0 -z-30 opacity-5" style={{backgroundImage: `url(${grainImage})`}}></div>
    <div className="size-[620px] hero-ring"></div>
    <div className="size-[820px] hero-ring"></div>
    <div className="size-[1020px] hero-ring"></div>
    <div className="size-[1220px] hero-ring"></div>

    <HeroOrbit size={800} rotation={-72}>
      <StarIcons className="size-28 text-emerald-300"/>
    </HeroOrbit>

    <HeroOrbit size={550} rotation={20}>
      <StarIcons className="size-12 text-emerald-300"/>
    </HeroOrbit>

    <HeroOrbit size={590} rotation={98}>
      <StarIcons className="size-8 text-emerald-300"/>
    </HeroOrbit>

    <HeroOrbit size={430} rotation={-14}>
      <Sparkle className="size-8 text-emerald-300/20"/>
    </HeroOrbit>

    <HeroOrbit size={440} rotation={79}>
      <Sparkle className="size-5 text-emerald-300/20" />
    </HeroOrbit>

    <HeroOrbit size={530} rotation={178}>
      <Sparkle className="size-10 text-emerald-300/20" />
    </HeroOrbit>

    <HeroOrbit size={710} rotation={144}>
      <Sparkle className="size-16 text-emerald-300/20"/>
    </HeroOrbit>

    <HeroOrbit size={720} rotation={85}>
      <div className="size-3 rounded-full text-emerald-300/20"/>
    </HeroOrbit>

    <HeroOrbit size={520} rotation={-41}>
      <div className="size-2 rounded-full text-emerald-300/20"/>
    </HeroOrbit>

    <HeroOrbit size={650} rotation={-5}>
      <div className="size-2 rounded-full text-emerald-300/20"/>
    </HeroOrbit>
  </div>
    <div className="container">
      <div className="flex flex-col items-center">
      <Image src={memojiImages} className='size-[100px]' alt= "person"/>
      <div className='bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg'>
        <div className="bg-green-500 size-2.5 rounded-full"></div>
        <div className="text-sm font-medium">Available For New Projects</div>
      </div>
      </div>
      <div className="max-w-lg mx-auto">
      <h1 className='font-serif text-3xl md:text-5xl lg:text-5xl text-center mt-8 tracking-wide'>
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
