import React from 'react';

interface PropTypes {
    children: React.ReactNode;
}

export default function Layout({ children }: PropTypes): JSX.Element {
    return (
        <div className='w-full h-screen overflow-hidden flex flex-col'>
            <div className='w-full flex-grow-0 flex-shrink-0'>

            </div>
            <div className='w-full h-full flex-grow flex-shrink overflow-auto'>
                {
                    children
                }
            </div>
        </div>
    )
}