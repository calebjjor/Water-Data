import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home.js';
import ClientsPage from './components/ClientNamesPage.js';
import ClientData from './components/clientPage.js';
import Tab from './components/tab';

const App = () => {
  return (
    <Router>
      <nav>
        <Tab label="Home" to="/" />
        <Tab label="Clients" to="/clientNames" />
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clientNames" element={<ClientsPage />} />
        <Route path="/clients/:clientName" element={<ClientData />} />
      </Routes>
    </Router>
  );
};

export default App;