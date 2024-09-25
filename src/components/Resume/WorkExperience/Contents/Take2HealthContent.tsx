import { WorkExperienceContent } from './WorkExperienceContent.tsx'
import { BoxProps } from '@mui/material'

export function Take2HealthContent(props: BoxProps) {
    return (
        <WorkExperienceContent title="Take2 Health (Biotechnology Startup)" {...props}>
            <ul>
                <li>
                    Refactored outsourced backend code from Java (Spring Boot) to JavaScript and
                    TypeScript, enhancing code quality and performance.
                </li>
                <li>
                    Developed a custom backend framework using Koa and utilized it as a foundation
                    for further development. Codes were migrated to NestJS later.
                </li>
                <li>
                    Streamlined API organization and management by implementing spreadsheets to
                    track development progress, ensuring efficient collaboration within the
                    development team.
                </li>
            </ul>
        </WorkExperienceContent>
    )
}
