import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import HelpLater from './HelpLater.jsx';
import HelpLanding from './HelpLanding.jsx';
import HelpNow from './HelpNow.jsx';
import HelpLaterLanding from './HelpLaterLanding.jsx';

const App = () => (
  <Container className='full-height'>
    <Routes>
      <Route path="/" element={HelpLanding()} />
      <Route path="help-now" element={HelpNow()} />
      <Route path="help-later" element={HelpLater()} />
      <Route path="help-later-landing" element={HelpLaterLanding()} />
    </Routes>
  </Container>
);

export default App;
