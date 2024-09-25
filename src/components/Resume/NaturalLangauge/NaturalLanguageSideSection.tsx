import { Box, Typography } from '@mui/material'
import { LanguageCell } from '../LanguageCell.tsx'
import TranslateIcon from '@mui/icons-material/Translate'

export function NaturalLanguageSideSection() {
    return (
        <Box>
            <Box display="flex" alignItems="center">
                <TranslateIcon />
                <Typography fontSize="1.25rem" fontWeight="bold" marginLeft="0.5rem">
                    Natural Languages
                </Typography>
            </Box>
            <Box fontSize="0.75rem" fontWeight="bold">
                <LanguageCell
                    label="Mandarin"
                    progress={100}
                    mainPageIndex="Natural_Language/Mandarin"
                />
                <LanguageCell
                    label="Cantonese"
                    progress={95}
                    mainPageIndex="Natural_Language/Cantonese"
                />
                <LanguageCell
                    label="English"
                    progress={55}
                    mainPageIndex="Natural_Language/English"
                />
                <LanguageCell
                    label="Japanese"
                    progress={5}
                    mainPageIndex="Natural_Language/Japanese"
                />
            </Box>
        </Box>
    )
}
