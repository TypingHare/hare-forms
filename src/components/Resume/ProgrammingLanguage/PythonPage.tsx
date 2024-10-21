import { Typography } from '@mui/material'
import { ResumeMainPage } from '../ResumeMainPage'
import { ProsAndConsTable, ProsAndConsTableRow } from '../../Common/ProsAndConsTable'

export function PythonPage() {
    const rows: ProsAndConsTableRow[] = [
        {
            title: 'Syntax',
            pro: 'Proficient in basic Python syntax, resulting in high development efficiency.',
        },
        {
            title: 'Community',
            con: <span>Limited experience with popular third-party libraries.</span>,
        },
        {
            title: 'Virtual Environment',
            pro: (
                <span>
                    Gained experience by assisting others in configuring their virtual environments
                    (.venv and Conda) and deploying Python projects on cloud servers.
                </span>
            ),
        },
        {
            title: 'Machine Learning',
            pro: (
                <span>
                    Utilized TensorFlow to train an artificial neural network (ANN) for a simple
                    game.
                </span>
            ),
            con: <span>Have not yet completed any personal projects in this area.</span>,
        },
    ]

    return (
        <ResumeMainPage index="Programming_Language/Python">
            <Typography mb="1em">
                Python is not among my favorite languages, as its type annotation system doesn’t
                make sense to me. However, its concise syntax enables developers to write
                straightforward scripts and implement algorithms efficiently. I often use Python for
                tasks where it excels, but I would never choose it for building a heavy backend
                service.
            </Typography>
            <ProsAndConsTable rows={rows} />
        </ResumeMainPage>
    )
}
