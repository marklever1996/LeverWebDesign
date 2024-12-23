import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;