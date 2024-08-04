'use client'

import Image from 'next/image';
import React, { useEffect, useState } from 'react';


const FormInputsGroup = {
  EMAIL: {
    name: 'אימייל',
    type: 'text',
    id: '1',
  },
  FNAME: {
    name: 'שם פרטי',
    type: 'text',
    id: '2',
  },
  LNAME: {
    name: 'שם משפחה',
    type: 'text',
    id: '3',
  },
  PHONE: {
    name: 'פלאפון',
    type: 'phone',
    id: '4',
  },
  MMERGE6: {
    name: 'בחר את המדיה עבורה תרצה שירות',
    type: 'select',
    options: {
      message: 'בחר את המדיה עבורה תרצה שירות',
      facebook: 'facebook',
      instagram: 'instagram',
      googleAds: 'googleAds',
      other: 'other'
    },
    id: '5',
  },
  MMERGE7: {
    name: 'תספר לנו כל מה שתוכל על הבעיה שאתה חווה',
    type: 'textarea',
    id: '6',
  },
};

const ContactUs = ({AddContactToMailchimp}) => {
  const [myFormState, setMyFormState] = useState({
    EMAIL: '',
    FNAME: '',
    LNAME: '',
    PHONE: '',
    MMERGE6: '',
    MMERGE7: ''
  });
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const handleChange = (key, value) => {
    setMyFormState((prev) => ({ ...prev, [key]: value }));
  };

  useEffect(() => {
    console.log(myFormState);
  }, [myFormState]);

  return (
    <div id='ContactUs' className="w-screen overflow-hidden py-10">
      <div className='flex-col h-26 w-screen items-center'>
        <div className='w-full'>
          <h1 className="text-center text-4xl font-sans font-bold p-2">צור קשר</h1>
          <p className="text-center text-lg font-sans">!צור קשר עוד היום ונחזיר את החשבון שלך לידיים בטוחות</p>  
        </div>
      <div className='border-b-4 w-[50%]' />
      </div>
      <div className={isSmallScreen ? 'flex-col justify-center items-center text-center' : 'w-full flex flex-row-reverse lg:flex-1'}>
        <section className="w-full flex-[0.5]">
          <Image
            src="/contactUs/contactUs.jpg"
            alt="contact-us"
            layout='responsive'
            width={1920}
            height={1080}
          />
        </section>
        <section className={isSmallScreen ? 'justify-center w-full flex-1 items-center' : 'w-full flex-[0.5] top-0 text-end flex justify-end items-center'}>
          <form action={AddContactToMailchimp} className={isSmallScreen ? 'justify-center flex-col items-center w-[90%] mx-auto' : '2xl:w-[550px] w-[90%] mx-auto'}>
            {Object.entries(FormInputsGroup).map(([key, input]) => (
              <div key={key} className={isSmallScreen ? '' : "min-w-[350px]"}>
                {input.type === 'select' ? (
                  <select
                    value={myFormState[key] ? myFormState[key] && console.log(myFormState[key], 'this is the FormState[Key] value'): ''}
                    onChange={(e) => handleChange(key, e.target.value)}
                    name={key}
                    style={{ backgroundColor: "transparent" }}
                    className="
                      w-full
                      text-right
                      p-3
                      outline-none
                      text-gray-400
                      bg-none
                      border-b-2
                      border-gray-200
                      transition-all
                      duration-500
                      focus:border-b-black
                      focus:duration-500
                      focus:transition-all
                      focus:placeholder-black
                    "
                  >
                    {Object.entries(input.options).map(([optionValue, optionLabel]) => (
                      <option
                        key={optionValue}
                        value={optionValue}
                        className='bg-white font-sans p-3 hover:bg-white'
                        style={{ backgroundColor: "white", appearance: 'none' }}
                        dir='RTL'
                      >
                        {optionLabel}
                      </option>
                    ))}
                  </select>
                ) : (
                  input.type === 'textarea' ? (
                    <textarea
                      value={myFormState[key]}
                      onChange={(e) => handleChange(key, e.target.value)}
                      placeholder={input.name}
                      name={key}
                      className='
                        w-full
                        text-right
                        p-3
                        outline-none
                        border-b-2
                        transition-all
                        duration-500
                        focus:border-b-black
                        focus:duration-500
                        focus:transition-all
                        focus:placeholder-black
                      '
                    />
                  ) : (
                    <input
                      type={input.type}
                      placeholder={input.name}
                      value={myFormState[key]}
                      name={key}
                      onChange={(e) => handleChange(key, e.target.value)}
                      className="
                        w-full
                        text-right
                        p-3
                        outline-none
                        border-b-2
                        transition-all
                        duration-500
                        focus:border-b-black
                        focus:duration-500
                        focus:transition-all
                        focus:placeholder-black
                      "
                    />
                  )
                )}
              </div>
            ))}
            <div className='flex w-full justify-center items-center'>
              <button type="submit"
                className="
                  border-[1px]
                  my-5
                  border-black
                  py-4
                  rounded-lg
                  px-16
                  cursor-pointer
                  hover:bg-gray-100
                  hover:duration-500
                  hover:transition-all
                ">שלח</button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default ContactUs