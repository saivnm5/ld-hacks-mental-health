import React from 'react';

import './App.css';
import Container from 'react-bootstrap/Container';
import HelpNow from './HelpNow';
import HelpLaterOptions from './HelpLaterOptions.jsx';

const App = () => (
  <Container className="p-3" >
    <h1 className="header">Welcome To Self Check</h1>
    <h6>We are here for you</h6>
    <HelpNow />
    <HelpLaterOptions />
 </Container>
);

export default App;
