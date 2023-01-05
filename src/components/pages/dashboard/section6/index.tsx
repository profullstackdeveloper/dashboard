import React from 'react';
import { partners, review } from '../../../../utils/helpers';
import BigCard from './BigCard';
import SmallCard from './SmallCard';

export default function Section6 (): JSX.Element {
    return (
        <div className='w-full pl-[152px] pt-[218px] bg-bg-2 bg-no-repeat bg-position-1' id="reviews">
            <div className='w-[72px] h-[10px] bg-lightBlue'></div>
            <div className='text-[48px] font-[500] mt-[31px] leading-[62.5px]'>
                Reviews
            </div>
            <div className='text-[24px] text-[#55606A]'>
                They left a review in our  BMI app
            </div>
            <div className='w-full flex mt-[98px] mb-[346px]'>
                <BigCard {...review[0]}></BigCard>
                <div className='flex flex-col items-start justify-between ml-[64px]'>
                    {
                        review.map((item, index) => {
                            if(index > 0) {
                                return (
                                    <SmallCard {...item} key={index} />
                                )
                            } else {
                                return ''
                            }
                        })
                    }
                </div>
            </div>
            <div className='flex flex-col items-center' id="ourpartners">
                <div className='w-[72px] h-[10px] bg-lightBlue'></div>
                <div className='text-[48px] leading-[62.5px] font-[500] mt-[31px]'>
                    Our App <span className='text-lightBlue'>Partners</span>
                </div>
                <div className='flex mt-[137px] mb-[325px]'>
                    {
                        partners.map((item, index) => {
                            return (
                                index < partners.length ? <img src={item} key={index} className='mr-[56px]' alt='partners'></img> : <img src={item} key={index} alt='partners'/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}