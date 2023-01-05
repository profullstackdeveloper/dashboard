import React from 'react';

interface PropTypes {
    bgUrl: string;
    content: string;
}

export default function BigCard({ bgUrl, content }: PropTypes): JSX.Element {
    return (
        <div className='w-[897px] h-[602px] relative flex items-end rounded-[10px]'>
            <img src={bgUrl} alt='bgImage' className='object-fill absolute' />
            <div className='relative z-10 ml-[56px] max-w-[677px] text-[24px] text-white'>
                {
                    content
                }
                <div className='flex items-center mt-[8px] mb-[33px]'>
                    <svg width="36" height="6" viewBox="0 0 36 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 3H36" stroke="#707D8B" stroke-width="5" />
                    </svg>
                    <div className='ml-[18px]'>
                        <svg width="32" height="17" viewBox="0 0 32 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.704 17V0.199999H6.152C8.12 0.199999 9.736 0.543999 11 1.232C12.28 1.92 13.224 2.896 13.832 4.16C14.456 5.408 14.768 6.896 14.768 8.624C14.768 10.336 14.456 11.824 13.832 13.088C13.224 14.336 12.28 15.304 11 15.992C9.736 16.664 8.12 17 6.152 17H0.704ZM3.248 14.84H6.056C7.576 14.84 8.776 14.592 9.656 14.096C10.552 13.6 11.192 12.888 11.576 11.96C11.976 11.032 12.176 9.92 12.176 8.624C12.176 7.328 11.976 6.208 11.576 5.264C11.192 4.32 10.552 3.6 9.656 3.104C8.776 2.592 7.576 2.336 6.056 2.336H3.248V14.84ZM17.579 17V0.199999H23.027C24.995 0.199999 26.611 0.543999 27.875 1.232C29.155 1.92 30.099 2.896 30.707 4.16C31.331 5.408 31.643 6.896 31.643 8.624C31.643 10.336 31.331 11.824 30.707 13.088C30.099 14.336 29.155 15.304 27.875 15.992C26.611 16.664 24.995 17 23.027 17H17.579ZM20.123 14.84H22.931C24.451 14.84 25.651 14.592 26.531 14.096C27.427 13.6 28.067 12.888 28.451 11.96C28.851 11.032 29.051 9.92 29.051 8.624C29.051 7.328 28.851 6.208 28.451 5.264C28.067 4.32 27.427 3.6 26.531 3.104C25.651 2.592 24.451 2.336 22.931 2.336H20.123V14.84Z" fill="#909BA6" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}