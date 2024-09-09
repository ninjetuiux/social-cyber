'use client'
import { signIn, useSession } from 'next-auth/react';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { AiOutlineLogin } from "react-icons/ai";
import LoginOverlay from '../../../public/Auth/login-overlay.png'
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/utils/auth';

// import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';


const Login = () => {
  const {data, status} = useSession();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState('');
  const router = useRouter();


  // 
  // google sign in
  // 
  const handleGoogleSignIn = async () => {
    try{
      await signIn('google', { callbackUrl: '/' })
    }catch{
      console.error('error signing in with google', error)
    }
  }
  if(status === 'loading'){
    return <div>טוען...</div>
  }
  // 
  // facebook sign in
  // 
  const handleFacebookSignIn = async () => {
    try{
      await signIn('facebook', { callbackUrl: '/' })
    }catch{
      console.error('error signing in with facebook', error)
    }
  }
  
  return (
    <div className='flex justify-center items-center min-h-[100dvh] w-[100dvw] relative'>
      <Image src={LoginOverlay} alt='logo' className='absolute top-0 left-0 w-full h-full object-cover z-0' />
      <div className='max-w-[1536px] z-10'>
        <div className='min-w-[450px] m-10 z-20 bg-white/50 shadow-4xl p-10 flex flex-col items-center border-[1px] border-black rounded-xl'>
          <h1 className='text-2xl font-bold mt-5 mb-2'>התחברות / הרשמה</h1>
          <p className='text-sm text-gray-600 mb-5 whitespace-wrap max-w-[400px] text-right border-b-2 pb-2 '>הרשמו עכשיו ותתעדכנו בכל הדרכים ניתן איך להשאר מוגנים ולהגן על חשבונות המדיה שלכם!</p>
          <div className='flex flex-col items-center gap-2 mb-2 pb-4'>
            <hr className='w-full' />
          </div>
          <div className='flex flex-col gap-6'>
            <button 
            className="
            p-3
            rounded-lg
            flex
            flex-row-reverse
            max-w-[280px]
            items-center
            gap-2
            border-[1px]
            border-gray-200
            hover:bg-[#fa7842]/20
            transition-colors
            duration-300
            " onClick={handleGoogleSignIn}>
              <span className='w-[40px] flex justify-end'>
                <FcGoogle className='w-10 h-10' />
              </span>
              <span>התחברות באמצעות גוגל</span>
            </button>
            <button 
            className="
            p-3
            rounded-lg
            flex
            flex-row-reverse
            max-w-[280px]
            items-center
            gap-2
            border-[1px]
            border-gray-200
            hover:bg-[#fa7842]/20
            transition-colors
            duration-300
            " onClick={handleFacebookSignIn}>
              <span className='w-[40px]'>
                <FaFacebook  className='w-10 h-10 text-blue-500' />
              </span>
              <span>התחברות באמצעות פייסבוק</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
