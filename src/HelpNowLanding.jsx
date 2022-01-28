import React from 'react';
import './App.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from "react-router-dom";
import MentalHealth from "./MentalHealth.png";
import TalkToImg from "./TalkTo.png";

const HelpNowLanding = () => (
  <Row className='full-height'>
    <Col xs={12} className='vertical-center'>
      <h1 className="title">Emergency help</h1>
      <HealthDay />
      <TalkTo />
    </Col>
  </Row>
);

const HealthDay = () => (
    <Row >
        <Col xs={12}>
            <Link className='' to='/'>
                <div className='cta-container light-green'>
                    <div>
                        <p className='cta'>Take a mental health day </p>
                        <p className='description'>We will inform your manager and take care of the rest!</p>
                    </div>
                    <img className='icon' src={MentalHealth} alt="MentalHealth" />
                </div>
            </Link>
        </Col>
    </Row>
);

const TalkTo = () => (
    <Row >
        <Col xs={12}>
            <Link className='' to='/'>
                <div className='cta-container light-brown'>
                    <div>
                        <p className='cta'>Talk to someone</p>
                        <p className='description'>Small test to describe the process of taking a mental day</p>
                    </div>
                    <img className='icon' src={TalkToImg} alt="TalkTo" />
                </div>
            </Link>
        </Col>
    </Row>
);



export default HelpNowLanding;
