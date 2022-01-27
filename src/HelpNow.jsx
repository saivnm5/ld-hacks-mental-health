import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Siren1 from './siren1.png'

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
  <Row >  
    <Col xs={12}>
      <Link className='' to='/help-now'> 
        <div className='cta-container light-green'>
          <div>
            <p className='cta'>I need help now</p>
            <p className='description'>We will connect you to our on-call mental health ambassador.  And they will help you with everything you need.</p>
          </div>
            <img className='icon' src={Siren1} alt="Siren" />
        </div>
      </Link>
    </Col>
  </Row>
  );

export default HelpNow;
