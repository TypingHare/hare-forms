import { Link, useTheme } from '@mui/material'
import { selectWindow, useAppSelector } from '../../redux'
import { getFullUrl } from '../../common/window.ts'

export function NavigationBarLink(props: NavigationBarLinkProps) {
    const { label, href } = props
    const pageName = useAppSelector(selectWindow.pageName)
    const isSelected = pageName === label
    const theme = useTheme()
    const { palette } = theme

    return (
        <Link
            href={getFullUrl(href)}
            sx={{
                color: isSelected ? palette.secondary.main : '#6c757d',
                padding: '0.25em 0.5em',
                fontWeight: 'bold',
                textDecoration: 'none',
                '&:hover': {
                    borderRadius: '0.25em',
                    color: palette.secondary.main,
                    backgroundColor: '#eae5d6',
                    transition: 'all .3s ease-in-out',
                },
            }}
        >
            {label}
        </Link>
    )
}

export interface NavigationBarLinkProps {
    label: string
    href: string
}
