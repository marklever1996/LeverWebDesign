import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import LandingPage from './pages/LandingPage';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Services from './pages/Services';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/over-mij" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/diensten" element={<Services />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;