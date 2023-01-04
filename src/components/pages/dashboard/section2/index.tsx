import React from 'react';
import AwardCard from './AwardCard';
import { awards } from '../../../../utils/helpers';
import Carousel from '../../../carousel/Carousel';
// import { Carousel } from 'react-responsive-carousel';

export default function Section2(): JSX.Element {
    return (
        <div className='w-full border-dashed border border-[#3683FC]/20 bg-[#F2F3F4] flex flex-col items-center justify-center'>
            <div className='w-full h-[390px]'></div>
            <Carousel>
                {
                    awards.map((award, index) => {
                        return (
                            <AwardCard {...award} key={index}></AwardCard>
                        )
                    })
                }
            </Carousel>
            <div className='w-full h-[72px]'></div>
        </div>
    )
}