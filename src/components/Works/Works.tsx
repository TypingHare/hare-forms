import { Alert } from '@mui/material'
import { NavigationReserve } from '../NavigationBar'
import { Page } from '../Page'
import { ResponsiveContainer } from '../Common/ResponsiveContainer'

export function Works() {
    return (
        <Page>
            <NavigationReserve />
            <ResponsiveContainer>
                <Alert severity="info">This section will be launched soon.</Alert>
            </ResponsiveContainer>
        </Page>
    )
}
