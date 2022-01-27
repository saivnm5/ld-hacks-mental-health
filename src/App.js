import React from 'react';

import './App.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HelpNow from './HelpNow';


const HelpLaterOptions = ({ children }) => {

  return (
    <>
      <Row className="justify-content-md-center">
        <Col xs={9} ld={5}>
          <Row><Button> I need help later </Button> </Row>
          <Row> You can browse through our curalted list of mental health professionals, and book an appointment whenever you need. </Row>
        </Col>
      
      </Row>
    </>
  );
};

function App() {
  return (
    <Container className="p-3" >

      <h1 className="header">Welcome To Self Check</h1>
      <h6>We are here for you</h6>

      <br/>

      
      <HelpNow />
      

      <br/>

      <HelpLaterOptions />


   </Container>
  );
}

export default App;
