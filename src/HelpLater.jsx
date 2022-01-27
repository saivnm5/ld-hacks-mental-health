import React from 'react';
import { Link } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Siren1 from './siren1.png'

const HelpLater = () => (
  <Row >  
    <Col xs={12}>
      <Link className='' to='/help-now'> 
        <div className='cta-container light-green'>
          <div>
            <p className='cta'>I need help later </p>
            <p className='description'>You can browse through our curalted list of mental health professionals, and book an appointment whenever you need.</p>
          </div>
          <img className='icon' src={Siren1} alt="Siren" />
        </div>
      </Link>
    </Col>
  </Row>
);

export default HelpLater
