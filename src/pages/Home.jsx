import React from 'react'
import { Container,Button } from 'react-bootstrap'
import"../Style/Home.css"


export const Home = () => {
  return (
   <Container>
        <h1>WELCOME TO OUR WEBSITE</h1>
        <p>WE ARE HERE TO SERVE YOU</p>
        <Button variant="primary" type="Submit">Get started</Button>

   </Container>
  );
};
