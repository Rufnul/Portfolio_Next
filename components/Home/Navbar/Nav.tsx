'use client';

import { NavLinks } from '@/constant/constant'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { BiDownload } from 'react-icons/bi'
import { FaCode } from 'react-icons/fa'
import { HiBars3BottomRight } from 'react-icons/hi2'

type props = {
    openNav: () => void;
};

const Nav = ({ openNav }: props) => {
    const [navBg, SetnavBg] = useState(false);
    useEffect(() => {
        const handler = () => {
            if (window.scrollY >= 90) SetnavBg(true);
            if (window.scrollY < 90) SetnavBg(false);
        };
        window.addEventListener("scroll", handler);

        return () => window.removeEventListener('scroll', handler)
    }, [])
    return (
        <div className={`transition-all ${navBg ? "backdrop-blur-lg shadow-lg" : "bg-transparent"
            } duration-200 h-[12vh] z-[10000] fixed w-full`}>
            <div className='flex items-center h-full justify-between w-[90%] mx-auto'>
                {/* logo */}
                <div className='flex items-center space-x-2'>
                    <div className="w-10 h-10 bg-[crimson] rounded-full flex items-center justify-center">
                        <FaCode className="text-white w-5 h-5" />
                    </div>
                    <h1 className='text-xl hidden sm:block md:text-2xl text-white font-bold'>Rufnul</h1>
                </div>
                {/* navlinks */}
                <div className='hidden lg:flex items-center space-x-10'>
                    {NavLinks.map((link) => {
                        return <Link key={link.id} href={link.url} className='text-base hover:text-[goldenrod] hover:font-bold text-white font-medium transition-all duration-200'>
                            <p>{link.label}</p>
                        </Link>
                    })}
                </div>
                {/* buttons */}
                <div className='flex item-center space-x-4'>
                    {/* cv button */}
                    <button className='px-8 py-3.5 text-sm cursor-pointer rounded-lg bg-[crimson] hover:bg-[goldenrod] hover:font-bold transition-all duration-300 text-white flex item-center space-x-2'>
                        <BiDownload className='w-5 h-5' />
                        <span>Download CV</span>
                    </button>
                    {/* burger Menu */}
                    <HiBars3BottomRight
                        onClick={openNav}
                        className='w-8 h-8 cursor-pointer text-white lg:hidden ' />
                </div>
            </div>
        </div>
    )
}

export default Nav