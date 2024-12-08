import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Generation } from './pages/Generation';
import { Settings } from './pages/Settings';
import { Pricing } from './pages/Pricing';
import { Project } from './pages/Project';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/generation" replace />} />
          <Route path="/generation" element={<Generation />} />
          <Route path="/hub" element={<Settings />} />
          <Route path="/cout-api" element={<Pricing />} />
          <Route path="/projet" element={<Project />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;