import React from 'react';
import { FacebookIcon, TwitterIcon, InstagramIcon } from 'lucide-react';
import { Link } from 'react-router-dom';	

function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-6 text-center w-full flex justify-evenly ">
      <div className="t2 w-1/2">
        <div className="informacion-contacto mb-4">
          <p>Email: amigoscuidadospaliativos@gmail.com</p>
          <Link to="/contacto" className='transition-all duration-300 ease-in hover:scale-140 text-white hover:text-white text-lg mt-6 rounded my-2 hover:bg-orange-500 py-1 px-1 font-bold border-b-2 border-white border-dotted '>¡Contactanos aqui!</Link>
        </div>
        <div className="redes-sociales mb-4 flex justify-evenly w-1/5 mx-auto">
          <a href="#" className="hover:underline transition-all duration-300 ease-in hover:scale-125"><FacebookIcon /></a>
          <a href="#" className="hover:underline transition-all duration-300 ease-in hover:scale-125"><TwitterIcon /></a>
          <a href="#" className="hover:underline transition-all duration-300 ease-in hover:scale-125"><InstagramIcon /></a>

        </div>
        <p>&copy; {new Date().getFullYear()} Asociación de Paliativos. Todos los derechos reservados.</p>
      </div>
      <div className="t1 border-l-2 pl-2 w-1/2">
        <a href="https://www.impo.com.uy/bases/leyes/18335-2008" className="hover:underline transition-all duration-300 ease-in hover:scale-125" target='_blank'>Amparado por la Ley N° 18335</a>
        <h5 className="mt-4 text-s text-gray-400 mb-4 ">CAPITULO I - DE LAS DISPOSICIONES GENERALES</h5>
        <p className="mt-4 text-sm text-gray-400 mb-4 ">
          Artículo 1
          La presente ley regula los derechos y obligaciones de los pacientes y
          usuarios de los servicios de salud con respecto a los trabajadores de la
          salud y a los servicios de atención de la salud.</p>
        <p className="mt-4 text-sm text-gray-400 mb-4 ">
          Artículo 2
          Los pacientes y usuarios tienen derecho a recibir tratamiento igualitario
          y no podrán ser discriminados por ninguna razón ya sea de raza, edad,
          sexo, religión, nacionalidad, discapacidades, condición social, opción u
          orientación sexual, nivel cultural o capacidad económica.
        </p>
      </div>
      <style>
        {`
          @media (max-width: 768px) {
            .informacion-contacto {
              text-align: center;
            }
            .redes-sociales {
              justify-content: space-evenly;
              width: 100%;
            }
              footer {
                flex-direction: column;
                
              }
            .t1, .t2 {
              width: 100%;
              border: none;
              margin-bottom: 20px;
              font-size: 13px;
            }
              .t1{
                border-top: 1px solid #fff;
              }
          }
        `}
      </style>
    </footer>
  );
}

export default Footer;
