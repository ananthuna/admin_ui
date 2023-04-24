import React, { useContext, useEffect, useRef } from 'react'
import KeyboardDoubleArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowLeftOutlined';
import KeyboardDoubleArrowRightOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowRightOutlined';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import { Avatar, Box, Button, IconButton } from '@mui/material';
import { UserContext } from '../../Context/Context';

function PageSelectButtons() {
    const {
        setPageNo,
        pages,
        pageNo,
        page,
        setSelectionAll,
        setSelected,
        selected,
        setUsers,
        users
    } = useContext(UserContext)
    const buttonRef = useRef(null)


    const previousPage = () => {
        if (pageNo > 0) {
            setSelectionAll(false)
            setSelected(false)
            setPageNo(pageNo - 1)
        }
    }

    const nextPage = () => {
        if (pageNo < pages.length - 1) {
            setSelectionAll(false)
            setSelected(false)
            setPageNo(pageNo + 1)
        }
    }

    const deleteSelected = () => {
        if (page.length === selected.length) setSelectionAll(false)
        var Array = users
        selected.forEach((id) => Array = [...Array.filter(e => e.id !== id)])
        setUsers([...Array])
        setSelected([])
    }

    useEffect(() => {
        buttonRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [pageNo])

    return (
        <Box sx={{
            display: 'flex',

            ml: 4
        }}>
            <Button
                color='error'
                variant="contained"
                onClick={deleteSelected}
            >Delete selected</Button>
            <Box sx={{
                display: 'flex',
                gap: 4,
                ml: '10rem'
            }}>

                {/* first page selection  */}
                {pageNo === 0 ?
                    (
                        <>
                            <IconButton sx={{
                                bgcolor: 'lightgrey',
                                "&:hover": {
                                    bgcolor: 'lightgrey'
                                },
                            }}
                            >
                                <KeyboardDoubleArrowLeftOutlinedIcon
                                    sx={{
                                        color: 'white'
                                    }} />
                            </IconButton>
                            {/* previous page selection */}
                            <IconButton sx={{
                                bgcolor: 'lightgrey',
                                "&:hover": {
                                    bgcolor: 'lightgrey'
                                },
                            }}
                            >
                                <KeyboardArrowLeftOutlinedIcon
                                    sx={{
                                        color: 'white'
                                    }} />
                            </IconButton></>
                    ) : (
                        <>
                            <IconButton sx={{
                                bgcolor: 'blue',
                                "&:hover": {
                                    bgcolor: 'blue'
                                },
                            }}
                                onClick={() => {
                                    setSelectionAll(false)
                                    setSelected(false)
                                    setPageNo(0)
                                }}
                            >
                                <KeyboardDoubleArrowLeftOutlinedIcon
                                    sx={{
                                        color: 'white'
                                    }} />
                            </IconButton>
                            {/* previous page selection */}
                            <IconButton sx={{
                                bgcolor: 'blue',
                                "&:hover": {
                                    bgcolor: 'blue'
                                },
                            }}
                                onClick={previousPage}
                            >
                                <KeyboardArrowLeftOutlinedIcon
                                    sx={{
                                        color: 'white'
                                    }} />
                            </IconButton></>
                    )}





                <Box sx={{
                    display: 'flex',
                    gap: 4,
                    maxWidth: '16.2rem',
                    overflow: 'hidden',
                }}>

                    {pages && pages.map((page, index) =>
                        <Box key={index}>


                            {/* page selection button */}
                            {pageNo === index ? (
                                <IconButton
                                    component="label"
                                    sx={{
                                        border: 1,
                                        borderColor: 'blue',

                                    }}
                                    onClick={() => {
                                        setSelectionAll(false)
                                        setSelected(false)
                                        setPageNo(index)
                                    }}
                                    ref={buttonRef}
                                >
                                    <Avatar sx={{
                                        width: 24,
                                        height: 24,
                                        bgcolor: 'transparent',
                                        color: 'blue'
                                    }} >{index + 1}</Avatar>

                                </IconButton>
                            ) : (
                                <IconButton sx={{
                                    // border: 1,
                                    bgcolor: 'blue',
                                    "&:hover": {
                                        bgcolor: 'blue'
                                    },
                                }}
                                    onClick={() => {
                                        setSelectionAll(false)
                                        setSelected(false)
                                        setPageNo(index)
                                    }}
                                >
                                    <Avatar sx={{
                                        width: 24,
                                        height: 24,
                                        bgcolor: 'transparent',
                                        color: 'white'
                                    }} >{index + 1}</Avatar>

                                </IconButton>
                            )}
                        </Box>
                    )}
                </Box>




                {pages.length - 1 === pageNo ?
                    (
                        <>
                            {/* next page selection btn */}
                            < IconButton sx={{
                                bgcolor: 'lightgrey',
                                "&:hover": {
                                    bgcolor: 'lightgrey'
                                },
                            }}
                            >
                                <KeyboardArrowRightOutlinedIcon sx={{
                                    color: 'white'
                                }} />
                            </IconButton>
                            <IconButton sx={{
                                bgcolor: 'lightgrey',
                                "&:hover": {
                                    bgcolor: 'lightgrey'
                                },
                            }}
                            >
                                <KeyboardDoubleArrowRightOutlinedIcon
                                    sx={{
                                        color: 'white'
                                    }} />
                            </IconButton>
                        </>
                    ) : (
                        <>
                            {/* next page selection btn */}
                            < IconButton sx={{
                                bgcolor: 'blue',
                                "&:hover": {
                                    bgcolor: 'blue'
                                },
                            }}
                                onClick={nextPage}
                            >
                                <KeyboardArrowRightOutlinedIcon sx={{
                                    color: 'white'
                                }} />
                            </IconButton>

                            <IconButton sx={{
                                bgcolor: 'blue',
                                "&:hover": {
                                    bgcolor: 'blue'
                                },
                            }}
                                onClick={() => {
                                    setSelectionAll(false)
                                    setSelected(false)
                                    setPageNo(pages.length - 1)
                                }}
                            >
                                <KeyboardDoubleArrowRightOutlinedIcon
                                    sx={{
                                        color: 'white'
                                    }} />
                            </IconButton>
                        </>

                    )}



            </Box>
        </Box >
    )
}

export default PageSelectButtons