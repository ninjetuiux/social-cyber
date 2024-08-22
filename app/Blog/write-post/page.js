'use client'
import { useSession } from "next-auth/react";
import { useRouter } from 'next/navigation';
import Tiptap from "./Tiptap";


const WritePostPage = () => {
    const { status } = useSession();
    const router = useRouter()
    
    if (status === "loading") {
        return <div>loading...</div>
    }
    if (status === "unauthenticated") {
        router.push('/Blog')
    }

    return (
        <div dir='rtl' className=" min-w-max min-h-[100dvh] py-5 bg-gray-200 ">
          <Tiptap />
        </div>
    )
}

export default WritePostPage;
