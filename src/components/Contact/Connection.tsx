import { Box, IconButton } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import { ConnectionUrl } from '../../constants/contact.ts'

export function Connection() {
    return (
        <Box>
            <IconButton
                size="large"
                onClick={() => {
                    window.open(ConnectionUrl.github)
                }}
            >
                <GitHubIcon />
            </IconButton>
        </Box>
    )
}
