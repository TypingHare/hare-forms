import { BoxProps } from '@mui/material'
import { EducationContent } from './EducationContent.tsx'

export function UMassLowellContent(props: BoxProps) {
    return (
        <EducationContent title={'UMass Lowell'} {...props}>
            <ul>
                <li>GPA: 4.0</li>
                <li>
                    Courses: <i>Organization of Programming Languages</i>,&nbsp;
                    <i>Analysis of Algorithms</i>, and <i>Operating System</i>.
                </li>
                <li>Research Assistant: Encrypted Data Training for Neural Networks Using TFHE</li>
                <li>Part time: Computer Science Tutors</li>
            </ul>
        </EducationContent>
    )
}
