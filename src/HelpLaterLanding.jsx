import React from 'react';
import './App.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FindTherapist from './FindTherapist.jsx';
import AccessHRHelp from './AccessHRHelp.jsx';
import FitnessLifestyle from './FitnessLifestyle.jsx';
import LCLEnterpriseHelp from './LCLEnterpriseHelp.jsx';

const HelpLaterLanding = () => (
  <Row>
    <Col xs={12}>
       <h1 className="title">Non-Emergency help</h1>
       <FindTherapist />
       <AccessHRHelp />
       <FitnessLifestyle />
       <LCLEnterpriseHelp />
    </Col>
  </Row>
);

export default HelpLaterLanding;
