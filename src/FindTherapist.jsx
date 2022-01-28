import React from 'react';
import { Link } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import findtherapist from './images/findtherapist.png'

const FindTherapist = () => (
  <Row >
    <Col xs={12}>
      <Link className='' to='/find-a-therapist'>
        <div className='cta-container peach'>
          <div>
            <p className='cta'>Find a therapist </p>
            <p className='description'>Whether its personal or professional, we will help you find the right services for you</p>
          </div>
          <img className='icon' src={findtherapist} alt="findtherapist" />
        </div>
      </Link>
    </Col>
  </Row>
);

export default FindTherapist
