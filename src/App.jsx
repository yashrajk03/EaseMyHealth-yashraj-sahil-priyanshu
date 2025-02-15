

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from  './components/Home.jsx';
import Doctor from './components/Doctor.jsx'

function App() {
  return (
   
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Doctor" element={<Doctor/>} />
      </Routes>
    </Router>
  );
}

export default App;
