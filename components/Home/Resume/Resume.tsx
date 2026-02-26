import React from 'react'
import ResumeCard from './ResumeCard'
import { FaReact, FaJava, FaIndustry } from 'react-icons/fa'
import { BsDatabase } from 'react-icons/bs'
import { FaGear } from 'react-icons/fa6'

const Resume: React.FC = () => {
  return (
    <div className='pt-20 pb-16'>
      <div className='w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10'>

        {/* ================= WORK EXPERIENCE ================= */}
        <div>
          <h1 className='text-3xl sm:text-4xl font-bold text-white'>
            My Work <span className='text-cyan-200'>Experience</span>
          </h1>

          <div className='mt-10 space-y-6' data-aos="zoom-in">

            {/* Tech Mahindra */}
            <ResumeCard
              Icon={FaReact}
              role="Senior Software Engineer"
              company="Tech Mahindra"
              location="Chennai, India"
              date="Jan 2026 – Present"
              description="Driving development of enterprise web systems with strong emphasis on scalability, performance optimization, and clean architecture standards."
            />

            {/* Contus */}
            <ResumeCard
              Icon={BsDatabase}
              role="Senior Software Engineer"
              company="Contus Tech"
              location="Chennai, India"
              date="Jul 2023 – Dec 2025"
              description="Worked on enterprise-level applications contributing to backend logic, scalable architecture, and performance-focused feature development."
            />

            {/* Rifluxyss */}
            <ResumeCard
              Icon={FaReact}
              role="Associate Software Engineer"
              company="Rifluxyss Softwares"
              location="Chennai, India"
              date="May 2021 – Jul 2023"
              description="Built responsive web interfaces and backend integrations while strengthening debugging, architecture, and API development skills."
            />

            {/* MSR */}
            <ResumeCard
              Icon={FaIndustry}
              role="Production Supervisor"
              company="MSR Industries Pvt Ltd"
              location="Nagapattinam, India"
              date="Oct 2019 – May 2021"
              description="Managed production operations, workforce coordination, and process optimization while ensuring efficiency and delivery timelines."
            />
          </div>
        </div>


        {/* ================= EDUCATION ================= */}
        <div>
          <h1 className='text-3xl sm:text-4xl font-bold text-white'>
            My <span className='text-cyan-200'>Education</span>
          </h1>

          <div className='mt-10 space-y-6' data-aos="zoom-out">

            <ResumeCard
              Icon={FaReact}
              role="MERN Full Stack Certification"
              date="2025"
              description="Comprehensive training covering MongoDB, Express, React, and Node.js with hands-on full stack application development."
            />

            <ResumeCard
              Icon={FaJava}
              role="Java Full Stack Certification"
              date="2025"
              description="Focused program covering Java, Spring Boot, REST APIs, databases, and enterprise application architecture."
            />

            <ResumeCard
              Icon={FaGear}
              role="B.Tech Mechanical Engineering"
              date="2014 – 2018"
              description="Engineering degree that built strong analytical thinking, problem-solving ability, and structured technical reasoning."
            />

          </div>
        </div>

      </div>
    </div>
  )
}

export default Resume