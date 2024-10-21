import { ResumeMainPage } from '../ResumeMainPage'
import { Typography } from '@mui/material'
import { ProsAndConsTable, ProsAndConsTableRow } from '../../Common/ProsAndConsTable'

export function EnglishPage() {
    const rows: ProsAndConsTableRow[] = [
        {
            title: 'TOEFL',
            pro: <span>Scored 24/30 points in both the Reading and Writing sections.</span>,
            con: <span>Scored 22/30 points in both the Speaking and Listening sections.</span>,
        },
        {
            title: 'Documentation Writing',
            pro: (
                <span>
                    Skilled at crafting clear, concise, and thorough documentation without
                    unnecessary verbosity.
                </span>
            ),
            con: <span>Lacks the ability to make the content engaging or lively.</span>,
        },
        {
            title: 'Communication',
            pro: (
                <span>
                    With experience at a school tutoring center, I can clearly explain my ideas and
                    code.
                </span>
            ),
            con: (
                <span>
                    I struggle to communicate effectively with native speakers on non-professional
                    topics.
                </span>
            ),
        },
    ]

    return (
        <ResumeMainPage index="Natural_Language/English">
            <Typography mb="1em">
                <b>I am not a native English speaker.</b> I moved to the United States with my
                parents in 2022 and have been learning English for three years. I can speak English
                with a clear, understandable accent, read articles and documentation, and write
                formally. However, I still find it challenging to communicate with native speakers,
                especially when they use slang or idiomatic expressions.
            </Typography>

            <ProsAndConsTable rows={rows} />
        </ResumeMainPage>
    )
}
