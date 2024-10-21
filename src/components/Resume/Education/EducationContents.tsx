import { Box, BoxProps } from '@mui/material'
import { useDispatch } from 'react-redux'
import { operateResume } from '../../../redux'
import { Fragment } from 'react'
import { JinanUniversityContent } from './Contents/JinanUniversityContent'
import { BunkerHillCommunityCollegeContent } from './Contents/BunkerHillCommunityCollegeContent'
import { UMassLowellContent } from './Contents/UMassLowellContent'

export function EducationContents(props: EducationContentsProps) {
    const { educationItemIndex, ...otherProps } = props
    const dispatch = useDispatch()

    const contentComponents = [
        UMassLowellContent,
        BunkerHillCommunityCollegeContent,
        JinanUniversityContent,
    ]
    const contents = contentComponents.map((ContentComponent, index) => (
        <ContentComponent
            key={index}
            sx={{
                color: educationItemIndex === index ? 'inherit' : 'grey',
            }}
            onClick={function () {
                dispatch(operateResume.switchEducationIndex(index))
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

export interface EducationContentsProps extends BoxProps {
    educationItemIndex: number
}
