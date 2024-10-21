import { ResumeMainPage } from '../ResumeMainPage'
import { Typography } from '@mui/material'
import { ProsAndConsTable, ProsAndConsTableRow } from '../../Common/ProsAndConsTable'

export function MandarinPage() {
    const rows: ProsAndConsTableRow[] = [
        {
            title: 'Communication',
            pro: (
                <span>
                    Engage seamlessly with native speakers across all social and professional
                    contexts.
                </span>
            ),
        },
        {
            title: 'Writing',
            pro: (
                <span>
                    Craft, proofread, and edit formal articles, reports, and correspondence in
                    Simplified Chinese with precision and clarity.
                </span>
            ),
        },
        {
            title: 'Public Speaking',
            pro: (
                <span>
                    Confidently deliver presentations or speeches in Mandarin, tailored to both
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
        <ResumeMainPage index="Natural_Language/Mandarin">
            <Typography mb="1em">
                <b>I am a native Mandarin speaker.</b> Born and raised in Guangdong, China, where I
                completed my education up to a bachelor's degree. My linguistic skills are not only
                rooted in native fluency but also honed through years of formal academic training.
            </Typography>
            <ProsAndConsTable rows={rows} />
        </ResumeMainPage>
    )
}
