import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home';
import ChatHistory from './Components/Pages/ChatHistory';
import About from './Components/Pages/About';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/ChatHistory" element={<ChatHistory />} />
      </Routes>
    </Router>
  );
}

export default App;