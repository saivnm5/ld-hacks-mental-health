import React from 'react';
import { Link } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import findtherapist from './images/findtherapist.png'

const FindTherapist = () => (
  <Row >
    <Col xs={12}>
      <Link className='' to='/'>
        <div className='cta-container light-green'>
          <div>
            <p className='cta'>Find a therapist </p>
            <p className='description'>Small text to describe the process of finding osmeone to talk to immediately</p>
          </div>
          <img className='icon' src={findtherapist} alt="findtherapist" />
        </div>
      </Link>
    </Col>
  </Row>
);

export default FindTherapist