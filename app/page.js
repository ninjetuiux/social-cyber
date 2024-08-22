'use server'
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import { AddContactToMailchimp } from '@/app/actions/AddContactToMailchimp';
import dynamic from 'next/dynamic';
import IconsShow from "./components/Hero/IconsShow/IconsShow";

export const Detailed = dynamic(() => import('./components/Services/DetailedServices/Detailed'), { ssr: false });
export const ContactUs = dynamic(() => import('./components/ContactUs/ContactUs'), { ssr: false });
export const Footer = dynamic(() => import('./components/Footer/Footer'), { ssr: false });



export default async function Home() {
  return (
    <div className="min-h-screen max-x-max overflow-hidden m-0 p-0 box-border">
      <Hero />
      <IconsShow />          
      <Services />
      <Detailed />
      <ContactUs AddContactToMailchimp={AddContactToMailchimp} />
    </div>
  )
}
