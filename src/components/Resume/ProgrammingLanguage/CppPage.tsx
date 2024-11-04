import { Typography } from '@mui/material'
import { ResumeMainPage } from '../ResumeMainPage'
import { ProsAndConsTable, ProsAndConsTableRow } from '../../Common/ProsAndConsTable'

export function CppPage() {
    const rows: ProsAndConsTableRow[] = [
        {
            title: 'Syntax',
            pro: (
                <span>
                    Familiar with the basic syntax and some advanced features of C++, including
                    templates and concepts.
                </span>
            ),
            con: (
                <span>
                    With C++'s vast feature set, it's challenging to determine the next area to
                    focus on.
                </span>
            ),
        },
        {
            title: 'STL',
            pro: (
                <span>
                    Experienced with common template classes such as <i>vector</i>, <i>array</i>,{' '}
                    <i>stack</i>, and smart pointers.
                </span>
            ),
            con: (
                <span>
                    Still at a beginner level in more advanced use of the Standard Template Library
                    (STL).
                </span>
            ),
        },
        {
            title: 'Game Dev',
            pro: (
                <span>
                    Familiar with fundamental concepts like game loops, rendering, and layering.
                    Strong mathematical foundation, including trigonometry. Developed a Micromouse
                    simulator using <i>SFML</i>.
                </span>
            ),
            con: (
                <span>No experience with game engines and still at a beginner level overall.</span>
            ),
        },
    ]

    return (
        <ResumeMainPage index="Programming_Language/C++">
            <Typography mb="1em">
                I've been working with C++ for the past two years. From the early days of wrestling
                with pointers and dreaded segmentation faults to creating my first game using SFML,
                it's been one of the steepest learning curves I've experienced. C++ feels like
                Doraemon's treasure bag—packed with powerful features, some incredibly useful,
                others more like a devil's bargain.
            </Typography>
            <Typography mb="1em">
                I accomplished a course final project—
                <a href="https://github.com/typinghare/budget-wise-cpp-bhcc">
                    BudgetWise
                </a>—using <i>Qt6</i>. Honestly, I am not into this framework, especially the
                supporting IDE, Qt Creator.
            </Typography>

            <ProsAndConsTable rows={rows} />
        </ResumeMainPage>
    )
}
