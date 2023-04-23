import { Box } from '@mui/system'
import React, { useContext } from 'react'
import TableHead from './TableHead'
import Search from './Search'
import TableRow from './TableRow'
import PageSelectButtons from './PageSelectButtons'
import { UserContext } from '../../Context/Context'

function Table() {
    const { search } = useContext(UserContext)

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
                {search && search.length !== 0 && <TableRow Users={search} />}
            </Box>
            <Box sx={{
                position: 'fixed',
                bottom: '1.2rem'
            }}>
                <PageSelectButtons />
            </Box>
        </Box>
    )
}

export default Table