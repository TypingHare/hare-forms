import { Typography } from '@mui/material'
import { ResumeMainPage } from '../ResumeMainPage'
import { ProsAndConsTable, ProsAndConsTableRow } from '../../Common/ProsAndConsTable'

export function JavaPage() {
    const rows: ProsAndConsTableRow[] = [
        {
            title: 'Syntax',
            pro: (
                <span>
                    Proficient in basic Java syntax, with significant experience in streams and
                    annotations.
                </span>
            ),
        },
        {
            title: 'multithreading',
            con: <span>Almost no experience with multithreading and concurrency components.</span>,
        },
        {
            title: 'Spring',
            pro: (
                <span>
                    Familiar with the basic architecture of Spring and Spring Boot, and have
                    completed a personal project using these frameworks. Additionally, I have
                    experience with Spring Data and Spring MVC.
                </span>
            ),
            con: <span>Limited exposure to other frameworks within the Spring ecosystem.</span>,
        },
        {
            title: 'Design Pattern',
            pro: (
                <span>
                    Regularly apply various design patterns in my projects while consistently
                    adhering to SOLID principles.
                </span>
            ),
            con: (
                <span>
                    At times, this approach can be overkill, leading to overly complex designs for
                    simple projects or modules.
                </span>
            ),
        },
    ]

    return (
        <ResumeMainPage index="Programming_Language/Java">
            <Typography mb="1em">
                Java is one of my favorite programming languages, and I've been using it for over 4
                years. It is my go-to language for building backend services. Recently, I have been
                refactoring <a href="https://github.com/typinghare/supervisor-spring">Supervisor</a>
                , one of my major personal projects, using Spring Boot 3 and GraphQL.
            </Typography>

            <ProsAndConsTable rows={rows} />
        </ResumeMainPage>
    )
}
