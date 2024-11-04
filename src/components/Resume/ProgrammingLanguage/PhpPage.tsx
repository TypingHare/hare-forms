import { Typography } from '@mui/material'
import { ResumeMainPage } from '../ResumeMainPage'

export function PhpPage() {
    return (
        <ResumeMainPage index="Programming_Language/PHP">
            <Typography mb="1em">
                While PHP was my first love, we broke up after I knew that she was worse than Java
                in terms of performance, and had no way to deal with high concurrency. Given the
                decline of PHP and the availability of numerous alternative languages, I have
                decided to move away from using it.
            </Typography>

            <Typography>
                See&nbsp;
                <a href="https://www.tiobe.com/tiobe-index/php/" target="_blank">
                    The Trend of PHP
                </a>
                .
            </Typography>
        </ResumeMainPage>
    )
}
