import { WorkExperienceContent } from './WorkExperienceContent.tsx'
import { BoxProps } from '@mui/material'

export function ExcellentEducationContent(props: BoxProps) {
    return (
        <WorkExperienceContent title="Excellent Education" {...props}>
            <ul>
                <li>
                    Developed comprehensive mathematics lesson plans tailored to the needs of middle
                    school and high school students.
                </li>
                <li>
                    Worked closely with students to assist them in completing homework assignments
                    effectively.
                </li>
                <li>
                    Collaborated with students to correct weaknesses and enhance their understanding
                    of mathematical concepts.
                </li>
            </ul>
        </WorkExperienceContent>
    )
}
