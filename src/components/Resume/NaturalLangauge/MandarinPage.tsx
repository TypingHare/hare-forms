import { ResumeMainPage } from '../ResumeMainPage'
import { Typography } from '@mui/material'
import { CheckList } from '../../Common'

export function MandarinPage() {
    return (
        <ResumeMainPage index="Natural_Language/Mandarin">
            <Typography mb="0.5em">
                <b>I am a native Mandarin speaker.</b> Born and raised in Guangdong, China, where I
                completed my education up to a bachelor's degree. My linguistic skills are not only
                rooted in native fluency but also honed through years of formal academic training.
            </Typography>
            <CheckList
                items={[
                    <span>
                        ✅ <b>Fluent communication</b>: Engage seamlessly with native speakers
                        across all social and professional contexts.
                    </span>,
                    <span>
                        ✅ <b>Advanced writing skills</b>: Craft, proofread, and edit formal
                        articles, reports, and correspondence in Simplified Chinese with precision
                        and clarity.
                    </span>,
                    <span>
                        ✅ <b>Cultural insight</b>: Deep understanding of both traditional and
                        contemporary Chinese customs, enabling effective communication in diverse
                        cultural settings.
                    </span>,
                    <span>
                        ✅ <b>Public speaking</b>: Confidently deliver presentations or speeches in
                        Mandarin, tailored to both formal and casual audiences.
                    </span>,
                ]}
            ></CheckList>
        </ResumeMainPage>
    )
}
