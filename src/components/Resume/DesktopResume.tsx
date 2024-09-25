import { SideContent } from './SideContent'
import { MainContent } from './MainContent'
import { Page } from '../Page'
import { NavigationReserve } from '../NavigationBar'
import { ResponsiveContainer } from '../Common/ResponsiveContainer'

export function DesktopResume() {
    return (
        <Page>
            <NavigationReserve />
            <ResponsiveContainer display="flex" flexDirection="row" fontFamily="serif sans-serif">
                <SideContent flex={2} />
                <MainContent flex={5} />
            </ResponsiveContainer>
        </Page>
    )
}
