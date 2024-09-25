import { NavigationBar } from '../NavigationBar'
import { PageLoader } from './PageLoader.tsx'
import { Router } from './Router.tsx'
import { ThemeProvider } from '@mui/material'
import { lightTheme } from '../../constants/themes'

export function App() {
    return (
        <ThemeProvider theme={lightTheme}>
            <PageLoader />
            <NavigationBar />
            <Router />
        </ThemeProvider>
    )
}
