import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import HelpLater from './HelpLater.jsx';
import HelpLanding from './HelpLanding.jsx';
import Emergencyhelp from './EmergencyHelp.jsx';


const App = () => (
  <Container className='full-height'>
    <Routes>
      <Route path="/" element={HelpLanding()} />
      <Route path="help-now" element={Emergencyhelp()} />
      <Route path="help-later" element={HelpLater()} />
    </Routes>
  </Container>
);

export default App;
