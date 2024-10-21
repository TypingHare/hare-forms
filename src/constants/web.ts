/**
 * The basename (or root path) of this project. On a website that contains multiple applications,
 * root paths are used to differentiate them.
 */
export const BASENAME = ''

export const Url = {
    HOME: '/',
    RESUME: '/resume',
    PORTFOLIO: '/portfolio',
    RECORDS: '/records',
    CONTACT: '/contact',
} as const

export type PageName = keyof typeof Url

/**
 * The minimum width in pixel for desktop device. A device that has a width less than this
 * threshold is considered a mobile device.
 */
export const DESKTOP_MIN_WIDTH_PIXEL = '1080'
