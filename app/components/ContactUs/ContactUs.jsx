'use client'

import * as z from 'zod'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
const GoogleMap = dynamic(() => import('../GoogleMap/GoogleMap'), { 
  ssr: false, // This ensures the component is only loaded on the client-side
});
import { useSmallScreenContext } from "@/app/context/SmallScreenContext";


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
const contactUsSchema = z.object({
  EMAIL: z.string().email({ message: 'אנא הזן כתובת אימייל תקינה' }),
  FNAME: z.string().min(2, { message: 'שם פרטי צריך להיות לפחות 2 תווים' }),
  LNAME: z.string().min(2, { message: 'שם משפחה צריך להיות לפחות 2 תווים' }),
  PHONE: z.string().min(9, { message: 'אנא הזן מספר פלאפון תקין' }), // Assuming you'll handle number formatting separately
  MMERGE6: z.enum(['facebook', 'instagram', 'googleAds', 'other'], { 
    errorMap: () => ({ message: 'אנא בחר מדיה' }), 
  }),
  MMERGE7: z.string(),
});
const ContactUs = ({AddContactToMailchimp}) => {
  const [isFormSent, setIsFormSent] = useState(false);
  const { isSmallScreen,setIsSmallScreen } = useSmallScreenContext();
  
  const {
    register, 
    handleSubmit, 
    formState: { errors, isValid },
    reset
  } = useForm({
    resolver: zodResolver(contactUsSchema),
    mode: 'onChange',
  });
  const onSubmit = (data) => {
    if(data){
      console.log('this is onSubmit method data:', data)
      setIsFormSent(true)
    }else{
      console.log('onSubmit data hasent arrived', data)
      setIsFormSent(false)
  }};
  useEffect(() => {
    if (isFormSent) {
        console.log("isFormSent changed:", isFormSent);
        console.log("Form submitted successfully, resetting...");
        // Reset the form submission flag
        reset()
        setIsFormSent(false);
    }else{
      console.log('isFormSent could not change:', isFormSent);
    }
}, [isFormSent, reset]);
useEffect(() => {
  console.log("isValid changed:", isValid); // Log when isValid changes
}, [isValid]); 

useEffect(() => {
  console.log("errors changed:", errors); // Log when errors change
}, [errors]); 
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isSmallScreen, setIsSmallScreen]);


  return (
    <div id='ContactUs' className="max-x-max overflow-hidden py-10">
      <div className='flex-col h-26 max-x-max items-center  mb-10'>
        <div className='w-full'>
          <h1 className="text-center text-4xl font-sans font-bold p-2">צור קשר</h1>
          <p className="text-center text-lg font-sans">!צור קשר עוד היום ונחזיר את החשבון שלך לידיים בטוחות</p>  
        </div>
      <div className='border-b-4 w-[50%]' />
      </div>
      <div className={isSmallScreen ? 'flex-col justify-center items-center text-center' : 'w-full flex flex-row-reverse lg:flex-1'}>
        <section className="w-full justify-center flex-[0.5] relative">
            <GoogleMap />
            {/* 32.9696014704144, 35.551171612167984 */}  
        </section>
        <section className={isSmallScreen ? 'justify-center mt-5 w-full flex-1 items-center' : 'w-full flex-[0.5] top-0 text-end flex justify-end items-center'}>
          <form onSubmit={() => isValid ? setIsFormSent(true) && handleSubmit(onSubmit): console.log('the form wasnt valid')} action={AddContactToMailchimp} className={isSmallScreen ? 'justify-center flex-col items-center w-[90%] mx-auto' : '2xl:w-[550px] w-[90%] mx-auto'}>
            {Object.entries(FormInputsGroup).map(([key, input]) => (
              <div key={key} className={isSmallScreen ? '' : "min-w-[350px]"}>
                {input.type === 'select' ? (
                  <>
                  <select
                  {...register(key)}
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
                        className='bg-white font-sans p-3 hover:bg-white placeholder:text-right'
                        style={{ backgroundColor: "white", appearance: 'none' }}
                        dir='RTL'
                      >
                        {optionLabel}
                      </option>
                    ))}
                  </select>
                  {errors[key] && <span className="text-red-500">{errors[key].message}</span>}
                  </>
                ) : (
                  input.type === 'textarea' ? (
                    <>
                    <textarea
                      {...register(key)}
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
                      {errors[key] && <span className="text-red-500">{errors[key].message}</span>}
                    </>
                  ) : (
                    <>
                    <input
                      {...register(key)}
                      type={input.type}
                      placeholder={input.name}
                      name={key}
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
                    {errors[key] && <span className="text-red-500">{errors[key].message}</span>}
                    </>
                  )
                )}
              </div>
            ))}
            <div className='flex w-full justify-center items-center'>
              <button 
                type="submit"
                disabled={!isValid}
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