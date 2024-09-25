import { Box, useMediaQuery } from '@mui/material'
import { DESKTOP_MIN_WIDTH_PIXEL } from '../../constants/web.ts'

export function NavigationReserve() {
    const isDesktop = useMediaQuery(`(min-width: ${DESKTOP_MIN_WIDTH_PIXEL}px)`)
    return <Box paddingTop={isDesktop ? '96px' : '64px'}></Box>
}
