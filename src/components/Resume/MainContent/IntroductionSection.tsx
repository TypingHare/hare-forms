import { Box, Typography, useTheme } from '@mui/material'

export function IntroductionSection() {
    const { palette } = useTheme()

    return (
        <Box
            bgcolor={palette.background.secondary.main}
            padding="1rem"
            borderRadius="0.5rem"
            fontFamily="serif sans-serif"
        >
            <Typography fontSize="2.25rem" fontWeight="bold">
                James Chen
            </Typography>
            <Typography fontWeight="bold" color={palette.secondary.main}>
                Junior Web Developer & Software Engineer
            </Typography>
            <Typography mt="0.5rem">
                I am a computer science student with five years of web development experience.
                Throughout my journey, I actively contributed to three distinct web development
                projects, where I was primarily responsible for backend development and database
                management. My strong foundation in programming languages and frameworks, such as
                Java, TypeScript, and Python, has allowed me to build scalable and secure web
                applications. I am passionate about staying up-to-date with the latest web
                development trends and technologies, and I thrive in collaborative environments
                where I can contribute my skills and expertise to deliver high-quality software
                solutions.
            </Typography>
        </Box>
    )
}
