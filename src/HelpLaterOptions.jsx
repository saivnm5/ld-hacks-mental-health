import React from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const HelpLaterOptions = () => {
  return (
      <Row>
        <Col xs={9} ld={5}>
          <Row>
            <Col xs={12}><Button> I need help later </Button></Col>
          </Row>
          <Row>
            <Col xs={12}>You can browse through our curalted list of mental health professionals, and book an appointment whenever you need.
            </Col>
          </Row>
        </Col>
      </Row>
  );
};

export default HelpLaterOptions
