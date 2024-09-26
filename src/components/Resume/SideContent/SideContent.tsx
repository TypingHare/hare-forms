import { Box, BoxProps } from '@mui/material'
import { NaturalLanguageSection } from '../NaturalLangauge'
import { ProgrammingLanguageSection } from '../ProgrammingLanguage'

export function SideContent(props: SideContentProps) {
    return (
        <Box {...props}>
            <Box padding="0 1rem">
                <NaturalLanguageSection />

                <Box height="1rem" />

                <ProgrammingLanguageSection />
            </Box>
        </Box>
    )
}

export interface SideContentProps extends BoxProps {}
