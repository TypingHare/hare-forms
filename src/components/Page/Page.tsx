import { Box, BoxProps } from '@mui/material'

export function Page(props: PageProps) {
    return <Box width="100vw" height="100vh" minWidth="100vw" minHeight="100vh" {...props}></Box>
}

export interface PageProps extends BoxProps {}
