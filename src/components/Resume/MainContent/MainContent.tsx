import { Box, BoxProps } from '@mui/material'
import { DefaultMainSection } from '../DefaultMainContent'
import { MainContentMultiplexer } from './MainContentMultiplexer.tsx'
import { selectResume, useAppSelector } from '../../../redux'

export function MainContent(props: MainContentProps) {
    const selectedIndex = useAppSelector(selectResume.mainContentIndex)

    return (
        <Box {...props}>
            <DefaultMainSection
                display={selectedIndex === '' ? 'block' : 'none'}
                sx={{ padding: '0 1rem' }}
            />
            <MainContentMultiplexer />
        </Box>
    )
}

export interface MainContentProps extends BoxProps {}
