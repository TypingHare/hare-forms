import { Box } from '@mui/material'
import { LanguageCell } from '../LanguageCell.tsx'
import TranslateIcon from '@mui/icons-material/Translate'
import { NaturalLanguages } from '../../../constants/resume.ts'
import { SectionTitle } from '../SectionTitle'

export function NaturalLanguageSection() {
    return (
        <Box>
            <SectionTitle
                icon={<TranslateIcon />}
                title="Natural Languages"
                mainContentIndex="Natural_Languages"
            />
            <Box fontSize="0.75rem" fontWeight="bold">
                {NaturalLanguages.map((item) => (
                    <LanguageCell
                        label={item.language}
                        progress={item.progress}
                        mainPageIndex={'Natural_Language/' + item.language}
                    />
                ))}
            </Box>
        </Box>
    )
}
