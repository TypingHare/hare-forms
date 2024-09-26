import { Box, BoxProps, Typography } from '@mui/material'
import { operateResume, useAppDispatch } from '../../../redux'
import { ReactNode } from 'react'

export function SectionTitle(props: SectionTitleProps) {
    const { icon, title, mainContentIndex, ...otherProps } = props
    const dispatch = useAppDispatch()

    function handleClick() {
        dispatch(operateResume.switchMainContentIndex(mainContentIndex))
    }

    return (
        <Box display="flex" alignItems="center" mb="0.5rem" {...otherProps}>
            {icon}
            <Typography
                fontSize="1.25rem"
                fontWeight="bold"
                marginLeft="0.5rem"
                sx={{ cursor: 'pointer' }}
                onClick={handleClick}
            >
                {title}
            </Typography>
        </Box>
    )
}

export interface SectionTitleProps extends BoxProps {
    icon: ReactNode
    title: string
    mainContentIndex: string
}
