'use client'
import { useSession } from "next-auth/react";
import { useRouter } from 'next/navigation';
import Tiptap from "./Tiptap";
import { useEffect } from 'react';

const WritePostPage = () => {
    const { status } = useSession();
    const router = useRouter();
    
    useEffect(() => {
        if (status === "unauthenticated") {
            router.push('/Blog');
        }
    }, [status, router]);

    if (status === "loading") {
        return <div>טוען...</div>
    }

    return (
        <div dir='rtl' className="max-w-full overflow-hidden min-h-[100dvh]">
          <Tiptap />
        </div>
    )
}

export default WritePostPage;
