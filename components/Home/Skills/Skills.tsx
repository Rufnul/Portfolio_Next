'use client'
import React from 'react'
import {
    SiJavascript,
    SiReact,
    SiNextdotjs,
    SiNodedotjs,
    SiTailwindcss,
    SiTypescript,
    SiSpringboot,
    SiPython,
    SiDjango,
    SiAngular,
    SiBootstrap,
    SiExpress,
    SiMongodb,
    SiMysql,
    SiGithub,
    SiHtml5,
    SiCss3,
    SiRedux,
    SiFastapi,
} from 'react-icons/si';

import { FaJava } from 'react-icons/fa';
import Tilt from 'react-parallax-tilt'


const skills = [
    {
        name: 'Java',
        icon: <FaJava />,
        percentage: 88,
    },
    {
        name: 'Spring Boot',
        icon: <SiSpringboot />,
        percentage: 86,
    },
    {
        name: 'REST APIs',
        icon: <SiFastapi />,
        percentage: 90,
    },
    {
        name: 'Python',
        icon: <SiPython />,
        percentage: 85,
    },
    {
        name: 'Django',
        icon: <SiDjango />,
        percentage: 83,
    },
    {
        name: 'HTML',
        icon: <SiHtml5 />,
        percentage: 98,
    },
    {
        name: 'CSS',
        icon: <SiCss3 />,
        percentage: 95,
    },
    {
        name: 'Javascript',
        icon: <SiJavascript />,
        percentage: 89,
    },
    {
        name: 'TypeScript',
        icon: <SiTypescript />,
        percentage: 87,
    },
    {
        name: 'React.Js',
        icon: <SiReact />,
        percentage: 92,
    },
    {
        name: 'Next.Js',
        icon: <SiNextdotjs />,
        percentage: 90,
    },
    {
        name: 'Redux',
        icon: <SiRedux />,
        percentage: 80,
    },
    {
        name: 'Angular',
        icon: <SiAngular />,
        percentage: 82,
    },
    {
        name: 'Node.Js',
        icon: <SiNodedotjs />,
        percentage: 89,
    },
    {
        name: 'Express.Js',
        icon: <SiExpress />,
        percentage: 84,
    },
    {
        name: 'MongoDB',
        icon: <SiMongodb />,
        percentage: 88,
    },
    {
        name: 'MySQL',
        icon: <SiMysql />,
        percentage: 90,
    },
    {
        name: 'TailwindCSS',
        icon: <SiTailwindcss />,
        percentage: 94,
    },
    {
        name: 'Bootstrap',
        icon: <SiBootstrap />,
        percentage: 91,
    },
    {
        name: 'Git & GitHub',
        icon: <SiGithub />,
        percentage: 92,
    },
]


const Skills = () => {
    return (
        <div className='text-white pt-16 pb-16'>
            <h1 className='text-center text-2xl md:text-4xl xl:text-5xl font-bold'>
                My <span className='text-cyan-300'>Skills</span>
            </h1>

            <div className='flex flex-wrap justify-center gap-6 mt-16'>
                {skills.map((skill, i) => (
                    <Tilt key={skill.name} scale={1.2} transitionSpeed={400}>
                        <div data-aos="flip-right" data-aos-anchor-placement="top-center" data-aos-delay={i * 25} className='bg-[#14134145] text-center w-40 h-48 rounded-3xl flex flex-col items-center justify-center shadow-lg transition hover:scale-105 backdrop-blur-md'>
                            <div className='text-5xl mb-4 text-gray-300'>
                                {skill.icon}
                            </div>
                            <p className='text-2xl font-semibold'>{skill.percentage}%</p>
                            <p className='text-purple-400 mt-1'>{skill.name}</p>
                        </div>
                    </Tilt>
                ))}
            </div>
        </div>
    )
}

export default Skills
