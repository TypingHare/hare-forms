import { useDispatch } from 'react-redux'
import { operateResume } from '../../../redux'
import { Box, Step, StepContent, StepLabel } from '@mui/material'
import BusinessIcon from '@mui/icons-material/Business'
import PersonIcon from '@mui/icons-material/Person'
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled'
import moment from 'moment/moment'
import PinDropIcon from '@mui/icons-material/PinDrop'
import { EducationItem } from './EducationTimeline.tsx'

export function EducationTimelineItem(props: EducationTimelineItemProps) {
    const { educationItem, index } = props
    const { collegeName, degree, major, location, startDate, endDate } = educationItem
    const dispatch = useDispatch()

    function handleStepLabelClick() {
        dispatch(operateResume.switchEducationIndex(index))
    }

    return (
        <Step completed={false}>
            <StepLabel sx={{ cursor: 'pointer' }} onClick={handleStepLabelClick}>
                {collegeName}
            </StepLabel>
            <StepContent>
                <Box display="flex" alignItems="center">
                    <BusinessIcon sx={{ marginRight: '0.25em', fontSize: '1em' }} />
                    {major}
                </Box>
                <Box display="flex" alignItems="center">
                    <PersonIcon sx={{ marginRight: '0.25em', fontSize: '1em' }} />
                    {degree}
                </Box>
                <Box display="flex" alignItems="center">
                    <AccessTimeFilledIcon sx={{ marginRight: '0.25em', fontSize: '1em' }} />
                    {moment(startDate).format('MM/YYYY')}-
                    {endDate ? moment(endDate).format('MM/YYYY') : 'now'}
                </Box>
                <Box>
                    <PinDropIcon sx={{ marginRight: '0.25em', fontSize: '1em' }} />
                    {location}
                </Box>
            </StepContent>
        </Step>
    )
}

export interface EducationTimelineItemProps {
    educationItem: EducationItem
    index: number
}
