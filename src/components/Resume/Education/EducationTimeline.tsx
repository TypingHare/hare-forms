import { Box, Step, StepContent, StepLabel, Stepper, StepperProps, useTheme } from '@mui/material'
import { useDispatch } from 'react-redux'
import { operateResume } from '../../../redux'
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled'
import moment from 'moment'
import PinDropIcon from '@mui/icons-material/PinDrop'
import SchoolIcon from '@mui/icons-material/School'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'

export function EducationTimeline(props: EducationTimelineProps) {
    const { educationItems, selectedIndex, ...otherProps } = props
    const { palette } = useTheme()
    const dispatch = useDispatch()

    function createStepHandleClickHandler(index: number) {
        return function () {
            dispatch(operateResume.switchEducationIndex(index))
        }
    }

    const slotProps = {
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
    }

    return (
        <Box {...otherProps}>
            <Stepper orientation="vertical" activeStep={selectedIndex}>
                {educationItems.map((educationItem, index) => {
                    const { collegeName, degree, major, location, startDate, endDate } =
                        educationItem
                    return (
                        <Step key={index} completed={false}>
                            <StepLabel
                                slotProps={slotProps}
                                onClick={createStepHandleClickHandler(index)}
                            >
                                {collegeName}
                            </StepLabel>
                            <StepContent>
                                <Box display="flex" alignItems="center">
                                    <LocalLibraryIcon
                                        sx={{ marginRight: '0.25em', fontSize: '1em' }}
                                    />
                                    {major}
                                </Box>
                                <Box display="flex" alignItems="center">
                                    <SchoolIcon sx={{ marginRight: '0.25em', fontSize: '1em' }} />
                                    {degree}
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

export interface EducationTimelineProps extends StepperProps {
    educationItems: EducationItem[]
    selectedIndex: number
}

export interface EducationItem {
    collegeName: string
    degree: string
    major: string
    location: string
    startDate: Date
    endDate: Date | null
}
