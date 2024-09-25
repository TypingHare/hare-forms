import { Box, Typography } from '@mui/material'
import { LanguageCell } from '../LanguageCell.tsx'
import CodeIcon from '@mui/icons-material/Code'

export function ProgrammingLanguageSideSection() {
    return (
        <Box>
            <Box display="flex" alignItems="center">
                <CodeIcon />
                <Typography fontSize="1.25rem" fontWeight="bold" marginLeft="0.5rem">
                    Programming Languages
                </Typography>
            </Box>
            <Box fontSize="0.75rem" fontWeight="bold">
                <LanguageCell
                    label="TypeScript"
                    progress={80}
                    mainPageIndex={'Programming_Language/TypeScript'}
                />
                <LanguageCell
                    label="Java"
                    progress={60}
                    mainPageIndex={'Programming_Language/Java'}
                />
                <LanguageCell
                    label="Python"
                    progress={55}
                    mainPageIndex={'Programming_Language/Python'}
                />
                <LanguageCell
                    label="SQL"
                    progress={40}
                    mainPageIndex={'Programming_Language/SQL'}
                />
                <LanguageCell
                    label="C++"
                    progress={35}
                    mainPageIndex={'Programming_Language/C++'}
                />
                <LanguageCell
                    label="PHP"
                    progress={30}
                    mainPageIndex={'Programming_Language/PHP'}
                />
                <LanguageCell
                    label="HTML & CSS"
                    progress={30}
                    mainPageIndex={'Programming_Language/HTML_&_CSS'}
                />
                <LanguageCell
                    label="Kotlin"
                    progress={25}
                    mainPageIndex={'Programming_Language/Kotlin'}
                />
                <LanguageCell
                    label="Rust"
                    progress={15}
                    mainPageIndex={'Programming_Language/Rust'}
                />
            </Box>
        </Box>
    )
}
