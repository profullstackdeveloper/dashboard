export interface HeaderButtonContent {
    content: string;
    url?: string;
}

export type AwardType = {
    title: string;
    content: string;
}

export type ReviewType = {
    bgUrl: string;
    content: string;
}

export type OuterLink = {
    url: string;
    imgUrl: string;
}

export type Navigation = {
    content: string;
    link: string;
}