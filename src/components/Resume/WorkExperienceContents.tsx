import { Box, BoxProps } from '@mui/material'
import { Take2HealthContent } from './WorkExperience/Contents/Take2HealthContent.tsx'
import { JuYingTongContent } from './WorkExperience/Contents/JuYingTongContent.tsx'
import { Fragment } from 'react'
import { useDispatch } from 'react-redux'
import { operateResume } from '../../redux'
import { ExcellentEducationContent } from './WorkExperience/Contents/ExcellentEducationContent.tsx'
import { ComputerRepairTeamContent } from './WorkExperience/Contents/ComputerRepairTeamContent.tsx'

export function WorkExperienceContents(props: WorkExperienceContentsProps) {
    const { workExperienceIndex, ...otherProps } = props
    const dispatch = useDispatch()

    const contentComponents = [
        Take2HealthContent,
        JuYingTongContent,
        ExcellentEducationContent,
        ComputerRepairTeamContent,
    ]
    const contents = contentComponents.map((ContentComponent, index) => (
        <ContentComponent
            key={index}
            sx={{
                color: workExperienceIndex === index ? 'inherit' : 'grey',
            }}
            onClick={function () {
                dispatch(operateResume.switchWorkExperienceIndex(index))
            }}
        />
    ))

    return (
        <Box {...otherProps}>
            {contents.map((content, index) => (
                <Fragment key={index}>{content}</Fragment>
            ))}
        </Box>
    )
}

export interface WorkExperienceContentsProps extends BoxProps {
    workExperienceIndex: number
}
