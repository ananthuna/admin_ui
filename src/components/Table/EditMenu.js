import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../Context/Context'

function EditMenu({ open, setOpen, user }) {
    const { setUsers, users } = useContext(UserContext)
    const [edit, setEdit] = useState(user)


    const handleSave = () => {
        const array = users
        const index = array.findIndex(e => e.id === edit.id)
        array[index].name = edit.name
        array[index].email = edit.email
        array[index].role = edit.role
        setUsers([...array])
        setOpen(!open)
    }

    useEffect(() => {
        console.log(edit)
    }, [edit])


    return (
        <Box sx={{
            width: '25rem',
            m: 2
        }}>
            <Typography>Edit the user details</Typography>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                m: 3
            }}>
                <Box>
                    <Typography>Name</Typography>
                    <TextField
                        id="outlined-basic1"
                        fullWidth
                        value={edit.name}
                        placeholder="Name"
                        variant="outlined"
                        onChange={(e) => setEdit({ ...edit, name: e.target.value })}
                    />
                </Box>
                <Box>
                    <Typography>Email</Typography>
                    <TextField
                        id="outlined-basic2"
                        fullWidth
                        value={edit.email}
                        placeholder="Email"
                        variant="outlined"
                        onChange={(e) => setEdit({ ...edit, email: e.target.value })}
                    />
                </Box>
                <Box>
                    <Typography>Role</Typography>
                    <TextField
                        id="outlined-basic3"
                        fullWidth
                        value={edit.role}
                        placeholder="Role"
                        variant="outlined"
                        onChange={(e) => setEdit({ ...edit, role: e.target.value })}
                    />
                </Box>
            </Box>
            <Box sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                gap: '2rem',
                mr: 3
            }}>
                <Button variant="outlined" onClick={() => setOpen(!open)}>Cancel</Button>
                <Button variant="contained" onClick={handleSave}>Save</Button>
            </Box>
        </Box>
    )
}

export default EditMenu