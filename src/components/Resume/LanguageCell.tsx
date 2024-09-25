import { Box, BoxProps } from '@mui/material'
import { LabeledProgress } from './SideContent/LabeledProgress.tsx'
import { useDispatch } from 'react-redux'
import { operateResume } from '../../redux'

export function LanguageCell(props: LanguageCellProps) {
    const { label, progress, mainPageIndex, ...otherProps } = props
    const dispatch = useDispatch()

    function handleClick() {
        if (mainPageIndex) {
            dispatch(operateResume.switchMainContentIndex(mainPageIndex))
        }
    }

    return (
        <Box
            sx={{
                padding: '0.5rem',
                cursor: 'pointer',
                '&:hover': { bgcolor: '#eee', transition: 'all .3s ease-in-out' },
            }}
            onClick={handleClick}
            {...otherProps}
        >
            <LabeledProgress label={label} progress={progress} />
        </Box>
    )
}

export interface LanguageCellProps extends BoxProps {
    label: string
    progress: number
    mainPageIndex?: string
}
