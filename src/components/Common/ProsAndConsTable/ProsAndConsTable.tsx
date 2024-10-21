import {
    Paper,
    styled,
    Table,
    TableBody,
    TableCell,
    tableCellClasses,
    TableContainer,
    TableHead,
    TableRow,
} from '@mui/material'
import { ReactNode } from 'react'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.background.secondary.main,
        fontWeight: 'bold',
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}))

export function ProsAndConsTable(props: ProsAndConsTableProps) {
    const { rows } = props

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="center">Aspects</StyledTableCell>
                        <StyledTableCell align="center">Advantages</StyledTableCell>
                        <StyledTableCell align="center">Weaknesses</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, index) => (
                        <TableRow key={index}>
                            <StyledTableCell component="th" scope="row" sx={{ fontWeight: 'bold' }}>
                                {row.title}
                            </StyledTableCell>
                            <StyledTableCell>{row.pro || ''}</StyledTableCell>
                            <StyledTableCell>{row.con || ''}</StyledTableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export interface ProsAndConsTableProps {
    rows: ProsAndConsTableRow[]
}

export interface ProsAndConsTableRow {
    title: ReactNode
    pro?: ReactNode
    con?: ReactNode
}
