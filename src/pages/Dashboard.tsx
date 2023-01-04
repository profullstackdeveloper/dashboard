import React from 'react';
import Section1 from '../components/pages/dashboard/section1';
import Section2 from '../components/pages/dashboard/section2';
import Section3 from '../components/pages/dashboard/section3';
import Section4 from '../components/pages/dashboard/section4';
import Section5 from '../components/pages/dashboard/section5';
import Section6 from '../components/pages/dashboard/section6';

export default function Dashboard (): JSX.Element {
    return (
        <div className='w-full h-full'>
            <Section1></Section1>
            <Section2></Section2>
            <Section3></Section3>
            <Section4></Section4>
            <Section5></Section5>
            <Section6></Section6>
        </div>
    )
}