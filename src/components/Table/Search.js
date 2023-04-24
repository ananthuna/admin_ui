import React, { useContext, useEffect, useState } from 'react'
import { Box } from '@mui/system'
import TextField from '@mui/material/TextField';
import { UserContext } from '../../Context/Context';



function Search() {
    const { users, setSearch } = useContext(UserContext)
    const [value, setValue] = useState('')

    const handleSearch = () => {
        const text = value
        const index = text.length
        const nameArray = users.filter(e => e.name.slice(0, index) === text)
        const emailArray = users.filter(e => e.email.slice(0, index) === text)
        const roleArray = users.filter(e => e.role.slice(0, index) === text)
        if (nameArray && nameArray.length > 0) return setSearch([...nameArray])
        if (emailArray && emailArray.length > 0) return setSearch([...emailArray])
        if (roleArray && roleArray.length > 0) return setSearch([...roleArray])

    }

    useEffect(() => {
        handleSearch()
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