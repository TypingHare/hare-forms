import { Typography } from '@mui/material'
import { ResumeMainPage } from '../ResumeMainPage'
import { ProsAndConsTable, ProsAndConsTableRow } from '../../Common/ProsAndConsTable'

export function HtmlAndCssPage() {
    const rows: ProsAndConsTableRow[] = [
        {
            title: 'HTML Syntax',
            pro: <span>Possess a fundamental understanding of common HTML syntax and tags.</span>,
        },
        {
            title: 'CSS Syntax',
            pro: (
                <span>
                    Understand basic CSS syntax and layout techniques (block, inline, and flex);
                    capable of using plain CSS to implement simple features.
                </span>
            ),
            con: (
                <span>
                    Struggle to write plain CSS for complex functions; often rely on third-party
                    libraries for advanced styling.
                </span>
            ),
        },
        {
            title: 'CSS Animation',
            pro: <span>Familiar with basic CSS animation principles and key parameters.</span>,
            con: <span>Have difficulty implementing complex animations efficiently.</span>,
        },
    ]

    return (
        <ResumeMainPage index="Programming_Language/HTML_&_CSS">
            <Typography mb="1em">
                Honestly, I don't consider myself highly skilled in HTML and CSS. There are numerous
                tags, attributes, and styles to remember, and I’m not particularly passionate about
                UI design.
            </Typography>

            <ProsAndConsTable rows={rows} />
        </ResumeMainPage>
    )
}
