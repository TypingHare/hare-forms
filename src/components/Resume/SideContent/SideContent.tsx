import { Box, BoxProps } from '@mui/material'
import { NaturalLanguageSideSection } from '../NaturalLangauge'
import { ProgrammingLanguageSideSection } from '../ProgrammingLanguage'

export function SideContent(props: SideContentProps) {
    return (
        <Box {...props}>
            <Box padding="0 1rem">
                <NaturalLanguageSideSection />

                <Box height="1rem" />

                <ProgrammingLanguageSideSection />
            </Box>
        </Box>
    )
}

export interface SideContentProps extends BoxProps {}
