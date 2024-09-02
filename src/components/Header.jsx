'use client';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleSection = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="font-sans">
      <header className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-4 lg:p-6 max-h-45">
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

            <div className="w-full lg:w-1/4 flex flex-col items-center mb-4 lg:mb-0">
              <img
                src="./src/assets/AMCP.png"
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

            <div className="w-full lg:w-1/3 lg:flex lg:justify-end">
              <button
                className="lg:hidden absolute top-4 right-4 text-white z-20"
                onClick={toggleMobileMenu}
              >
                {isMobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
              </button>

              {/* Fondo negro transparente */}
              {isMobileMenuOpen && (
                <div
                  className="fixed inset-0 bg-black bg-opacity-50 z-10"
                  onClick={closeMobileMenu}
                ></div>
              )}

              {/* Menú */}
              <nav
                className={`fixed top-0 right-0 h-screen w-3/4 max-w-x bg-orange-200 p-4 z-20 transform transition-transform duration-500 ${
                  isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                } lg:relative lg:transform-none lg:bg-transparent lg:p-0 lg:flex lg:w-auto lg:h-auto lg:translate-x-0 lg:flex-row`}
              >
                <ul className="flex flex-col lg:flex-row lg:justify-end space-y-4 lg:space-y-0 lg:space-x-4 font-semibold text-xl">
                  <li><Link to="/Inicio" className="nav-link block transition-all duration-300 active " onClick={closeMobileMenu}>Inicio</Link></li>
                  <li><Link to="/galeria" className="nav-link block transition-all duration-300" onClick={closeMobileMenu}>Galería</Link></li>
                  <li><Link to="#contacto" className="nav-link block transition-all duration-300 " onClick={closeMobileMenu}>Contacto</Link></li>
                  <li><Link to="/donacion " className="nav-link block transition-all duration-300" onClick={closeMobileMenu}>Donaciones</Link></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <div 
        id="quienes-somos-section"
        className={`bg-orange-200 text-lg px-4 lg:px-12 text-white overflow-hidden transition-all duration-1000 ease-in-out mb-20 border-gray-300 py-8 ${
          isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container mx-auto px-4 lg:px-6 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-black">Nuestra Misión</h3>
              <p className="mb-4 text-black">
                La Asociación de Amigos de Cuidados Paliativos es una organización sin fines de lucro dedicada a mejorar la calidad de vida de pacientes con enfermedades terminales y sus familias. Nuestra misión es proporcionar apoyo emocional, físico y espiritual a quienes enfrentan el final de la vida, asegurando que cada individuo reciba cuidados compasivos y dignos.
              </p>
              <p className="mb-4 text-black">
                Trabajamos en estrecha colaboración con profesionales de la salud, voluntarios y la comunidad para ofrecer servicios integrales de cuidados paliativos, educación y apoyo a las familias.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-black">Nuestros Servicios</h3>
              <ul className="list-disc list-inside space-y-2 text-black">
                <li>Atención domiciliaria especializada</li>
                <li>Apoyo emocional y psicológico</li>
                <li>Grupos de apoyo para los familiares</li>
              </ul>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-2xl font-semibold mb-4 text-black">Nuestro Compromiso</h3>
            <p className="mb-4 text-black">
              Nos comprometemos a proporcionar cuidados paliativos de alta calidad, centrados en el paciente y su familia. Creemos en la dignidad de cada persona y en su derecho a recibir atención compasiva y respetuosa en todas las etapas de la vida.
            </p>
            <p className="text-black">
              Nuestro equipo multidisciplinario trabaja incansablemente para aliviar el sufrimiento, promover la comodidad y mejorar la calidad de vida de nuestros pacientes. Estamos para apoyar, cuidar y acompañar en los momentos más difíciles de la vida de nuestros pacientes.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .nav-link {
          position: relative;
          color: white;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 2px;
          bottom: -5px;
          left: 0;
          background-color: #FFA500;
          visibility: hidden;
          transform: scaleX(0);
          transition: all 0.2s ease-in-out;
        }

        
        .nav-link:hover {
          color: #FFA500;
        }

        .nav-link:hover::after {
          visibility: visible;
          transform: scaleX(1);
        }

        @media (max-width: 500px) {
          .nav-link::after {
            bottom: -2px;
          }
        }
      `}</style>
    </div>
  );
}

export default Header;
