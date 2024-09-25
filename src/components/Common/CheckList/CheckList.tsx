import { List, ListItem, ListProps } from '@mui/material'
import { ReactNode } from 'react'

export function CheckList(props: CheckListProps) {
    const { items, ...otherProps } = props

    return (
        <List sx={{ padding: '0 1rem' }} {...otherProps}>
            {items.map((item, index) => (
                <ListItem key={index} sx={{ padding: '0.25em 0' }}>
                    {item}
                </ListItem>
            ))}
        </List>
    )
}

export interface CheckListProps extends ListProps {
    items: ReactNode[]
}
