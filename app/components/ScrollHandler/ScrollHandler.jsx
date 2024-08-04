'use client';
// app/components/Navbar/ScrollHandler.jsx 
import { useEffect } from 'react';
import { useScrollContext } from '@/app/context/ScrollContext'; 

export default function ScrollHandler() {
  const { setIsScrolled } = useScrollContext();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return null;
}
