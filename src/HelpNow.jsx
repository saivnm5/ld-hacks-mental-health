import React from 'react';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Siren1 from './siren1.png'

const HelpNow = () => (
  <Row >  
    <Col xs={12}>
      <Link className='' to='/help-now'> 
        <div className='cta-container light-green'>
          <div>
            <p className='cta'>Urgent help</p>
            <p className='description'>Do you want to talk to someone or take a mental health day? We are here to help you.</p>
          </div>
            <img className='icon' src={Siren1} alt="Siren" />
        </div>
      </Link>
    </Col>
  </Row>
  );

export default HelpNow;
