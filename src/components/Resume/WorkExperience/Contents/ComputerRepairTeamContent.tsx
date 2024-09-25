import { WorkExperienceContent } from './WorkExperienceContent.tsx'
import { BoxProps } from '@mui/material'

export function ComputerRepairTeamContent(props: BoxProps) {
    return (
        <WorkExperienceContent title="Computer Repair Team" {...props}>
            <ul>
                <li>
                    Help students repair their computers, install software, fix system problems, and
                    so on.
                </li>
                <li>
                    Appointed as the team leader in 2018, and was responsible for arranging team
                    members on duty as well as door-to-door services.
                </li>
            </ul>
        </WorkExperienceContent>
    )
}
