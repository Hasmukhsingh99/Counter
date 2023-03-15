
import React from 'react'
import { Box,styled } from '@mui/material'

const LeftComponent = styled(Box)`
width:50%;
height:100vh;
background-color:#dda15e;
`

const Left = () => {
  return (
    <LeftComponent></LeftComponent>
  )
}

export default Left