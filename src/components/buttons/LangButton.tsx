import React from 'react';

export default function LangButton(): JSX.Element {
    return (
        <div className='flex items-center select-none cursor-pointer'>
            <div className='text-[24px] leading-[31.25px] mr-[9px]'>
                EN
            </div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.2929 16.7071C11.6834 17.0976 12.3166 17.0976 12.7071 16.7071L19.0711 10.3431C19.4616 9.95262 19.4616 9.31946 19.0711 8.92893C18.6805 8.53841 18.0474 8.53841 17.6569 8.92893L12 14.5858L6.34315 8.92893C5.95262 8.53841 5.31946 8.53841 4.92893 8.92893C4.53841 9.31946 4.53841 9.95262 4.92893 10.3431L11.2929 16.7071ZM11 14L11 16L13 16L13 14L11 14Z" fill="#3B424A" />
            </svg>
        </div>
    )
}