import React from 'react';

interface PropTypes {
    bgUrl: string;
    content: string;
}

export default function SmallCard ({bgUrl, content}: PropTypes): JSX.Element {
    return (
        <div className='w-[550px] h-[269px] relative flex items-center rounded-[10px]'>
            <img src={bgUrl} alt='bgImage' className='object-fill absolute' />
            <div className='relative z-10  py-[42px] px-[30px] text-[24px] text-white'>
                {
                    content
                }
            </div>
        </div>
    )
}