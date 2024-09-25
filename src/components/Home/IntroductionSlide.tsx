import { Slide } from '../Slide'
import { Box } from '@mui/material'

export function IntroductionSlide() {
    return (
        <Slide>
            <Box sx={{ fontSize: '3em', marginBottom: '2em' }}>
                Hello, I'm <b>James Chen</b>
            </Box>
        </Slide>
    )
}
