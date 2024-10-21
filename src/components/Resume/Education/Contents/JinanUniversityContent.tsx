import { BoxProps, Typography } from '@mui/material'
import { EducationContent } from './EducationContent.tsx'

export function JinanUniversityContent(props: BoxProps) {
    return (
        <EducationContent title={'Jinan University'} {...props}>
            <Typography padding="0 0.5em">
                Although Packaging Engineering was not my initial choice, it provided a foundation
                in fine arts and graphic design, which complements my self-taught journey in
                computer science and programming. After completing my coursework, I dedicated time
                to learning programming, which aligns well with my growing interest in frontend
                development.
            </Typography>
            <ul>
                <li>GPA: 3.3</li>
                <li>
                    Courses: <i>Introduction of IoT</i> and <i>Fundamental of Art</i>.
                </li>
            </ul>
        </EducationContent>
    )
}
