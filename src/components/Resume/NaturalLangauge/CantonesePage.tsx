import { ResumeMainPage } from '../ResumeMainPage'
import { Typography } from '@mui/material'

export function CantonesePage() {
    return (
        <ResumeMainPage index="Natural_Language/Cantonese">
            <Typography mb="0.5em">
                <b>I am a native Cantonese speaker.</b> Born and raised in Guangdong, China, where I
                completed my education up to a bachelor's degree. My parents speak Cantonese and I
                am into Hong Kong TV series.
            </Typography>
            items=
            {[
                <span>
                    ✅ <b>Fluent communication</b>: Engage seamlessly with native speakers across
                    all social and professional contexts.
                </span>,
                <span>
                    ✅ <b>Advanced writing skills</b>: Craft, proofread, and edit formal articles,
                    reports, and correspondence in Simplified Chinese with precision and clarity.
                </span>,
                <span>
                    ✅ <b>Cultural insight</b>: Great understanding contemporary Guangdong and Hong
                    Kong customs, enabling effective communication in diverse cultural settings.
                </span>,
                <span>
                    ✅ <b>Public speaking</b>: Confidently deliver presentations or speeches in
                    Cantonese, tailored to both formal and casual audiences.
                </span>,
            ]}
        </ResumeMainPage>
    )
}
