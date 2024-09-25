import { Page } from '../Page'
import { NavigationReserve } from '../NavigationBar'
import { ResponsiveContainer } from '../Common/ResponsiveContainer'
import { BasicInformation } from './BasicInformation.tsx'
import { Connection } from './Connection.tsx'

export function Contact() {
    return (
        <Page>
            <NavigationReserve />
            <ResponsiveContainer>
                <BasicInformation />
                <Connection />
            </ResponsiveContainer>
        </Page>
    )
}
