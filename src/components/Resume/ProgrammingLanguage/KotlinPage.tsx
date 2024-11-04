import { Typography } from '@mui/material'
import { ResumeMainPage } from '../ResumeMainPage'
import { operateResume, useAppDispatch } from '../../../redux'

export function KotlinPage() {
    const dispatch = useAppDispatch()

    function JavaSkills() {
        return (
            <a
                style={{
                    textDecoration: 'underline',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                }}
                onClick={function () {
                    dispatch(operateResume.switchMainContentIndex('Programming_Language/Java'))
                }}
            >
                Java skills
            </a>
        )
    }

    return (
        <ResumeMainPage index="Programming_Language/Kotlin">
            <Typography>
                My only experience with Kotlin was developing an Android app for coursework, though
                the project didn't turn out as well as I'd hoped, so I don't want to showcase it
                here. However, I'm very open to using Kotlin in the future—feel free to review my{' '}
                <JavaSkills /> as a reference.
            </Typography>
        </ResumeMainPage>
    )
}
