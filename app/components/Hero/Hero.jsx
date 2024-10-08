'use client'
import Image from "next/legacy/image"
import React, { useState, useEffect } from 'react'
import Typed from 'typed.js';
// import IconsShow from './IconsShow/IconsShow';
import { Link as ScrollLink } from 'react-scroll';
import { useToggledContext } from '@/app/context/ToggledContext';
import HeroImage from '../../../public/hero-2-design.png';
export default function Hero() {    
    const { isToggled } = useToggledContext();
    const [isSmallScreen, setIsSmallScreen] = useState(false); // Local state for responsiveness
  
    useEffect(() => {
      function handleResize() {
        setIsSmallScreen(window.innerWidth <= 768); // Adjust breakpoint as needed
      }
  
      window.addEventListener('resize', handleResize);
      handleResize(); // Initial check on mount
  
      return () => window.removeEventListener('resize', handleResize);  
  
    }, []);

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
    <div id='home' className={`${isToggled ? 'z-0 hidden' : 'z-0 relative top-0 max-x-max overflow-hidden flex lg:h-auto min-h-[100dvh] bg-[#FB5958] bg-gradient-to-r from-[#FB5958] to-[#F89B29] font-sans tracking-wide'}`}>
        <div className={`${isToggled ? 'z-0' : 'z-0 flex flex-col items-center pt-[30px] w-full relative top-0'}`}>
            <div className='max-w-[1400px] min-w-[1000px] max-h-[800px]'>
              <Image src={HeroImage} 
              alt='hacked-person-hero-image'
              objectFit='cover'
              />
            </div>
            <div className="w-full flex justify-center mt-3 z-10 min-h-[200px]">
                <div className="text-center text-[#01273a]">
                    <span className="auto-type text-3xl font-bold my-3"></span> 
                    <p className="md:text-lg text-md my-3 mx-1">אם נחסם לכם החשבון במדיה החברתית או שאתם סתם <br /> זקוקים להתייעץ עם מישהו אנחנו כאן בשבילכם</p>
                </div>
            </div>
            <div className="flex w-full items-center justify-center truncate my-3 py-3">
                <ScrollLink 
                to="ContactUs"
                smooth={true}
                duration={1000}
                href='#ContactUs' 
                className='flex items-center justify-center p-5 w-[250px] cursor-pointer hover:scale-105 duration-500 rounded-full bg-[#C3FA42] hover:bg-[#C3FA42]/20 border-[#C3FA42] text-[#01273a] border font-sans'>צור קשר עכשיו</ScrollLink>
            </div>

        </div>
        {/* <div className="w-full absolute bottom-0">
        </div> */}
    </div>
  )
}
