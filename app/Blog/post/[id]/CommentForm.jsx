'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { addComment } from '@/app/actions/AddComment';


export default function CommentForm({ postId }) {
    const [comment, setComment] = useState('');
    const { data: session } = useSession();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!session) {
            alert('You must be logged in to comment');
            return;
        }
        await addComment(postId, comment);
        setComment('');
    };

    return (
        <form dir='rtl' onSubmit={handleSubmit} className="bg-gray-50 items-center flex flex-1 rounded-xl">
            <div className='flex items-center justify-center flex-[0.2] w-full'>
                <button type='submit' className="bg-orange-300 py-4 px-16 rounded-full flex justify-center">שלח</button>
            </div>
            <div className='flex-[0.8] w-full'>
                <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    rows='3'
                    placeholder="השאר תגובה לפוסט זה."
                    className="w-full border-2 rounded-xl border-gray-100 outline-none placeholder:mx-3 placeholder:text-black p-2 resize-none"
                />
            </div>
        </form>
    );
}