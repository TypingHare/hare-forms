import { Box, useTheme } from '@mui/material'

export function Logo() {
    const { palette } = useTheme()

    return (
        <Box
            display="inline"
            fontSize="1.5rem"
            fontWeight="bold"
            sx={{
                background: `linear-gradient(to right, ${palette.primary.main}, ${palette.secondary.main})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
            }}
        >
            Hare Forms
        </Box>
    )
}
