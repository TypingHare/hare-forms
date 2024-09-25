export const BASENAME = '/forms'

export const Url = {
    HOME: '/',
    RESUME: '/resume',
    WORKS: '/works',
    CONTACT: '/contact',
} as const

export type PageName = keyof typeof Url

export const DESKTOP_MIN_WIDTH_PIXEL = '1080'
