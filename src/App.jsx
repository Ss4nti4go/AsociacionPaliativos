import React from 'react';
import Header from './components/Header';
import Index from './components/Index.jsx';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DonacionPage from './components/DonacionPage.jsx';
import GaleriaPage from './components/GaleriaPage.jsx';



function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Index />}/>
        <Route path="/inicio"  element={<Index />} />
        <Route path="/donacion" element={<DonacionPage />} />
        <Route path="/galeria" element={<GaleriaPage />} /> 
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;