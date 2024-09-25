import { AppBar, Collapse, IconButton, List, ListItem, Toolbar, useTheme } from '@mui/material'
import { Logo } from './Logo.tsx'
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from 'react'
import { NavigationBarLink } from './NavigationBarLink.tsx'
import { PageName, Url } from '../../constants/web.ts'

export function MobileNavigationBar() {
    const { palette } = useTheme()
    const [collapseOpen, setCollapseOpen] = useState(false)

    const handleMenuClick = () => {
        setCollapseOpen(!collapseOpen)
    }

    return (
        <AppBar
            sx={{
                height: '64px',
                backgroundColor: 'transparent',
                borderBottom: 'none',
                boxShadow: 'none',
            }}
        >
            <Toolbar>
                <IconButton
                    edge="start"
                    aria-label="menu"
                    sx={{ color: palette.primary.main, marginRight: '0.5rem' }}
                    onClick={handleMenuClick}
                >
                    <MenuIcon />
                </IconButton>
                <Logo />
            </Toolbar>

            <Collapse in={collapseOpen} timeout="auto" unmountOnExit>
                <List component="nav" sx={{ backgroundColor: palette.background.primary.main }}>
                    {['HOME', 'RESUME', 'WORKS', 'CONTACT'].map((label) => (
                        <ListItem key={label}>
                            <NavigationBarLink
                                key={label}
                                label={label}
                                href={Url[label as PageName]}
                            />
                        </ListItem>
                    ))}
                </List>
            </Collapse>
        </AppBar>
    )
}
