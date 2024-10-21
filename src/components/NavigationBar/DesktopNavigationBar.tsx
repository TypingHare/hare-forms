import { AppBar, Box, Toolbar } from '@mui/material'
import { NavigationBarLink } from './NavigationBarLink.tsx'
import { PageName, Url } from '../../constants/web.ts'
import { useEffect, useState } from 'react'
import { Logo } from './Logo.tsx'
import { ResponsiveContainer } from '../Common/ResponsiveContainer'

export function DesktopNavigationBar() {
    const [opacity, setOpacity] = useState(1)

    useEffect(() => {
        const handleScroll = () => {
            const maxScroll = 96
            setOpacity(Math.max(1 - window.scrollY / maxScroll, 0))
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <AppBar
            sx={{
                backgroundColor: 'transparent',
                borderBottom: 'none',
                boxShadow: 'none',
                opacity,
            }}
        >
            <ResponsiveContainer>
                <Toolbar>
                    <Logo />
                    <Box ml="auto" display="flex" gap="1em">
                        {['HOME', 'RESUME', 'PORTFOLIO', 'RECORDS', 'CONTACT'].map((label) => (
                            <NavigationBarLink
                                key={label}
                                label={label}
                                href={Url[label as PageName]}
                            />
                        ))}
                    </Box>
                </Toolbar>
            </ResponsiveContainer>
        </AppBar>
    )
}
