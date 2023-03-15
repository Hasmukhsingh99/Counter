import React from "react";
import { Box, styled } from "@mui/material";
import './backend';

const FeatureComponent = styled(Box)`
  height: 100%;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  display: flex;
  gap: 2rem;
  font-size: 5vw;
  font-family: "Neue Montreal";
`;

const Container = styled(Box)`
  display: flex;
  gap: 1rem;
`;

const Button = styled('button')({
    padding:'12px 22px',
    borderRadius:10,
    border:'none',
    backgroundColor:'#606c38',
    color:'#f7ede2',
    fontSize:20,
    textTransform:'uppercase',
    boxShadow:'  -webkit-box-shadow: 0 10px 6px -6px #777',

})

const Feature = () => {
  return (
    <FeatureComponent>
      <span id="value">0</span>
      <Container>
        <Button className="btn decrease">Slowdown</Button>
        <Button className="btn clear">Discard</Button>
        <Button className="btn increase">Boost</Button>
      </Container>
    </FeatureComponent>
  );
};

export default Feature;
