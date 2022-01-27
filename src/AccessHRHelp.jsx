import React from 'react';
import { Link } from "react-router-dom";
import './App.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import accesshrhelp from './images/accesshrhelp.png'

const AccessHRHelp = () => (
  <Row>
    <Col xs={12}>
       <Link className='' to='/access-hr-help'>
            <div className='cta-container light-orange'>
              <div>
                <p className='cta'>Access HR Help </p>
                <p className='description'>Small text to describe the process of finding osmeone to talk to immediately</p>
              </div>
              <img className='icon' src={accesshrhelp} alt="accesshrhelp" />
            </div>
       </Link>

    </Col>
  </Row>
);

export default AccessHRHelp;
