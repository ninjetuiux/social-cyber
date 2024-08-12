'use client'
import { signIn, useSession } from 'next-auth/react';


const Login = () => {
  const {data,status} = useSession();

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

  return (
    <div className='flex justify-center items-center min-h-[100dvh]'>
      <div className='min-w-[450px] min-h-[550px] flex justify-center items-center bg-gray-200'>
        <div className='flex flex-col gap-6'>
          <button className="bg-red-500 p-5 rounded-lg" onClick={handleGoogleSignIn}>התחברות באמצעות גוגל</button>
          <button className="bg-blue-400 p-5 rounded-lg">התחברות באמצעות פייסבוק</button>  
        </div>
      </div>
    </div>
  )
}

export default Login
