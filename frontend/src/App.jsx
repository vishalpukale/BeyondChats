
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import SetupOrganization from './components/SetupOrganization';
import ChatbotIntegration from './components/ChatbotIntegration';
import Navbar from './components/Navbar';
import './index.css'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navbar />} />
        <Route path="/register" element={<Register />} />
        <Route path="/setup-organization" element={<SetupOrganization />} />
        <Route path="/chatbot-integration" element={<ChatbotIntegration />} />
      </Routes>
    </Router>
  );
};

export default App;