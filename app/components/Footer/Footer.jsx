'use client'
import Link from "next/link"
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaTiktok } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaPhone } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { useState, useEffect } from "react";
import React from "react";
import PrivacyPolicyModal from "./Modals/PrivacyPolicyModal";
import AccessibillityPolicyModal from "./Modals/AccessibillityPolicyModal";
import TermsOfUse from "@/app/TermsOfUse/page";
import TermsOfUseModal from "./Modals/TermsOfUseModal";
import Policy from "./Modals/PolicyModal";
import PolicyModal from "./Modals/PolicyModal";
// import TermsOfUse from "../../TermsOfUse/page";

export const WhatsappLink = () => {
    const phoneNumber = "972504848849"; // Replace with your actual phone number
    const formattedPhoneNumber = phoneNumber.replace(/[\s()-]/g, ''); // Remove spaces, dashes, and parentheses
    const whatsappUrl = `https://wa.me/${formattedPhoneNumber}`;
    return (
        <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <IoLogoWhatsapp className="h-8 w-8"/>
        </Link>
      );
  }

export const Footer = () => {
    const email = 'tempwork202@gmail.com'
    const [isMobile, setIsMobile] = useState(false)
    const [isPrivacyPolicyOpen, setIsPrivacyPolicyOpen] = useState(false);
    const [isAccessibillityOpen, setIsAccessibillityOpen] = useState(false);
    const [isTermsOfUseOpen, setIsTermsOfUseOpen] = useState(false);
    const [isPolicyOpen, setIsPolicyOpen] = useState(false);

    const togglePolicy = () => setIsPolicyOpen(!isPolicyOpen);
    const toggleAccessibillity = () => setIsAccessibillityOpen(!isAccessibillityOpen);
    const toggleTermsOfUse = () => setIsTermsOfUseOpen(!isTermsOfUseOpen);
    const togglePrivacyPolicy = () => setIsPrivacyPolicyOpen(!isPrivacyPolicyOpen);
    // const handleClose = () => setOpen(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
            // Set initial value
        handleResize();
        window.addEventListener('resize', handleResize);
    
        // Cleanup event listener on component unmount
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

  return (
    <div id='Footer' className={isMobile ? `w-screen flex-col py-10` : `w-screen flex justify-center p-0 bg-gray-100 py-10`}>
      <div className={isMobile ? `flex-col justify-center items-center text-center` : `relative flex w-[80%] lg:p-10 lg:gap-5 justify-between p-5 font-sans`}>
        <div className={isMobile ? `text-center` : ``}>
            <div className="lg:text-right mb-5 text-center">
                <p className="font-semibold">קישורים מהירים</p>
                <span className="text-sm underline">*בשלבי הקמה*</span>
            </div>
            <div className={isMobile ? `w-full justify-center items-center text-center` : ``}>
                <ul className={isMobile ? `text-center` : `lg:flex-col lg:gap-5 text-right`}>
                    <button disabled>
                    <li>אודותינו</li>
                    </button>
                    <br />
                    <button disabled>
                    <li>מאמרים</li>
                    </button>
                    <br />
                    <button disabled>
                    <li>פרצו לי</li>
                    </button>
                    <br />
                    <button disabled>
                    <li>אתרים מקודמים</li>
                    </button>
                    <br />
                    <button disabled>
                    <li>ביקורות</li>
                    </button>
                </ul>
            </div>
        </div>
        <div className={isMobile ? `mt-4 text-center flex-col w-full justify-center items-center` : ``}>
            <div>
                <p className="mb-5 font-semibold">תקנון ומידע משפטי</p>
            </div>
            <div className={isMobile ? `flex-col justify-center w-full` : ``}>
                <ul className={isMobile ? `text-center` : `text-right`}>
                    <button onClick={togglePolicy}>
                    <li>תקנון</li>
                    </button>
                    <br />
                    <button onClick={togglePrivacyPolicy}>
                    <li>מדיניות פרטיות</li>
                    </button>
                    <br />
                    <button onClick={toggleAccessibillity}>
                    <li>הצהרת נגישות</li>
                    </button>
                    <br />
                    <button onClick={toggleTermsOfUse}>
                    <li>תנאי שימוש</li>
                    </button>
                </ul>
            </div>
        </div>
        <div className={isMobile ? `text-center mt-4` : `text-right`}>
            <div>
                <p className="font-semibold mb-5">יצירת קשר</p>
            </div>
            <div>
                <ul className={isMobile ? `text-center gap-2 justify-center w-full flex` : `flex gap-2 m-0 p-0`}>
                    <Link
                    target="_blank" rel="noopener noreferrer" 
                    href="https://www.facebook.com/profile.php?id=61563039212902">
                    <FaFacebook className="w-8 h-8" />
                    </Link>
                    <Link
                    target="_blank" rel="noopener noreferrer" 
                    href="https://www.instagram.com/s0cial-cyber">
                    <RiInstagramFill className="w-8 h-8" />
                    </Link>
                    <Link href="#Footer" disabled>
                    <FaTiktok className="w-8 h-8" />
                    </Link>
                    <Link href="#Footer" disabled>
                    <IoLogoYoutube className="w-8 h-8" />
                    </Link>
                    <WhatsappLink>
                    <IoLogoWhatsapp className="w-8 h-8" />
                    </WhatsappLink>
                    
                </ul>
            </div>
            <div className="my-3">
                <ul dir='rtl' className={isMobile ? `text-center w-full justify-center flex-col gap-2 items-center` : ``}>
                    <Link href={`tel:${9720504848849}`}>
                    <li className={isMobile ? `text-center flex justify-center items-center gap-2` : `flex gap-2 items-center jusify-center`}>
                        <FaPhone />
                        <p className="underline">
                        טלפון: 050-4848849
                        </p>
                    </li>
                    </Link>
                    <Link href={`mailto:${email}`}>
                    <li className={isMobile ? `text-center flex justify-center items-center gap-2` : `flex gap-2 items-center jusify-center`}>
                        <MdOutlineAlternateEmail />
                        <p className="underline">
                            צור קשר במייל
                        </p>
                    </li>
                    </Link>
                    {isMobile && 
                    <Link href="">
                    <li className={isMobile ? `text-center mt-4` : `flex items-center jusify-center`}>
                        <p>
                        כל הזכויות שמורות לרזיאל מלכה © 2024
                        </p>
                    </li>
                    </Link>
                    }
                </ul>
            </div>
        </div>
        {
            !isMobile &&
            <div className="absolute bottom-0 w-full text-center pt-10 flex justify-center items-start">
                <p className="text-center w-full bottom-0">כל הזכויות שמורות לרזיאל מלכה © 2024</p>
            </div>
        }
      </div>

      {/* MODAL lOGIC */}
      {
        isPrivacyPolicyOpen ? <>
            <PrivacyPolicyModal 
            isPrivacyPolicyOpen={isPrivacyPolicyOpen}
            togglePrivacyPolicy={togglePrivacyPolicy}
            />
        </> : isAccessibillityOpen ? 
            <AccessibillityPolicyModal 
            isAccessibillityOpen={isAccessibillityOpen}
            toggleAccessibillity={toggleAccessibillity}
            />: isTermsOfUseOpen ? 
            <TermsOfUseModal 
            toggleTermsOfUse={toggleTermsOfUse} 
            isTermsOfUseOpen={isTermsOfUseOpen}
            /> 
            :
            isPolicyOpen ?
            <PolicyModal
            isPolicyOpen={isPolicyOpen}
            togglePolicy={togglePolicy}
            />:
        <></>
      }
    </div>
  )
}

export default Footer
