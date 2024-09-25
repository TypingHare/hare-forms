import { Box, Step, StepContent, StepLabel } from '@mui/material'
import { WorkExperienceItem } from './WorkExperienceTimeline.tsx'
import { operateResume } from '../../../redux'
import { useDispatch } from 'react-redux'
import BusinessIcon from '@mui/icons-material/Business'
import PersonIcon from '@mui/icons-material/Person'
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled'
import PinDropIcon from '@mui/icons-material/PinDrop'
import moment from 'moment'

export function WorkExperienceTimelineItem(props: WorkExperienceTimelineItemProps) {
    const { workExperienceItem, index } = props
    const { companyName, companyType, jobTitle, location, startDate, endDate } = workExperienceItem
    const dispatch = useDispatch()

    function handleStepLabelClick() {
        dispatch(operateResume.switchWorkExperienceIndex(index))
    }

    return (
        <Step completed={false}>
            <StepLabel sx={{ cursor: 'pointer' }} onClick={handleStepLabelClick}>
                {companyName}
            </StepLabel>
            <StepContent>
                <Box display="flex" alignItems="center">
                    <BusinessIcon sx={{ marginRight: '0.25em', fontSize: '1em' }} />
                    {companyType}
                </Box>
                <Box display="flex" alignItems="center">
                    <PersonIcon sx={{ marginRight: '0.25em', fontSize: '1em' }} />
                    {jobTitle}
                </Box>
                <Box display="flex" alignItems="center">
                    <AccessTimeFilledIcon sx={{ marginRight: '0.25em', fontSize: '1em' }} />
                    {moment(startDate).format('MM/YYYY')}-{moment(endDate).format('MM/YYYY')}
                </Box>
                <Box>
                    <PinDropIcon sx={{ marginRight: '0.25em', fontSize: '1em' }} />
                    {location}
                </Box>
            </StepContent>
        </Step>
    )
}

export interface WorkExperienceTimelineItemProps {
    workExperienceItem: WorkExperienceItem
    index: number
}
