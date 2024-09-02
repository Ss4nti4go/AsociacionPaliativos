import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-6 text-center position-relative top-100 w-full ">
      <div className="informacion-contacto mb-4">
        <p>Dirección: Calle Falsa 123, Montevideo, Uruguay</p>
        <p>Email: amigoscuidadospaliativos@gmail.com</p>
        <p>Teléfono: +598 123 4567</p>
      </div>
      <div className="redes-sociales mb-4">
        <a href="#" className="hover:underline">Facebook</a>
        <a href="#" className="hover:underline">Twitter</a>
        <a href="https://www.instagram.com/amigoscuidadospaliativos/" className="hover:underline" target="_blank">Instagram</a>
      </div>
      <p>&copy; {new Date().getFullYear()} Asociación de Paliativos. Todos los derechos reservados.</p>
    </footer>
  );
}

export default Footer;
