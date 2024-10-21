import { Alert, Box, BoxProps } from '@mui/material'
import { NaturalLanguageSection } from '../NaturalLangauge'
import { ProgrammingLanguageSection } from '../ProgrammingLanguage'
import { useState } from 'react'

export function SideContent(props: SideContentProps) {
    const [dateAlertOn, setDateAlertOn] = useState<boolean>(true)

    return (
        <Box {...props}>
            <Box padding="0 1rem">
                <Alert
                    severity="info"
                    sx={{ display: dateAlertOn ? 'flex' : 'none', marginBottom: '1rem' }}
                    onClose={() => {
                        setDateAlertOn(false)
                    }}
                >
                    Last updated at <b>Oct 20, 2024</b>
                </Alert>

                <NaturalLanguageSection />

                <Box height="1rem" />

                <ProgrammingLanguageSection />
            </Box>
        </Box>
    )
}

export interface SideContentProps extends BoxProps {}
