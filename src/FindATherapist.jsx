import React, {Fragment} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Form} from 'react-bootstrap';

const FindATherapist = () => (
  <Fragment>
    <Row>
      <div className='title-container peach'>
      <h1 className='title'>Find a Therapist Questionnaire</h1>
      <p className='description'>To make sure that the right therapy services are recommended to you, please answer the following questions.</p>
    </div>
    </Row>
    <Row >  
      <Col xs={12}>
        <Form>
          <p className='form-heading'>Question 1</p>
          <p className='form-description'>On a scale of 1 to 10 rate your mood</p>
          <p className='form-subtext'>1 being lowest or unhappiest, 10 being highest or happiest</p>
        </Form>
      </Col>
    </Row>
    <Row>
      
    </Row>
    <Row >  
      <Col xs={12}>
        <Form>
          <p className='form-heading'>Question 2</p>
          <p className='form-description'>On a scale of 1 to 10 rate your mood</p>
          <p className='form-subtext'>Select all categories that best describe the help you need.</p>
        </Form>
      </Col>
    </Row>
    <Row>
      <Col xs={6}><label><input type="checkbox" name="checkbox" />Select me</label></Col>
      <Col xs={6}><label><input type="checkbox" name="checkbox" />Select me</label></Col>
    </Row>
  </Fragment>
  );

export default FindATherapist;
