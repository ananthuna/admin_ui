import React, { useContext } from 'react'
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
        setSelectionAll,
        setSelected
    } = useContext(UserContext)


    const previousPage = () => {
        if (pageNo > 0) {
            setSelectionAll(false)
            setSelected(false)
            setPageNo(pageNo - 1)
        }
    }

    const nextPage = () => {
        console.log(pageNo + ':' + pages.length);
        if (pageNo < pages.length - 1) {
            setSelectionAll(false)
            setSelected(false)
            setPageNo(pageNo + 1)
        }
    }
    return (
        <Box sx={{
            display: 'flex',
            ml: 4
        }}>
            <Button color='error' variant="contained">Delete selected</Button>
            <Box sx={{
                display: 'flex',
                gap: 5,
                ml: '20rem'
            }}>

                {/* first page selection  */}
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
                </IconButton>




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

                {/* next page selection btn */}
                <IconButton sx={{
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

                {/* last page selection btn */}
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


            </Box>
        </Box >
    )
}

export default PageSelectButtons