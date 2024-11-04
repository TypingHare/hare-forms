import { Typography } from '@mui/material'
import { ResumeMainPage } from '../ResumeMainPage'
import { ProsAndConsTable, ProsAndConsTableRow } from '../../Common/ProsAndConsTable'

export function SqlPage() {
    const rows: ProsAndConsTableRow[] = [
        {
            title: 'CRUD',
            pro: <span>Proficient in writing basic CRUD statements, including subqueries.</span>,
            con: <span>Limited experience with more complex CRUD operations.</span>,
        },
        {
            title: 'Index',
            pro: (
                <span>
                    Familiar with creating indexes and analyzing SQL performance using the{' '}
                    <i>EXPLAIN</i> keyword.
                </span>
            ),
            con: (
                <span>
                    Still at a beginner level in advanced indexing and optimization techniques.
                </span>
            ),
        },
        {
            title: 'Sharding',
            pro: <span>Familiar with basic principles and techniques of sharding.</span>,
            con: <span>No hands-on experience with implementing sharding.</span>,
        },
        {
            title: 'ORM',
            pro: (
                <span>
                    Experienced with ORM libraries such as Hibernate and MyBatis. Gained a deeper
                    understanding of their inner workings by studying the source code.
                </span>
            ),
        },
    ]

    return (
        <ResumeMainPage index="Programming_Language/SQL">
            <Typography mb="1em">
                While I have some experience writing SQL, I can currently only handle very simple
                queries. I am currently enrolled in <i>Database I</i> and plan to take&nbsp;
                <i>Database II</i> next semester. My goal is to become proficient in SQL.
            </Typography>
            <ProsAndConsTable rows={rows} />
        </ResumeMainPage>
    )
}
