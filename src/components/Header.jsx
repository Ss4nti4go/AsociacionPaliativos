'use client';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import AdminLoginForm from './adminLoginForm';
import { useAdmin } from './adminContext'; // Asegúrate de que la ruta sea correcta
import AMCP from '../assets/AMCP.png';
function Header() {
  const { isAdmin, toggleAdmin, disableAdmin } = useAdmin();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAdminLoginOpen, setIsAdminLoginOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleSection = () => {
    setIsOpen(!isOpen);
  };

  const toggleAdminLogin = () => {
    setIsAdminLoginOpen(!isAdminLoginOpen);
  };

  return (
    <div className="font-sans">
      <header className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-4 lg:p-6 max-h-45">
        {isAdmin ? (
          <button
            className="nav-link block transition-all duration-300 text-s"
            onClick={disableAdmin} // Usa la función del contexto para salir del modo admin
          >
            cerrar modo admin
          </button>
        ) : (
          <button
            className="nav-link block transition-all duration-300 text-s"
            onClick={toggleAdminLogin}
          >
            ¿Eres admin?
          </button>
        )}
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-between items-center">
            <div className="w-full lg:w-1/3 text-center lg:text-left mb-4 lg:mb-0">
              <div className="logo-text">
                <p className="text-xl lg:text-3xl font-bold border-b-4 border-orange-400 pb-2 mb-2 inline-block">
                  ASOCIACIÓN DE AMIGOS
                </p>
                <p className="text-xl lg:text-3xl font-bold text-orange-400">
                  DE CUIDADOS PALIATIVOS
                </p>
              </div>
            </div>

            <div className="w-full lg:w-1/4 flex flex-col items-center mb-4 lg:mb-0  lg:flex">
              <img
                src={AMCP}
                alt="Logo"
                width={180}
                height={128}
                className="mb-4"
              />
              <button
                className="nav-link text-xl font-semibold text-orange-400 hover:text-yellow-500 transition-colors duration-300"
                onClick={toggleSection}
              >
                Quiénes somos
              </button>
            </div>

            <div className="mx-auto lg:flex lg:justify-end">
              <button
                className="lg:hidden absolute top-4 right-4 text-white z-30"
                onClick={toggleMobileMenu}
              >
                {isMobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
              </button>

              {isMobileMenuOpen && (
                <div
                  className="fixed inset-0 bg-black bg-opacity-50 z-10"
                  onClick={closeMobileMenu}
                ></div>
              )}

              <nav
                className={`fixed top-0 right-0 h-screen  bg-orange-200 p-4 z-20 transform transition-transform duration-500 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} lg:relative lg:transform-none lg:bg-transparent w-14vw px-8 py-8 lg:py-0 lg:p-0 lg:flex lg:h-auto lg:translate-x-0 lg:flex-row`}
              >
                <ul className="flex flex-col lg:flex-row lg:justify-end space-y-4 lg:space-y-0 lg:space-x-4 font-semibold text-xl">
                  <li><Link to="/Inicio" className="nav-link block hover-link transition-all duration-300 hover:text-yellow-500" onClick={closeMobileMenu}>Inicio</Link></li>
                  <li><Link to="/galeria" className="nav-link block hover-link transition-all duration-300 hover:text-yellow-500" onClick={closeMobileMenu}>Galería</Link></li>
                  <li><Link to="/contacto" className="nav-link block hover-link transition-all duration-300 hover:text-yellow-500" onClick={closeMobileMenu}>Contacto</Link></li>
                  <li><Link to="/donacion " className="nav-link block hover-link transition-all duration-300 hover:text-yellow-500" onClick={closeMobileMenu}>Donaciones</Link></li>
                </ul>
              </nav>

            </div>
          </div>
        </div>
      </header>

      {isAdminLoginOpen && (
        <AdminLoginForm
          onClose={toggleAdminLogin}
          onLogin={toggleAdmin} // Llama a la función del contexto para establecer el modo admin
        />
      )}

      <div
        id="quienes-somos-section"
        className={`bg-gradient-to-b from-orange-200 to-orange-300 text-lg px-4 lg:px-12 shadow shadow-gray-500 shadow-lg overflow-hidden transition-all duration-1000 ease-in-out mb-20 lg:mb-0 py-8 ${isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0  font-raleway'
          }`}
      >
        <div className="container mx-auto px-4 lg:px-6 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-black font-raleway">Nuestra Misión</h3>
              <p className="mb-4 text-black font-raleway">
                La Asociación de Amigos de Cuidados Paliativos es una organización sin fines de lucro dedicada a mejorar la calidad de vida de pacientes con enfermedades terminales y sus familias. Nuestra misión es proporcionar apoyo emocional, físico y espiritual a quienes enfrentan el final de la vida, asegurando que cada individuo reciba cuidados compasivos y dignos.
              </p>
              <p className="mb-4 text-black  font-raleway">
                Trabajamos en estrecha colaboración con profesionales de la salud, voluntarios y la comunidad para ofrecer servicios integrales de cuidados paliativos, educación y apoyo a las familias.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-black  font-raleway">Nuestros Servicios</h3>
              <ul className="list-disc list-inside space-y-2 text-black  font-raleway">
                <li>Atención domiciliaria especializada</li>
                <li>Asesoramiento y apoyo emocional</li>
                <li>Terapias complementarias</li>
                <li>Capacitación para cuidadores</li>
                <li>Apoyo en la toma de decisiones médicas</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <style>
        {`
         .hover-link {
  position: relative;
}

.hover-link::before {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #F59E0B; /* Color naranja o amarillo */
  visibility: hidden;
  transition: all 0.3s ease-in-out;
}

.hover-link:hover::before {
  visibility: visible;
  width: 100%;
}

        `}
        
      </style>
    </div>
  );
}

export default Header;
