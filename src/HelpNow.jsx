import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const HelpNowMoreOptions = () => (
  <Row > 
    <Col>
      <Button variant="red">Want To Talk?</Button> 
    </Col>
    <Col>
      <Button variant="red">Prefer To Text?</Button> 
    </Col>
  </Row> 
);

const HelpNow = () => (
    <Row className="justify-content-md-center">
      <Col xs={9} ld={5}>
        <Row >  
          <Col xs={12}>
            <Link to='/help-now'> 
              I need help now 
            </Link>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            We will connect you to our on-call mental health ambassador.  And they will help you with everything you need.
          </Col>
        </Row>
      </Col>
    </Row>
  );

export default HelpNow;
