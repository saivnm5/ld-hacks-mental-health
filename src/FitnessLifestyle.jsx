import React from 'react';
import { Link } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import fitnesslifestyle from './images/fitnesslifestyle.png'

const FitnessLifestyle = () => (
  <Row >
    <Col xs={12}>
      <Link className='' to='/fitness-lifestyle'>
        <div className='cta-container pale-blue'>
          <div>
            <p className='cta'>Fitness / Lifestyle </p>
            <p className='description'>Small text to describe the process of finding osmeone to talk to immediately</p>
          </div>
          <img className='icon' src={fitnesslifestyle} alt="fitnesslifestyle" />
        </div>
      </Link>
    </Col>
  </Row>
);

export default FitnessLifestyle