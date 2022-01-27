import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import HelpLater from './HelpLater.jsx';
import HelpNowLanding from './HelpNowLanding.jsx';
import HelpNow from './HelpNow.jsx';

const App = () => (
  <Container>
    <Routes>
          <Route path="/" element={HelpNowLanding()} />
          <Route path="help-now" element={HelpNow()} />
          <Route path="help-later" element={HelpLater()} />
    </Routes>
  </Container>
);

export default App;
