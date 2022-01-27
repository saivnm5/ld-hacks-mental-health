import React from 'react';
import './App.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HelpNow from './HelpNow';
import HelpLater from './HelpLater.jsx';

const HelpNowLanding = () => (
  <Row>
    <Col xs={12}>
      <h1 className="header">Welcome To Self Check</h1>
      <h6>We are here for you</h6>
      <HelpNow />
      <HelpLater />
    </Col>
  </Row>
);

export default HelpNowLanding;
