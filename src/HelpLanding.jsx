import React from 'react';
import './App.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HelpNow from './HelpNow';
import HelpLater from './HelpLater.jsx';

const HelpLanding = () => (
  <Row className='full-height'>
    <Col xs={12} className='vertical-center'>
      <h1 className="title">What help do you need?</h1>
      <HelpNow />
      <HelpLater />
    </Col>
  </Row>
);

export default HelpLanding;
