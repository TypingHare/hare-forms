import { Box } from '@mui/material'
import { LanguageCell } from '../LanguageCell.tsx'
import CodeIcon from '@mui/icons-material/Code'
import { SectionTitle } from '../SectionTitle'
import { ProgrammingLanguages } from '../../../constants/resume.ts'

export function ProgrammingLanguageSection() {
    return (
        <Box>
            <SectionTitle
                icon={<CodeIcon />}
                title="Programming Languages"
                mainContentIndex="Programming_Languages"
            />
            <Box fontSize="0.75rem" fontWeight="bold">
                {ProgrammingLanguages.map((item) => (
                    <LanguageCell
                        label={item.language}
                        progress={item.progress}
                        mainPageIndex={'Programming_Language/' + item.language.replace(/ /g, '_')}
                    />
                ))}
            </Box>
        </Box>
    )
}
