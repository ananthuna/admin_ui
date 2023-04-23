import { Box, Checkbox, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { UserContext } from '../../Context/Context'

function TableHead() {
  const {
    setSelected,
    selected,
    page,
    setSelectionAll,
    selectionAll
  } = useContext(UserContext)

  const handleSelectAll = () => {
    const userID = []
    if (selected.length < 10) {
      page.forEach(element => {
        userID.push(element.id)
      });
      setSelected([...userID])
      setSelectionAll(true)
    } else {
      setSelected([])
      setSelectionAll(false)
    }

  }
  


  return (
    <Box>
      <hr />
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
      }}>

        <Box sx={{
          pl: 3.4
        }}>
          <Checkbox
            checked={selectionAll}
            onChange={handleSelectAll}
            name="Red"
            size="small"
            mr='2rem'
          />
        </Box>

        <Box sx={{
          width: '15rem',
          ml: 8
        }}>
          <Typography fontSize='1.2rem'><b>Name</b></Typography>
        </Box>
        <Box sx={{
          width: '15rem',
          ml: 12
        }}>
          <Typography fontSize='1.2rem'><b>Email</b></Typography>
        </Box>
        <Box sx={{
          width: '15rem',
          ml: 12
        }}>
          <Typography fontSize='1.2rem'><b>Role</b></Typography>
        </Box>
        <Box sx={{
          width: '15rem',
          ml: 12
        }}>
          <Typography fontSize='1.2rem'><b>Actions</b></Typography>
        </Box>
      </Box>
      <hr />
    </Box>
  )
}

export default TableHead