import React from 'react';
import { Link } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Siren2 from './siren2.png'

const HelpLater = () => (
  <Row >  
    <Col xs={12}>
      <Link className='' to='/help-now'> 
        <div className='cta-container light-yellow'>
          <div>
            <p className='cta'>Non-urgent help</p>
            <p className='description'>Looking to start a journey to wellness? Here is a simpler path to get there.</p>
          </div>
          <img className='icon' src={Siren2} alt="Siren" />
        </div>
      </Link>
    </Col>
  </Row>
);

export default HelpLater
