import { Alert, Box, Typography } from '@mui/material'

export function BasicInformation() {
    return (
        <Box>
            <Alert severity="info" sx={{ marginBottom: '1rem' }}>
                This section is currently under construction.
            </Alert>
            <Box>
                <Typography>Legal Name: Zhuojian Chen (陈卓坚/陳卓堅)</Typography>
                <Typography>Preferred First Name: James</Typography>
                <Typography>Email Address: jameschan312.cn@gmail.com</Typography>
            </Box>
        </Box>
    )
}
