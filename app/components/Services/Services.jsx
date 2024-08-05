import Image from "next/legacy/image"
import React from 'react'
import Service from './Service/Service'



const OurServicesCards = [{
  title: 'פתרון הבעיה',
  description: 'אנחנו נפתור את הבעיה עבורכם ונחזיר את החשבון לשימוש',
  image: '/services/issue-solved.png'
  },{
  title: 'הכנת תוכנית פעולה',
  description: 'אנחנו נכין תוכנית פעולה מותאמת אישית לכל לקוח ולכל בעיה',
  image: '/services/planning-solution.png'
  },{
  title: 'אבחון הבעיה',
  description: 'אנחנו נבדוק מה בדיוק הבעיה ואיך אנחנו יכולים לסייע לכם לפתור אותה בהקדם',
  image: '/services/Issue-Diagnose.png'
}]
export default function Services() {
  return (
    <div id='services' className="max-x-max overflow-hidden">
      <div className="h-[150px] max-x-max relative">
        <div className="absolute inset-0 bg-gradient-to-t from-[#01273a] via-[#01273a]/50 to-transparent"></div>
        <div className="bg-[#FB5958] bg-gradient-to-r from-[#FB5958] to-[#F89B29] h-full"></div> 
        
      </div>
      <div className=" bg-[#01273a] text-white p-5 w-full flex-col justify-center text-center"> 
        <div className="flex items-center py-3 justify-end flex-row-reverse gap-3">
          <h1 className="text-4xl font-sans">השירותים שלנו</h1>
          <div className="w-[60%] border-t border-2"></div>  
        </div>
        <div className="">
          <Service services={OurServicesCards} />
        </div>
      </div>
    </div>

  )
}
// #01273a