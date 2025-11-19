import React from 'react'
import ResumeCard from './ResumeCard'
import { FaCodepen, FaJava, FaReact } from 'react-icons/fa'
import { BsDatabase } from 'react-icons/bs'
import { FaGear } from 'react-icons/fa6'

const Resume = () => {
  return (
    <div className='pt-20 pb-16'>
      <div className='w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10'>

        {/* Work Experience */}
        <div>
          <h1 className='text-3xl sm:text-4xl font-bold text-white'>
            My Work <span className='text-cyan-200'>Experience</span>
          </h1>

          <div className='mt-10' data-aos="zoom-in" data-aos-anchor-placement="top-center">
            <ResumeCard Icon={FaCodepen} role="Full-Stack Developer" />
            <ResumeCard Icon={FaReact} role="Front-End Developer" />
            <ResumeCard Icon={BsDatabase} role="Back-End Developer" />
          </div>
        </div>

        {/* Education */}
        <div >
          <h1 className='text-3xl sm:text-4xl font-bold text-white'>
            My <span className='text-cyan-200'>Education</span>
          </h1>
          <div className='mt-10' data-aos="zoom-out" data-aos-anchor-placement="top-center" data-aos-delay="300">
            <ResumeCard Icon={FaReact} role="MERN Full Stack Certification" date='May 2025 - Nov 2025' />
            <ResumeCard Icon={FaJava} role="Java Full Stack Certification" date='May 2025 - Nov 2025' />
            <ResumeCard Icon={FaGear} role="B.Tech - Mech" date='June 2014 - May 2018' />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Resume
