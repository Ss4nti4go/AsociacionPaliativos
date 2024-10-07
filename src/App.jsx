import React from 'react';
import Header from './components/Header';
import Index from './components/Index.jsx';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DonacionPage from './components/DonacionPage.jsx';
import Contacto from './components/Contacto.jsx';
import GaleriaPage from './components/GaleriaPage.jsx';
import ProyectoDetalles from './components/ProyectoDetalles.jsx'; // Importa el nuevo componente
import NotFound from './components/404.jsx';
import { useState } from 'react';
import { AdminProvider } from './components/adminContext';
function App() {
  const [isAdmin, setIsAdmin] = useState(false);
 
  return (
    <AdminProvider >
    <BrowserRouter>
      <Header setIsAdmin={setIsAdmin}/>
      <Routes>
        <Route path="*" element={<NotFound />} /> {/* Ruta de error 404 */}
        <Route path="/" element={<Index />} />
        <Route path="/inicio" element={<Index />} />
        <Route path="/donacion" element={<DonacionPage />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/galeria" element={<GaleriaPage />} />
        <Route path="/proyecto/:id" element={<ProyectoDetalles />} /> {/* Nueva ruta para ver detalles del proyecto */}
      </Routes>
      <Footer/>
    </BrowserRouter>
    </AdminProvider>
  );
}

export default App;
