import React, {Fragment} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
      </Col>
    </Row>
  </Fragment>
  );

export default FindATherapist;
