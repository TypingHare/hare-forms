import { IntroductionSection } from '../MainContent/IntroductionSection.tsx'
import { Box, BoxProps } from '@mui/material'
import { WorkExperience } from '../WorkExperience'
import { Education } from '../Education'

export function DefaultMainSection(props: BoxProps) {
    return (
        <Box {...props}>
            <IntroductionSection />
            <Box height="1.5rem" />
            <WorkExperience />
            <Education />
        </Box>
    )
}
