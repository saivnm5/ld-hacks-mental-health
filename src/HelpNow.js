import React, { Component } from 'react';

import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const HelpNowMoreOptions = () => (
  <Row > 
    <Col>
      <Button variant="red">Want To Talk?</Button> 
    </Col>
    <Col>
      <Button variant="red">Prefer To Text?</Button> 
    </Col>
  </Row> 
);

class HelpNow extends Component {
  constructor(props) {
    super(props);
    this.state = {showOptions: false};
  }

  render() {
      return (
        <Row className="justify-content-md-center">
          <Col xs={9} ld={5}>
            <Row >  
              <Col xs={12}>
                <Button variant="red" onClick={(e) => this.setState({showOptions: !this.state.showOptions})}> 
                  I need help now 
                </Button>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                We will connect you to our on-call mental health ambassador.  And they will help you with everything you need.
              </Col>
            </Row>
            { this.state.showOptions ? <HelpNowMoreOptions />  : null }
          </Col>
        </Row>
        );
  }
}

export default HelpNow;
