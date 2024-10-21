import { Box } from '@mui/material'
import { SectionTitle } from '../SectionTitle'
import { EducationItem, EducationTimeline } from './EducationTimeline.tsx'
import { selectResume, useAppSelector } from '../../../redux'
import { EducationContents } from './EducationContents.tsx'
import moment from 'moment/moment'
import HistoryEduIcon from '@mui/icons-material/HistoryEdu'

export function Education() {
    const educationItemIndex = useAppSelector(selectResume.educationItemIndex)

    return (
        <Box>
            <SectionTitle
                icon={<HistoryEduIcon />}
                title="Education"
                mainContentIndex="Education"
            />
            <Box display="flex">
                <EducationContents flex={2} educationItemIndex={educationItemIndex} />
                <EducationTimeline
                    sx={{
                        flex: 1,
                        fontFamily: 'cambria',
                    }}
                    educationItems={educationItems}
                    selectedIndex={educationItemIndex}
                />
            </Box>
        </Box>
    )
}

const educationItems: EducationItem[] = [
    {
        collegeName: 'UMass Lowell',
        degree: "Bachelor's degree",
        major: 'Computer Science',
        location: 'Lowell MA',
        startDate: moment('01/2024', 'MM/YYYY').toDate(),
        endDate: null,
    },
    {
        collegeName: 'Bunker Hill Community College',
        degree: "Associate's degree",
        major: 'Computer Science',
        location: 'Boston MA',
        startDate: moment('05/2022', 'MM/YYYY').toDate(),
        endDate: moment('12/2023', 'MM/YYYY').toDate(),
    },
    {
        collegeName: 'Jinan University',
        degree: "Bachelor's degree",
        major: 'Packaging Engineering',
        location: 'Zhuhai, Guangdong, China',
        startDate: moment('09/2017', 'MM/YYYY').toDate(),
        endDate: moment('07/2021', 'MM/YYYY').toDate(),
    },
]
