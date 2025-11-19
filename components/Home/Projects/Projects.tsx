import Image from 'next/image'
import React from 'react'

const Projects = () => {
    return (
        <div className='pt-16 pb-16'>
            <h1 className='text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white'>
                A Small Section of Recent <br /> <span className='text-cyan-300'>Project</span>
            </h1>
            <div className='w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-16'>
                {/* 1st project */}
                <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="0">
                    <Image
                        src={'/images/p1.jpg'}
                        alt='img'
                        width={800}
                        height={650}
                        className='rounded-xl'
                    />
                    <h1 className='mt-4 text-xl sm:text-2xl font-semibold text-white'>Modern Finance Dashboard UI</h1>
                    <h1 className='p-2 font-medium text-white/80'>Apps, UI/UX</h1>
                </div>
                {/* 2nd project */}
                <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="100">
                    <Image
                        src={'/images/p2.jpg'}
                        alt='img'
                        width={800}
                        height={650}
                        className='rounded-xl'
                    />
                    <h1 className='mt-4 text-xl sm:text-2xl font-semibold text-white'>Portfolio Website for Creatives</h1>
                    <h1 className='p-2 font-medium text-white/80'>Branding, Motion</h1>
                </div>
                {/* 3rd project */}
                <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="200">
                    <Image
                        src={'/images/p3.jpg'}
                        alt='img'
                        width={800}
                        height={650}
                        className='rounded-xl'
                    />
                    <h1 className='mt-4 text-xl sm:text-2xl font-semibold text-white'>Brand Identity for Startups</h1>
                    <h1 className='p-2 font-medium text-white/80'>Branding, Motion</h1>
                </div>
                {/* 4th project */}
                <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="300">
                    <Image
                        src={'/images/p4.jpg'}
                        alt='img'
                        width={800}
                        height={650}
                        className='rounded-xl'
                    />
                    <h1 className='mt-4 text-xl sm:text-2xl font-semibold text-white'>Saas Dashboard Development</h1>
                    <h1 className='p-2 font-medium text-white/80'>Apps, UI/UX</h1>
                </div>
            </div>
        </div>
    )
}

export default Projects