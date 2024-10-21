import { Alert, Box } from '@mui/material'
import { NavigationReserve } from '../NavigationBar'
import { ResponsiveContainer } from '../Common/ResponsiveContainer'
import { Page } from '../Page'

export function Records() {
    return (
        <Box>
            <Page>
                <NavigationReserve />
                <ResponsiveContainer>
                    <Alert severity="info">
                        This section will highlight my personal achievements in areas such as
                        Rubik's cubes, sprinting, the game of Go, and more.
                    </Alert>
                </ResponsiveContainer>
            </Page>
        </Box>
    )
}
