import { Box, BoxProps } from '@mui/material'

export function ResponsiveContainer(props: ResponsiveContainerProps) {
    const { sx, ...otherProps } = props

    return (
        <Box
            sx={{
                padding: {
                    md: '1rem 3%',
                    lg: '1rem 6%',
                    xl: '1rem 15%',
                },
                ...sx,
            }}
            {...otherProps}
        ></Box>
    )
}

export interface ResponsiveContainerProps extends BoxProps {}
