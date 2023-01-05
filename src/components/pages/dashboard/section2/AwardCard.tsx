import React from 'react';

interface PropType {
    title: string;
    content: string;
}

export default function AwardCard({title, content}: PropType): JSX.Element {
    return (
        <div className='w-[520px] min-w-[520px] max-w-[520px] flex flex-col items-start'>
            <img src='dashboard/images/image 6.png' alt='card' />
            <div className='text-[32px] font-bold mt-[72px]'>
                {
                    title
                }
            </div>
            <div className='text-[24px] mt-[36px]'>
                {
                    content
                }
            </div>
        </div>
    )
}