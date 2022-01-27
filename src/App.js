import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import HelpLater from './HelpLater.jsx';
import HelpLanding from './HelpLanding.jsx';
import Emergencyhelp from './EmergencyHelp.jsx';
import HelpLaterLanding from './HelpLaterLanding.jsx';
import FindATherapist from './FindATherapist.jsx';
import LCLEnterpriseHelp from './LCLEnterpriseHelp.jsx';
import AccessHRHelp from './AccessHRHelp.jsx';
import FitnessLifestyle from './FitnessLifestyle.jsx';

const App = () => (
  <Container className='full-height'>
    <Routes>
      <Route path="/" element={HelpLanding()} />
      <Route path="help-now" element={Emergencyhelp()} />
      <Route path="help-later" element={HelpLater()} />
      <Route path="help-later-landing" element={HelpLaterLanding()} />
      <Route path="find-a-therapist" element={FindATherapist()} />
      <Route path="enterprise-help" element={LCLEnterpriseHelp()} />
      <Route path="fitness-lifestyle" element={FitnessLifestyle()} />
      <Route path="access-hr-help" element={AccessHRHelp()} />
    </Routes>
  </Container>
);

export default App;
