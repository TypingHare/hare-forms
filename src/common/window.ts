import { BASENAME } from '../constants/web.ts'

/**
 * Retrieve the pure URL of the current window, which does not contain the prefix (base name) and
 * query string.
 */
export function getPureUrl(): string {
    return window.location.pathname.substring(BASENAME.length)
}

/**
 * Returns the combination of the root path and the given pure url, and it is called a full url.
 *
 * @param pureUrl The pure url.
 * @returns the full url obtained by combining the root path and the pure url.
 * @see BASENAME
 */
export function getFullUrl(pureUrl: string): string {
    return BASENAME + pureUrl
}
