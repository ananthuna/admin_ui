import { Box } from '@mui/system'
import React, { useEffect, useContext } from 'react'
import Table from '../components/Table/Table'
import axios from 'axios'
import { UserContext } from '../Context/Context'

const url = 'https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json'

function AdminUI() {
  const { setUsers } = useContext(UserContext)

  useEffect(() => {
    axios.get(url).then((res) => {
      setUsers([...res.data])
    }).catch((err) => {
      console.log(err.message);
    })
  }, [])


  return (
    <Box>
      <Table />
    </Box>
  )
}

export default AdminUI