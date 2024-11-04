import { Typography } from '@mui/material'
import { ResumeMainPage } from '../ResumeMainPage'
import { ProsAndConsTable, ProsAndConsTableRow } from '../../Common/ProsAndConsTable'

export function TypeScriptPage() {
    const rows: ProsAndConsTableRow[] = [
        {
            title: 'Syntax',
            pro: (
                <span>
                    Have a comprehensive understanding of the typing system and Master JavaScript
                    Syntax
                </span>
            ),
        },
        {
            title: 'Community',
            pro: (
                <span>
                    Experienced with a wide range of popular npm libraries, including Winston,
                    Moment, Lodash, Jest, Nodemailer, Commander, and more.
                </span>
            ),
            con: (
                <span>
                    Limited experience with other frontend frameworks like Vue and Angular, as I
                    haven't yet worked on projects using them.
                </span>
            ),
        },
        {
            title: 'Functional Programming',
            pro: (
                <span>
                    Used <i>fp-ts</i> to develop a command-line tool, which gave me valuable
                    experience and a deeper understanding of the strengths and limitations of
                    functional programming.
                </span>
            ),
        },
        {
            title: 'Contribution',
            pro: (
                <span>
                    Developed several simple libraries, complete with full test coverage, and
                    published them to{' '}
                    <a href="https://www.npmjs.com/~typinghare" target="_blank">
                        npm
                    </a>
                    .
                </span>
            ),
            con: (
                <span>Lack the confidence to submit pull requests to community repositories.</span>
            ),
        },
    ]

    return (
        <ResumeMainPage index="Programming_Language/TypeScript">
            <Typography mb="1em">
                TypeScript is one of my favorite programming languages, and I've been using it for
                over 4 years. For frontend development, ReactJS is often my go-to framework, though
                I recognize it can sometimes be overkill for simpler projects. In addition to
                frontend work, I also enjoy building small terminal-based applications with
                TypeScript, such as <a href="https://github.com/typinghare/wander">wander</a> and{' '}
                <a href="https://github.com/typinghare/trick">trick</a>.
            </Typography>
            
            <ProsAndConsTable rows={rows} />
        </ResumeMainPage>
    )
}
