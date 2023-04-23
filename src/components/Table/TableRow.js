import { Box, Checkbox, IconButton, Typography } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { UserContext } from '../../Context/Context';

function TableRow() {
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
        setPageNo
    } = useContext(UserContext)

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
            let array = users.slice(startIndex, endIndex)
            Array.push(array)
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
        users && pagination(users)
        pageSelection(pageNo)
        // selected && console.log(selected);
    }, [users, pageNo, pages])

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
        <>
            {page && page.map((user, index) =>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mt: -1.1,
                }} key={user.id}>
                    <Box bgcolor={selected.length > 0 && selected.includes(user.id) && 'lightgrey'}>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            height: '1.8rem',

                            pt: 1,
                            pl: 1
                        }}>
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
                                    <EditNoteOutlinedIcon />
                                </IconButton>
                                <IconButton onClick={() => handleDelete(user.id)}>
                                    <DeleteOutlineIcon color="error" />
                                </IconButton>
                            </Box>
                        </Box>

                        {/* <Box sx={{pt:}}> */}
                        <hr />
                        {/* </Box> */}
                    </Box>
                </Box>)}
        </>
    )
}

export default TableRow