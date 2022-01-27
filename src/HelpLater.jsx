import React from 'react';
import { Link } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const HelpLater = () => {
  return (
      <Row>
        <Col xs={9} ld={5}>
          <Row>
            <Col xs={12}><Link to="/help-later"> I need help later </Link></Col>
          </Row>
          <Row>
            <Col xs={12}>You can browse through our curalted list of mental health professionals, and book an appointment whenever you need.
            </Col>
          </Row>
        </Col>
      </Row>
  );
};

export default HelpLater
