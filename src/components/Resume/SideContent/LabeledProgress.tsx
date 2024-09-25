import { Box, BoxProps, LinearProgress } from '@mui/material'

export function LabeledProgress(props: LabeledProgressProps) {
    const { label, progress, ...otherProps } = props

    return (
        <Box {...otherProps}>
            <Box display="flex">
                <Box>{label}</Box>
                <Box marginLeft="auto">{progress}%</Box>
            </Box>
            <LinearProgress variant="determinate" value={progress} />
        </Box>
    )
}

export interface LabeledProgressProps extends BoxProps {
    label: string
    progress: number
}
