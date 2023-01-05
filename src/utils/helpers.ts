import { AwardType, HeaderButtonContent, Navigation, OuterLink, ReviewType } from "./types"

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

export const review: ReviewType[] = [
    {
        bgUrl: 'dashboard/images/Slice 1.png',
        content: `“Seems to have a promising future. I'm ecstatic about keeping on track my health in such an
        easy manner (having this app). Can't wait for the next features! Many thanks for
        your efforts developing this app.”`
    },
    {
        bgUrl: 'dashboard/images/Slice 2.png',
        content: `“User-friendly minimalistic interface. You need to enter several parameters, and the  program will calculate your data. Waiting for updates and new features. Recommend to  everyone, who cares about their health.”`
    },
    {
        bgUrl: 'dashboard/images/Slice 3.png',
        content: `“User-friendly minimalistic interface. You need to enter several parameters, and the  program will calculate your data. Waiting for updates and new features. Recommend to  everyone, who cares about their health.”`
    }
]

export const partners: string[] = [
    'dashboard/images/partners/huawei.png',
    'dashboard/images/partners/garmin-connect.png',
    'dashboard/images/partners/samsung-health.png',
    'dashboard/images/partners/pedometer.png',
    'dashboard/images/partners/mi-fit.png',
    'dashboard/images/partners/mi-home.png'
]

export const outerLinks: OuterLink[] = [
    {
        url: 'https://twitter.com',
        imgUrl: 'dashboard/images/outerLinks/twitter.png'
    },
    {
        url: 'https://facebook.com',
        imgUrl: 'dashboard/images/outerLinks/facebook.png'
    },
    {
        url: 'https://linkedin.com',
        imgUrl: 'dashboard/images/outerLinks/linkedin.png'
    },
    {
        url: 'https://instagram.com',
        imgUrl: 'dashboard/images/outerLinks/Instagram.png'
    },
    {
        url: 'https://web.telegram.org',
        imgUrl: 'dashboard/images/outerLinks/Telegram.png'
    }
] 

export const navigations: Navigation[] = [
    {
        content: 'Home',
        link: '#home'
    },
    {
        content: 'Reviews',
        link: '#reviews'
    },
    {
        content: 'Who we are',
        link: '#whoweare'
    },
    {
        content: 'App',
        link: '#application'
    },
    {
        content: 'Mission',
        link: '#mission'
    },
    {
        content: 'Partners',
        link: '#ourpartners'
    },
    {
        content: 'Petition',
        link: '#petition'
    },
    {
        content: 'Books',
        link: '#books'
    },

]

export const services = [
    'Disease Tracker',
    'AntiCorona Virus',
    'Logevity petition',
    'Logevity Scientific Resort',
    'Logevity Coin ($LONG)',
    'Marketplace & NFTs',
    'Portable BioContainer',
    'Telemedicine',
    'Terms of Use',
    'Privacy Policy'
]