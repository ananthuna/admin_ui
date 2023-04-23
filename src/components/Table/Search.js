import React, { useContext, useEffect, useState } from 'react'
import { Box } from '@mui/system'
import TextField from '@mui/material/TextField';
import { UserContext } from '../../Context/Context';



function Search() {
    const { users, setSearch } = useContext(UserContext)
    const [value, setValue] = useState('')

    const handleSearch = () => {
        console.log('search');
        const text = value
        const index = text.length
        const array = users.filter(e => e.name.slice(0, index) === text)
        setSearch([...array])
    }

    useEffect(() => {
        handleSearch()
        console.log('search useeffect');
        setValue(value + '')
    }, [users, value])


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
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </Box>
    )
}

export default Search