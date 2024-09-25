import { Box } from '@mui/material'
import { MandarinPage } from '../NaturalLangauge/MandarinPage'
import { CantonesePage } from '../NaturalLangauge/CantonesePage'
import { EnglishPage } from '../NaturalLangauge/EnglishPage'
import { JapanesePage } from '../NaturalLangauge/JapanesePage'
import { TypeScriptPage } from '../ProgrammingLanguage/TypeScriptPage'
import { JavaPage } from '../ProgrammingLanguage/JavaPage'
import { PythonPage } from '../ProgrammingLanguage/PythonPage'
import { CppPage } from '../ProgrammingLanguage/CppPage'
import { PhpPage } from '../ProgrammingLanguage/PhpPage'
import { HtmlAndCssPage } from '../ProgrammingLanguage/HtmlAndCssPage'
import { KotlinPage } from '../ProgrammingLanguage/KotlinPage'
import { SqlPage } from '../ProgrammingLanguage/SqlPage'
import { RustPage } from '../ProgrammingLanguage/RustPage'
import { NaturalLanguagePage } from '../NaturalLangauge/NaturalLanguagePage'
import { ProgrammingLanguagePage } from '../ProgrammingLanguage/ProgrammingLanguagePage'
import { WorkExperiencePage } from '../WorkExperience'
import { EducationPage } from '../Education'

export function MainContentMultiplexer() {
    return (
        <Box sx={{ padding: '0 1rem' }}>
            {/* Natural Languages */}
            <NaturalLanguagePage />
            <MandarinPage />
            <CantonesePage />
            <EnglishPage />
            <JapanesePage />

            {/* Programming Languages */}
            <ProgrammingLanguagePage />
            <TypeScriptPage />
            <JavaPage />
            <PythonPage />
            <CppPage />
            <PhpPage />
            <HtmlAndCssPage />
            <KotlinPage />
            <SqlPage />
            <RustPage />

            {/* Work Experience */}
            <WorkExperiencePage />

            {/* Education */}
            <EducationPage />
        </Box>
    )
}
