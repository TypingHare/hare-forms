import { BoxProps, Typography } from '@mui/material'
import { EducationContent } from './EducationContent.tsx'

export function BunkerHillCommunityCollegeContent(props: BoxProps) {
    return (
        <EducationContent title={'Bunker Hill Community College'} {...props}>
            <Typography padding="0 0.5em">
                When I first arrived in the United States, my English skills were limited. To
                improve, I spent a year and a half at Bunker Hill Community College, where I focused
                on learning American English. This preparation allowed me to successfully take the
                TOEFL test.
            </Typography>
            <ul>
                <li>GPA: 4.0</li>
                <li>
                    Courses: <i>Advanced C++</i> and <i>OOPL for Programmers</i>.
                </li>
            </ul>
        </EducationContent>
    )
}
