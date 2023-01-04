import React from 'react';
import Header from '../components/header/Header';

interface PropTypes {
    children: React.ReactNode;
}

export default function Layout({ children }: PropTypes): JSX.Element {
    return (
        <div className='w-full h-screen overflow-hidden flex flex-col'>
            <div className='w-full flex-grow-0 flex-shrink-0'>
                <Header></Header>
            </div>
            <div className='w-full h-full flex-grow flex-shrink overflow-y-auto overflow-x-hidden'>
                {
                    children
                }
            </div>
        </div>
    )
}