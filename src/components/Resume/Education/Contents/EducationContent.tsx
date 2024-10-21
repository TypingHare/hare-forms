import { Box, BoxProps, Typography, useTheme } from '@mui/material'

export function EducationContent(props: EducationContentProps) {
    const { title, children, ...otherProps } = props
    const { palette } = useTheme()

    return (
        <Box
            sx={{
                margin: '0.25rem',
                padding: '0.25rem',
                borderRadius: '0.25rem',
                '&:hover': {
                    backgroundColor: palette.background.secondary.main,
                    transition: 'all .3s ease-in-out',
                },
            }}
            {...otherProps}
        >
            <Typography
                ml="0.25rem"
                fontSize="1.25rem"
                fontWeight="bold"
                sx={{
                    userSelect: 'none',
                    cursor: 'default',
                }}
            >
                {title}
            </Typography>
            <Box
                sx={{
                    userSelect: 'none',
                    cursor: 'default',
                }}
            >
                {children}
            </Box>
        </Box>
    )
}

export interface EducationContentProps extends BoxProps {
    title?: string
}
