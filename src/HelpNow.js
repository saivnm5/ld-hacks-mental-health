import React from 'react';

import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const HelpNowMoreOptions = ({ children }) => {
  return (

      <Row > 
            <Col>
            <Button variant="red"> Want To Talk? </Button> 
            </Col>
            <Col>
            <Button variant="red"> Prefer To Text? </Button> 
            </Col>
           
          </Row> 
  
  ) 
}

class HelpNow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showOptions: false};
  }

    render() {
        return (
            <>
              <Row className="justify-content-md-center">
                <Col xs={9} ld={5}>
                  <Row >  
                    <Button variant="red" onClick={(e) => this.setState({showOptions: !this.state.showOptions})} > 
                    I need help now 
                    </Button> 
                    </Row>
                  <Row>We will connect you to our on-call mental health ambassador. And they will help you with everything you need.</Row>
                  { this.state.showOptions ? <HelpNowMoreOptions />  : null }
        
                </Col>
              
              </Row>
            </>
          );
    }
}

export default HelpNow;