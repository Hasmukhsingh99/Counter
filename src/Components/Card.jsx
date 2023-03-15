import React from 'react'
import { Box,styled } from '@mui/material';
import Feature from './Feature';


const CardDesign = styled(Box)`
position:absolute;
width:50vw;
top:50%;
left:50%;
transform:translate(-50%,-50%);
height:70vh;
background-color:#fefae0;
border-radius:10px;
-webkit-box-shadow:0 0 20px rgba(0,0,0,0.8);
-moz-box-shadow:0 0 20px rgba(0,0,0,0.8);
box-shadow:0 0 20px rgba(0,0,0,0.8);
`

const Card = () => {
  return (
    <CardDesign>
        <Feature/>
    </CardDesign >
  )
}

export default Card


