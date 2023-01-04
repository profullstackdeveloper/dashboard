import React from 'react';
import RoundButton from '../buttons/RoundButton';
import { ButtonTypes, headerButtonList1, headerButtonList2 } from '../../utils/helpers';
import LangButton from '../buttons/LangButton';

export default function Header(): JSX.Element {
    return (
        <div className='w-full h-[136px] px-[71px] bg-white flex items-center justify-center'>
            <img src='/images/logo.png' alt='logo' className='mr-[71px]' />
            <div className='w-full flex justify-between'>
                <div className='flex max-w-[411px] w-full justify-between items-center'>
                    {
                        headerButtonList1.map((item, index) => {
                            return (
                                <div className='text-[24px] leading-[31.25px] cursor-pointer select-none' key={index}>
                                    {
                                        item.content
                                    }
                                </div>
                            )
                        })
                    }
                </div>
                <div className='flex max-w-[438px] w-full justify-between items-center mr-[48px]'>
                    {
                        headerButtonList2.map((item, index) => {
                            return (
                                <div className='text-[24px] leading-[31.25px] cursor-pointer select-none' key={index}>
                                    {
                                        item.content
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <RoundButton content='Donate' shape={ButtonTypes.primary} />
            <div className='mx-[64px]'></div>
            <LangButton></LangButton>
        </div>
    )
}