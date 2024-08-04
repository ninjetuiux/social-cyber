'use server'
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import { AddContactToMailchimp } from '@/app/actions/AddContactToMailchimp';
import dynamic from 'next/dynamic';
export const Detailed = dynamic(() => import('./components/Services/DetailedServices/Detailed'), { ssr: false });
export const ContactUs = dynamic(() => import('./components/ContactUs/ContactUs'), { ssr: false });
export const Footer = dynamic(() => import('./components/Footer/Footer'), { ssr: false });


export default async function Home() {

  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Detailed />
      <ContactUs AddContactToMailchimp={AddContactToMailchimp} />
    </div>
  )
}
