'use client'
import Image from 'next/image'
import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import Typewriter from 'typewriter-effect'
import ParticlesHero from './ParticleBackground'

const Hero = () => {
  return (
    <div id='1' className='overflow-relative h-screen flex items-center justify-center text-gray-300 overflow-hidden flex-col'>
      <ParticlesHero />
      <div className='relative z-10 flex flex-col items-center'>
        <Image src={'/images/rufnul_afrideen.jpg'}
          alt='Hero Image'
          width={150}
          height={150}
          className='rounded-full border-8 border-[#6A0F1B]'
          data-aos='fade-up'
        />
        <h1 data-aos='fade-up' data-aos-delay="400" className='text-2xl sm:text-4xl md:text-5xl lg:text-6xl mt-6 text-center font-bold tracking-wide'>
          Creating Web products,<br /> brands, <span className='text-cyan-200'>and experiences.</span>
        </h1>
        <h2 data-aos='fade-up' data-aos-delay="200" className='mt-5 text-sm px-2 text-center sm:text-2xl font-medium flex items-center'>
          Hi I&apos;m Rufnul - A Passionate
          <span className='text-cyan-200 font-bold'>
            <Typewriter options={{
              strings: [
                'Frontend Developer',
                'Backend Developer',
                'Web Developer',
              ],
              autoStart: true,
              loop: true,
              delay: 75,
              deleteSpeed: 50,
              wrapperClassName: "pl-2",
            }} />
          </span>
        </h2>
        <button data-aos='fade-up' data-aos-delay="300" className='mt-6 px-10 py-4 bg-[crimson] hover:bg-red-500 hover:font-bold transition-all duration-300 cursor-pointer rounded-full text-lg font-medium'>
          <span>See my Work</span>
          <BsArrowRight className='w-5 h-5 ml-2 inline-block' />
        </button>
      </div>
    </div>
  )
}

export default Hero