// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hdr from './Components/Header';
import Hm from './Components/Home';
import Abt from './Components/About';
import Src from './Components/Services';
import Act from './Components/Activity';
import Ft from './Components/Footer';
import Cnt from './Components/Contact';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Hdr />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Hm />} />
            <Route path="/about" element={<Abt />} />
            <Route path="/services" element={<Src />} />
            <Route path="/activities" element={<Act />} />
            <Route path="/contact" element={<Cnt />} />
          </Routes>
        </main>
        <Ft />
      </div>
    </Router>
  );
};

export default App;
