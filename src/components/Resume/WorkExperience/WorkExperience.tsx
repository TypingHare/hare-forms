import { Box, Typography } from '@mui/material'
import { WorkExperienceItem, WorkExperienceTimeline } from './WorkExperienceTimeline.tsx'
import moment from 'moment'
import { WorkExperienceContents } from '../WorkExperienceContents.tsx'
import WorkHistoryIcon from '@mui/icons-material/WorkHistory'
import { operateResume, selectResume, useAppDispatch, useAppSelector } from '../../../redux'

export function WorkExperience() {
    const workExperienceIndex = useAppSelector(selectResume.workExperienceIndex)
    const dispatch = useAppDispatch()

    function handleTitleClick() {
        dispatch(operateResume.switchMainContentIndex('Work_Experience'))
    }

    return (
        <Box>
            <Box display="flex" alignItems="center" mb="0.25rem">
                <WorkHistoryIcon />
                <Typography
                    fontSize="1.25rem"
                    fontWeight="bold"
                    marginLeft="0.5rem"
                    sx={{ cursor: 'pointer' }}
                    onClick={handleTitleClick}
                >
                    Work Experience
                </Typography>
            </Box>
            <Box display="flex">
                <WorkExperienceContents flex={2} workExperienceIndex={workExperienceIndex} />
                <WorkExperienceTimeline
                    sx={{
                        flex: 1,
                        fontFamily: 'cambria',
                    }}
                    workExperienceItems={workExperienceItems}
                    workExperienceIndex={workExperienceIndex}
                />
            </Box>
        </Box>
    )
}

const workExperienceItems: WorkExperienceItem[] = [
    {
        companyName: 'Take2 Health',
        companyType: 'Biotechnology Startup',
        jobTitle: 'Backend Developer Intern',
        location: 'Shenzhen, Guangdong, China',
        startDate: moment('03/2022', 'MM/YYYY').toDate(),
        endDate: moment('09/2022', 'MM/YYYY').toDate(),
    },
    {
        companyName: 'Ju Ying Tong',
        companyType: 'Technology Startup',
        jobTitle: 'Backend Developer',
        location: 'Zhuhai, Guangdong, China',
        startDate: moment('11/2018', 'MM/YYYY').toDate(),
        endDate: moment('02/2020', 'MM/YYYY').toDate(),
    },
    {
        companyName: 'Excellent Education',
        companyType: 'Tutoring Institutions',
        jobTitle: 'Math Tutor',
        location: 'Zhuhai, Guangdong, China',
        startDate: moment('01/2018', 'MM/YYYY').toDate(),
        endDate: moment('06/2019', 'MM/YYYY').toDate(),
    },
    {
        companyName: 'Computer Repair Team',
        companyType: 'Jinan University Volunteer Group',
        jobTitle: 'Captain',
        location: 'Zhuhai, Guangdong, China',
        startDate: moment('09/2017', 'MM/YYYY').toDate(),
        endDate: moment('06/2018', 'MM/YYYY').toDate(),
    },
]
