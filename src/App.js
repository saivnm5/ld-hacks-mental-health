import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import HelpLanding from './HelpLanding.jsx';
import HelpNowLanding from './HelpNowLanding.jsx';
import HelpLaterLanding from './HelpLaterLanding.jsx';
import FindATherapist from './FindATherapist.jsx';
import LCLEnterpriseHelp from './LCLEnterpriseHelp.jsx';
import AccessHRHelp from './AccessHRHelp.jsx';
import FitnessLifestyle from './FitnessLifestyle.jsx';

const App = () => (
  <Container className='full-height'>
    <Routes>
      <Route path="/" element={HelpLanding()} />
      <Route path="help-now" element={HelpNowLanding()} />
      <Route path="help-later" element={HelpLaterLanding()} />
      <Route path="find-a-therapist" element={FindATherapist()} />
      <Route path="enterprise-help" element={LCLEnterpriseHelp()} />
      <Route path="fitness-lifestyle" element={FitnessLifestyle()} />
      <Route path="access-hr-help" element={AccessHRHelp()} />
    </Routes>
  </Container>
);

export default App;
