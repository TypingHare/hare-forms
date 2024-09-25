import { useMediaQuery } from '@mui/material'
import { DesktopNavigationBar } from './DesktopNavigationBar.tsx'
import { MobileNavigationBar } from './MobileNavigationBar.tsx'
import { DESKTOP_MIN_WIDTH_PIXEL } from '../../constants/web.ts'

export function NavigationBar() {
    const isDesktop = useMediaQuery(`(min-width: ${DESKTOP_MIN_WIDTH_PIXEL}px)`)
    return <>{isDesktop ? <DesktopNavigationBar /> : <MobileNavigationBar />}</>
}
