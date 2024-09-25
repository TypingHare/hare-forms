import { Page } from '../Page'
import { Alert, Box } from '@mui/material'
import { NavigationReserve } from '../NavigationBar/NavigationReserve.tsx'

export function MobileResume() {
    return (
        <Page>
            <NavigationReserve />
            <Box sx={{ padding: '1rem' }}>
                <Alert severity="info">
                    The mobile version of the resume is currently under construction. For the best
                    experience, please use a laptop or desktop to view the resume.
                </Alert>
            </Box>
        </Page>
    )
}
