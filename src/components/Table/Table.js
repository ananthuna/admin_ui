import { Box } from '@mui/system'
import React, { useContext, useEffect } from 'react'
import TableHead from './TableHead'
import Search from './Search'
import TableRow from './TableRow'
import PageSelectButtons from './PageSelectButtons'
import { UserContext } from '../../Context/Context'

function Table() {
    const { search, users, setSearch } = useContext(UserContext)

    useEffect(() => {
        // search && search.length === 0 && setSearch([])
    }, [search])
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
                {/* {search && search.length === 0 && <TableRow Users={users} />} */}
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