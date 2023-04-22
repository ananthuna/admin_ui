import React from 'react'
import { Box } from '@mui/system'
import TextField from '@mui/material/TextField';

function Search() {
    return (
        <Box sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pt: 1
        }}>
            <TextField sx={{
                width: '95%'
            }}
                id="outlined-basic"
                placeholder='Search by name, email or role...'
                variant="outlined"  
                size='small'
            />
        </Box>
    )
}

export default Search