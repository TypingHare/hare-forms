import { Box, BoxProps } from '@mui/material'

export function Slide(props: SlideProps) {
    const { children, ...otherProps } = props

    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            width="100vw"
            height="100vh"
            minWidth="100vw"
            minHeight="100vh"
            {...otherProps}
        >
            {children}
        </Box>
    )
}

export interface SlideProps extends BoxProps {}
