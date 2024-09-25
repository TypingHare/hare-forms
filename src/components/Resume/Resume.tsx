import { useMediaQuery } from '@mui/material'
import { DesktopResume } from './DesktopResume.tsx'
import { MobileResume } from './MobileResume.tsx'
import { DESKTOP_MIN_WIDTH_PIXEL } from '../../constants/web.ts'

export function Resume() {
    const isDesktop = useMediaQuery(`(min-width: ${DESKTOP_MIN_WIDTH_PIXEL}px)`)
    return <>{isDesktop ? <DesktopResume /> : <MobileResume />}</>
}
