import { ResumeMainPage } from '../ResumeMainPage'
import { Typography } from '@mui/material'
import { ProsAndConsTable, ProsAndConsTableRow } from '../../Common/ProsAndConsTable'

export function CantonesePage() {
    const rows: ProsAndConsTableRow[] = [
        {
            title: 'Communication',
            pro: (
                <span>
                    Engage seamlessly with native speakers across all social and professional
                    contexts.
                </span>
            ),
            con: <span>Have a standard Guangzhou accent, not a Hong Kong accent</span>,
        },
        {
            title: 'Writing',
            pro: (
                <span>
                    Craft, proofread, and edit formal articles, reports, and correspondence in
                    Simplified Chinese with precision and clarity.
                </span>
            ),
            con: (
                <span>Not be able to write all commonly used traditional Chinese characters.</span>
            ),
        },
        {
            title: 'Public Speaking',
            pro: (
                <span>
                    Confidently deliver presentations or speeches in Cantonese, tailored to both
                    formal and casual audiences.
                </span>
            ),
        },
        {
            title: 'Cultural Insight',
            pro: (
                <span>
                    Deep understanding of both traditional and contemporary Chinese customs,
                    enabling effective communication in diverse cultural settings.
                </span>
            ),
        },
    ]

    return (
        <ResumeMainPage index="Natural_Language/Cantonese">
            <Typography mb="1em">
                <b>I am a native Cantonese speaker.</b> Born and raised in Guangdong, China, where I
                completed my education up to a bachelor's degree. My parents speak Cantonese and I
                am into Hong Kong TV series.
            </Typography>
            <ProsAndConsTable rows={rows} />
        </ResumeMainPage>
    )
}
