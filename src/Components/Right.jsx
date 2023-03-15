import React from 'react'
import { Box,styled } from '@mui/material'




const RightComponent = styled(Box)
`
width:50%;
height:100vh;
background-color:#bc6c25;

`

const Right = () => {
  return (
    <RightComponent></RightComponent>
  )
}

export default Right