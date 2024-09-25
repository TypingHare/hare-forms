import { BASENAME } from '../constants/web.ts'

/**
 * Retrieve the pure URL of the current window, which does not contain the prefix and query string.
 */
export function getPureUrl(): string {
    return window.location.pathname.substring(BASENAME.length)
}

export function getFullUrl(pureUrl: string): string {
    return BASENAME + pureUrl
}
