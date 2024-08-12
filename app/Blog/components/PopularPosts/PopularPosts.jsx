import React from 'react'

const PopularPosts = () => {
  return (
    <div className='w-full flex flex-1 min-w-[300px] mb-5 mt-3'>
        <div>
            <div>
                <div className='flex flex-col gap-3'>
                    {/* tag */}
                    <div>
                        <span className="bg-red-100 rounded-full p-1 text-sm">אבטחת מידע</span>
                    </div>
                    {/* title */}
                    <div>
                        <p className='p-0 m-0 text-sm'>
                            המדרי�� המלא לה��נה על ��ר��יותכם באמצעות VPN
                        </p>
                    </div>
                    {/* author && date */}
                    <div>
                        <span className='text-[12px] text-gray-400'>שם היוצר: 11/08/2024</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PopularPosts
