'use client'
import Image from 'next/image'
import React, { useEffect } from 'react'
import Typed from 'typed.js';
import IconsShow from './IconsShow/IconsShow';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';

export default function Hero() {    
    const isToggled = useSelector(state => state.navbar.isToggled);
    useEffect(() => {
        const options = {
        strings: ['ברוך הבא ל - Social-Cyber.co.il', 'מומחים בשיחזור חשבונות סושיאל שנפרצו/נחסמו/הושבתו', 'אנו מספקים שירות עבור: אינסטגרם, פייסבוק, גוגל מודעות וגם וואטסאפ!'],
        typeSpeed: 30,
        backSpeed: 5,
        loop: true,
        };
    
        const typed = new Typed('.auto-type', options);
    
        return () => {
        typed.destroy(); // Clean up on component unmount
        };
    }, []);

  return (
    <div id='home' className={`${isToggled ? 'z-0 hidden' : 'z-0 relative top-0 w-screen overflow-hidden flex min-h-screen bg-[#FB5958] bg-gradient-to-r from-[#FB5958] to-[#F89B29] font-sans tracking-wide'}`}>
        <div className={`${isToggled ? 'z-0' : 'z-0 flex flex-col items-center pt-[30px] w-full relative top-0'}`}>
            <Image src='/hero-2-design.png' 
            layout='cover'
            width={1200}
            height={600}
            alt=''
            className='' 
            style={{ objectFit: 'cover', maxHeight: '600px', minWidth: '1200px', position: 'relative', top: 0, zIndex: 0}}
            // sizes='(max-width: 768px) 100vw, 800px '
            />
            <div className="w-full absolute flex justify-center top-[50%] mt-[] z-10">
                <div className="text-center text-[#01273a]">
                    <span className="auto-type text-3xl font-bold my-3"></span> 
                    <p className="md:text-lg text-md my-3 mx-1">אם נחסם לכם החשבון במדיה החברתית או שאתם סתם <br /> זקוקים להתייעץ עם מישהו אנחנו כאן בשבילכם</p>
                </div>
            </div>
            <div className="flex w-full items-center justify-center truncate absolute bottom-48 my-3 py-3">
                <ScrollLink 
                to="ContactUs"
                smooth={true}
                duration={1000}
                href='#ContactUs' 
                className='flex items-center justify-center p-5 w-[250px] cursor-pointer hover:scale-105 duration-500 rounded-full bg-[#C3FA42] hover:bg-[#C3FA42]/20 border-[#C3FA42] text-[#01273a] border font-sans'>צור קשר עכשיו</ScrollLink>
            </div>
                <div className=''> 
                    <IconsShow className='' />
                </div>
        </div>
        {/* <div className="w-full absolute bottom-0">
        </div> */}
    </div>
  )
}
