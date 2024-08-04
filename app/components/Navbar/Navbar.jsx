'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { useSelector, useDispatch } from 'react-redux';
import { toggleMenu, setIsScrolled, wasScrolled } from '../../reduxToolkit/features/NavbarSlice';
import { Link as ScrollLink } from 'react-scroll';

const toggledMenuItems = [
    { text: 'דף הבית', href: '/#' },
    { text: 'השירותים שלנו', href: '/#services' },
    { text: 'מי אנחנו', href: '/#about' },
    { text: 'צור קשר', href: '/#ContactUs' },
  ];
  
export default function Navbar({ }) {
    const isToggled = useSelector(state => state.navbar.isToggled); // Get state from Redux
    const isScrolled = useSelector(state => state.navbar.isScrolled);
    const wasScrolled = useSelector(state => state.navbar.wasScrolled);
    const dispatch = useDispatch();


    const handleToggleMenu = () => {
        dispatch(toggleMenu()); // Dispatch the toggleMenu action
      };

      useEffect(() => {
        const handleScroll = () => {
          dispatch(setIsScrolled(window.scrollY > 0)); 
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, [dispatch]);


  return (
    <div 
    className={`sticky top-0 z-50 shadow-sm m-0 p-0 tracking-wide font-sans items-start transition-colors duration-300 ${
        (isScrolled || wasScrolled) ? 'bg-white' : 'bg-[#FB5958] bg-gradient-to-r from-[#FB5958] to-[#F89B29]' 
      }`}
    >
        <div className="max-x-max flex justify-between shadow-gray-100 items-center flex-1 h-16">
            <div className="flex-start flex-0.2 max-h-16 flex-shrink">
            <ScrollLink 
                    to="home"
                    smooth={true}
                    duration={1000}
                    href='/#home'
                    className="cursor-pointer z-20">
                <Image
                src={'/website-logo.png'}
                alt='navbar-logo'
                fit='cover'
                width={250}
                height={100}
                // style={{maxHeight:'70px', maxWidth: '250px', scale: 1.3 }}
                />
            </ScrollLink>
            </div>
            <div className="hidden lg:flex lg:flex-0.8 justify-end text-center flex-grow items-center">
                <ul className="flex flex-row-reverse gap-5 text-center justify-center lg:pr-16">
                    <ScrollLink
                    to="home"
                    smooth={true}
                    duration={1000}
                    className="cursor-pointer"
                    href='/#home'>
                        <li>דף הבית</li>
                    </ScrollLink>

                    <ScrollLink 
                    to="services"
                    smooth={true}
                    duration={1000}
                    href='/#services'
                    className="cursor-pointer">
                        <li>השירותים שלנו</li>
                    </ScrollLink>

                    <ScrollLink 
                    to="about"
                    smooth={true}
                    duration={1000}
                    className="cursor-pointer"
                    href='/#about'>
                        <li>מי אנחנו</li>
                    </ScrollLink>

                    <ScrollLink 
                    to="ContactUs"
                    smooth={true}
                    duration={1000}
                    className="cursor-pointer"
                    href='/#ContactUs'>
                        <li>צור קשר</li>
                    </ScrollLink>
                </ul>
            </div>
            <div className="lg:hidden flex flex-0.2 flex-shrink justify-end z-100">
                    <GiHamburgerMenu 
                    onClick = {handleToggleMenu}
                    className='cursor-pointer flex w-12' 
                    />
                {isToggled && ( 
                <div className="lg:hidden absolute bg-[#FB5958] bg-gradient-to-r from-[#FB5958] to-[#F89B29] w-full h-screen top-16 right-0 z-90">
                    <ul className="flex flex-col gap-5 text-center justify-center h-screen items-center text-[#01273a] cursor-pointer">
                    {toggledMenuItems.map((item) => (
                        <Link 
                        key={item.href}
                        href={item.href} 
                        className="w-[250px] h-10 border border-[#C3FA42] transition-all duration-500 hover:bg-[#C3FA42]/20 bg-[#C3FA42] hover:scale-105 flex items-center justify-center rounded-md" 
                        onClick={handleToggleMenu}
                        >
                        <li>{item.text}</li>
                        </Link>
                    ))}
                    </ul>
                </div>
                )}
            </div>
        </div>
    </div>
  )
}
