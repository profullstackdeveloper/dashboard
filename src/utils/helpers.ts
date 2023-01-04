import { AwardType, HeaderButtonContent } from "./types"

export const reviews: string = "“User-friendly minimalistic interface. You need to enter several parameters, and the  program will calculate your data. Waiting for updates and new features. Recommend to  everyone, who cares about their health.”"

export enum ButtonTypes {
    primary = ' border-[2px] border-solid border-[#3683FC] bg-transparent text-[#3683FC] px-[25px] py-[8px] font-[500] text-[24px] leading-[31.25px]',
    secondary = ' bg-[#3683FC] text-white px-[25px] py-[8px] font-[500] text-[24px] leading-[31.25px]'
}

export const headerButtonList1: HeaderButtonContent[] = [
    {
        content: 'About',
        url: '/about'
    },
    {
        content: 'App',
        url: '/app'
    },
    {
        content: 'Contact',
        url: '/contact'
    },
    {
        content: 'Press',
        url: '/press'
    }
]

export const headerButtonList2: HeaderButtonContent[] = [
    {
        content: 'Petition',
        url: '/petition'
    },
    {
        content: 'Resort',
        url: '/resort'
    },
    {
        content: 'Crypto',
        url: '/crypto'
    },
    {
        content: 'Login',
        url: '/login'
    }
]

export const awards: AwardType[] = [
    {
        title: 'Biotech Awards',
        content: 'Most Innovative AI Health Tech Company 2020 & Award for Excellence in Disease Tracking Applications 2020'
    },
    {
        title: 'International Life Sciences Awards',
        content: 'Most Innovative AI Health Tech Company 2020 & Award for Excellence in Disease Tracking Applications 2020'
    },
    {
        title: 'Private Healthcare Awards',
        content: 'Most Innovative AI Health Tech Company 2020 & Award for Excellence in Disease Tracking Applications 2020'
    }
]