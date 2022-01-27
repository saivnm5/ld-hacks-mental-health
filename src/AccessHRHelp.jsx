import React from 'react';
import './App.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import accesshrhelp from './images/accesshrhelp.png'

const AccessHRHelp = () => (
  <Row>
    <Col xs={12}>

        <div className='cta-container light-green'>
          <div>
            <p className='cta'>Access HR Help </p>
            <p className='description'>Small text to describe the process of finding osmeone to talk to immediately</p>
          </div>
          <img className='icon' src={accesshrhelp} alt="accesshrhelp" />
        </div>

    </Col>
  </Row>
);

export default AccessHRHelp;
