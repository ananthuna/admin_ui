import { Box, Checkbox, IconButton, Typography } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { UserContext } from '../../Context/Context';
import Menu from '@mui/material/Menu';
import EditMenu from './EditMenu';

function TableRow({ Users }) {
    const {
        users,
        setUsers,
        pageNo,
        setPages,
        pages,
        selected,
        setSelected,
        page,
        setPage,
        setPageNo,
        search
    } = useContext(UserContext)
    const [open, setOpen] = React.useState(false)
    const [editUser, setEditUser] = React.useState()

    const pagination = (array) => {
        const length = array.length
        let noOfPages
        let num = length / 10
        if (length % 10 > 0) {
            noOfPages = Math.floor(num) + 1
        } else {
            noOfPages = Math.floor(num)
        }

        let startIndex = 0
        let endIndex = 10
        const Array = []
        while (noOfPages > 0) {
            let arr = array.slice(startIndex, endIndex)
            Array.push(arr)
            startIndex += 10
            endIndex += 10
            noOfPages -= 1
        }
        setPages([...Array])
    }

    const pageSelection = (pageNo) => {
        var array = []
        if (pageNo && pageNo >= pages.length) {
            setPageNo(pageNo - 1)
        }
        if (pages && pages.length > 0) {
            array = pages[pageNo]
        }
        array && array.length > 0 && setPage([...array])
    }

    useEffect(() => {
        search && pagination(search)
        pageSelection(pageNo)
        // selected && console.log(selected);
    }, [search, pageNo, pages])

    useEffect(() => {
        // console.log('users');
        // console.log(users);
        // console.log('pages');
        // console.log(pages);
    }, [selected])

    //remove user from the list
    const handleDelete = (id) => {
        setUsers([...users.filter(e => e.id !== id)])
    }

    const handleSelect = (id) => {
        let check
        if (selected && selected.length > 0) {
            check = selected.includes(id)
        } else {
            check = false
        }
        if (!check) {
            selected.length > 0 ? setSelected([...selected, id]) : setSelected([id])
        } else {
            setSelected([...selected.filter(e => e !== id)])
        }
        // console.log(selected);
    }

    return (
        <Box>
            {page && page.length > 0 && page.map((user, index) =>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mt: -1.1,
                }} key={user.id}

                >
                    <Box bgcolor={selected.length > 0 && selected.includes(user.id) && 'lightgrey'}>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            height: '1.8rem',
                            // mb: 1,
                            pt: 1,
                            pl: 1,
                        }}

                        >
                            <Box sx={{
                                // bgcolor: 'lightcoral',
                                ml: 1.7
                            }}>
                                <Checkbox
                                    checked={selected.length > 0 && selected.includes(user.id)}
                                    onClick={() => handleSelect(user.id)}
                                    name="Red"
                                    size="small"
                                    mr='2rem'
                                />
                            </Box>

                            <Box sx={{
                                // bgcolor: 'lightblue',
                                width: '15rem',
                                ml: 8
                            }}>
                                <Typography>{user.name}</Typography>
                            </Box>

                            <Box sx={{
                                // bgcolor: 'lightgreen',
                                width: '15rem',
                                ml: 12
                            }}>
                                <Typography>{user.email}</Typography>
                            </Box>

                            <Box sx={{
                                // bgcolor: 'yellow',
                                width: '15rem',
                                ml: 12
                            }}>
                                <Typography>{user.role}</Typography>
                            </Box>

                            <Box sx={{
                                width: '15rem',
                                ml: 10,
                                display: 'flex',
                                gap: 3
                            }}>
                                <IconButton>
                                    <EditNoteOutlinedIcon onClick={() => {
                                        setEditUser(user)
                                        setOpen(true)
                                    }} />
                                </IconButton>
                                <IconButton onClick={() => handleDelete(user.id)}>
                                    <DeleteOutlineIcon color="error" />
                                </IconButton>
                            </Box>
                        </Box>

                        {/* <Box sx={{
                            position:'absolute',
                            top:'5rem'
                        }}> */}
                            <hr />
                        {/* </Box> */}

                        {/* <Box sx={{pt:}}> */}
                        {/* </Box> */}
                    </Box>
                    {/* edit user details menu */}
                    < Menu
                        // sx={{boxShadow:1}}
                        id="menu-appbar"
                        anchorOrigin={{
                            vertical: 100,
                            horizontal: 500,
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={open}
                        onClose={e => setOpen(false)}
                    >
                        {editUser && <EditMenu setOpen={setOpen} open={open} user={editUser} />}

                    </Menu>
                </Box>
            )
            }


        </Box >
    )
}

export default TableRow