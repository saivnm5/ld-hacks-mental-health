import React from 'react';
import { Link } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import lclenterprise from './images/lclenterprise.png'

const LCLEnterpriseHelp = () => (
  <Row >
    <Col xs={12}>
      <Link className='' to='/enterprise-help'>
        <div className='cta-container pale-cyan'>
          <div>
            <p className='cta'>Loblaws Resources</p>
            <p className='description'>Access all Loblaws resources here</p>
          </div>
          <img className='icon' src={lclenterprise} alt="lclenterprise" />
        </div>
      </Link>
    </Col>
  </Row>
);

export default LCLEnterpriseHelp