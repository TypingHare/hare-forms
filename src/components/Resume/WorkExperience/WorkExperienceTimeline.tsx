import { Box, Step, StepContent, StepLabel, Stepper, StepperProps, useTheme } from '@mui/material'
import BusinessIcon from '@mui/icons-material/Business'
import PersonIcon from '@mui/icons-material/Person'
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled'
import moment from 'moment/moment'
import PinDropIcon from '@mui/icons-material/PinDrop'
import { operateResume } from '../../../redux'
import { useDispatch } from 'react-redux'

export function WorkExperienceTimeline(props: ExperienceTimelineProps) {
    const { workExperienceItems, workExperienceIndex, ...otherProps } = props
    const { palette } = useTheme()
    const dispatch = useDispatch()

    function createStepHandleClickHandler(index: number) {
        return function () {
            dispatch(operateResume.switchWorkExperienceIndex(index))
        }
    }

    return (
        <Box {...otherProps}>
            <Stepper orientation="vertical" activeStep={workExperienceIndex}>
                {workExperienceItems.map((workExperienceItem, index) => {
                    const { companyName, companyType, jobTitle, location, startDate, endDate } =
                        workExperienceItem
                    return (
                        <Step key={index} completed={false}>
                            <StepLabel
                                slotProps={{
                                    label: {
                                        sx: {
                                            cursor: 'pointer',
                                            padding: '0.25em',
                                            '&:hover': {
                                                transition: 'all .3s ease-in-out',
                                                backgroundColor: palette.background.primary.main,
                                            },
                                        },
                                    },
                                }}
                                onClick={createStepHandleClickHandler(index)}
                            >
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
                                    <AccessTimeFilledIcon
                                        sx={{ marginRight: '0.25em', fontSize: '1em' }}
                                    />
                                    {moment(startDate).format('MM/YYYY')} -
                                    {endDate ? moment(endDate).format('MM/YYYY') : 'now'}
                                </Box>
                                <Box>
                                    <PinDropIcon sx={{ marginRight: '0.25em', fontSize: '1em' }} />
                                    {location}
                                </Box>
                            </StepContent>
                        </Step>
                    )
                })}
            </Stepper>
        </Box>
    )
}

export interface ExperienceTimelineProps extends StepperProps {
    workExperienceItems: WorkExperienceItem[]
    workExperienceIndex: number
}

export interface WorkExperienceItem {
    companyName: string
    companyType: string
    jobTitle: string
    location: string
    startDate: Date
    endDate: Date | null
}
