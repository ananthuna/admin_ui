import { Box } from '@mui/system'
import React from 'react'
import TableHead from './TableHead'
import Search from './Search'
import TableRow from './TableRow'
import PageSelectButtons from './PageSelectButtons'

function Table() {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: '40rem'
        }}>
            <Box>
                <Search />
                <TableHead />
                <TableRow />
            </Box>
            <Box sx={{
                position:'fixed',
                bottom:'1.2rem'
            }}>
                <PageSelectButtons />
            </Box>
        </Box>
    )
}

export default Table