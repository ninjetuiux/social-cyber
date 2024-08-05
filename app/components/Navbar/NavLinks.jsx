// app/components/Navbar/NavLinks.jsx (Client Component)
'use client';

import { useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { GiHamburgerMenu } from "react-icons/gi";
import { useScrollContext } from '@/app/context/ScrollContext';
import { useToggledContext } from '@/app/context/ToggledContext';
import Link from 'next/link';
import Image from "next/legacy/image";
import Logo from '../../../public/Logo.svg';
import BlackLogo from '../../../public/black-Logo.svg';
const toggledMenuItems = [
    { text: 'דף הבית', href: 'home' }, // Use anchor IDs for smooth scrolling
    { text: 'השירותים שלנו', href: 'services' },
    { text: 'מי אנחנו', href: 'about' },
    { text: 'צור קשר', href: 'ContactUs' },
];

export default function NavLinks() {
//   const isToggled = useSelector(state => state.navbar.isToggled);
  const { isScrolled, setIsScrolled } = useScrollContext();
  const { isToggled, setIsToggled } = useToggledContext();

  
  const handleToggleMenu = () => {
    setIsToggled(!isToggled); // Update the state using the context's function
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0); 
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled]);

  return (
    <>
    <div 
      className={` tracking-wide font-sans items-start transition-colors duration-300 w-full justify-between flex h-16 ${
        isScrolled ? 'bg-white' : 'bg-[#FB5958] bg-gradient-to-r from-[#FB5958] to-[#F89B29]' 
      }`}
    >
        <div className="flex-0.2 max-h-16 h-16 w-[250px] flex-shrink items-center">
          <Link href="/" className='h-full flex items-center'>
          {
            isScrolled ? 
            <Image
              src = {Logo}
              alt='navbar-logo'
              quality={100}
              unoptimized 
            />:
            <Image
              src = {BlackLogo}
              alt='navbar-logo'
              quality={100}
              unoptimized 
            />
          }
          </Link>
        </div>
      {/* Navigation links for larger screens */}
      <div className="hidden lg:flex lg:flex-0.8 justify-end text-center flex-grow items-center h-full">
        <ul className="flex flex-row-reverse gap-5 text-center items-center justify-center lg:pr-16">
          {toggledMenuItems.map((item) => (
            <ScrollLink 
              key={item.href}
              to={item.href} 
              smooth={true}
              duration={1000}
              className="cursor-pointer items-center flex"
              // Prevent default link behavior to avoid page jumps
              onClick={(e) => e.preventDefault()}
            >
              <li>{item.text}</li>
            </ScrollLink>
          ))}
        </ul>
      </div>

      {/* Hamburger menu for smaller screens */}
      <div className="lg:hidden flex items-center h-16 flex-0.2 flex-shrink justify-end z-100">
        <GiHamburgerMenu 
          onClick={handleToggleMenu}
          className='cursor-pointer flex w-12' 
        />
        {isToggled && (
          <div className="lg:hidden absolute bg-[#FB5958] bg-gradient-to-r from-[#FB5958] to-[#F89B29] w-full h-screen top-16 right-0 z-90">
            <ul className="flex flex-col gap-5 text-center justify-center h-screen items-center text-[#01273a] cursor-pointer">
              {toggledMenuItems.map((item) => (
                <ScrollLink
                  key={item.href}
                  to={item.href} 
                  smooth={true}
                  duration={1000}
                  className="w-[250px] h-10 border border-[#C3FA42] transition-all duration-500 hover:bg-[#C3FA42]/20 bg-[#C3FA42] hover:scale-105 flex items-center justify-center rounded-md" 
                  onClick={handleToggleMenu}
                >
                  <li>{item.text}</li>
                </ScrollLink>
              ))}
            </ul>
          </div>
        )}
      </div>
      </div>
    </>
  );
}
