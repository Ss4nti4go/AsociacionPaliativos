import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


// Proyectos iniciales
export const proyectosIniciales = [
  {
    id: 1,
    titulo: "Proyecto del hospital Saint Bois",
    contenido: "Este proyecto busca implementar nuevas tecnologías y técnicas en los cuidados paliativos...",
    imagen: "https://placehold.co/600x400?text=Proyecto+Cuidados+Paliativos",
    detalles: "Detalles completos del proyecto de Innovación en Cuidados Paliativos. Este proyecto tiene como objetivo..."
  },
  {
    id: 2,
    titulo: "Expansión de Servicios Médicos",
    contenido: "La expansión de nuestros servicios médicos permitirá llegar a más personas...",
    imagen: "https://placehold.co/600x400?text=Expansión+Servicios+Médicos",
    detalles: "Detalles completos sobre la expansión de nuestros servicios médicos. Incluye nuevas áreas de atención..."
  },
  {
    id: 3,
    titulo: "Programa de Voluntariado",
    contenido: "Nuestro programa de voluntariado conecta personas con pacientes en cuidados paliativos...",
    imagen: "https://placehold.co/600x400?text=Programa+de+Voluntariado",
    detalles: "Detalles completos del programa de voluntariado. Los voluntarios brindarán apoyo emocional a los pacientes..."
  }
];

// Componente principal de Proyectos
export default function Proyectos() {
  const [proyectos, setProyectos] = useState(proyectosIniciales);
  const [esAdmin, setEsAdmin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const esComputadoraAdmin = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
    setEsAdmin(esComputadoraAdmin);
  }, []);

  // Función para añadir un nuevo proyecto
  const manejarAñadir = async () => {
    // Muestra un modal para introducir el nombre del proyecto
    const { value: titulo } = await Swal.fire({
      title: 'Añadir Nuevo Proyecto',
      input: 'text',
      inputLabel: 'Nombre del Proyecto',
      inputPlaceholder: 'Introduce el nombre del nuevo proyecto',
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return '¡El nombre del proyecto es obligatorio!';
        }
      }


    });

    // Si se introdujo un nombre, añade el proyecto
    if (titulo) {
      const nuevoProyecto = {
        id: proyectos.length + 1,
        titulo: titulo,
        contenido: "Contenido del nuevo proyecto...",
        imagen: "https://placehold.co/600x400?text=Nuevo+Proyecto",
        detalles: "Detalles del nuevo proyecto..."
      };
      setProyectos([...proyectos, nuevoProyecto]); // Añade el nuevo proyecto al estado
      sweetAlertProyecto();
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Proyectos</h1>
      {esAdmin && (
        <button
          onClick={manejarAñadir}
          className="mb-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
        >
          Añadir Proyecto
        </button>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {proyectos.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={item.imagen} alt={item.titulo} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{item.titulo}</h2>
              <p className="text-gray-600 mb-4">{`${item.contenido.substring(0, 100)}...`}</p>
              <button
                onClick={() => navigate(`/proyecto/${item.id}`)}
                className="text-blue-500 hover:text-blue-600"
              >
                Ver más
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function sweetAlertProyecto() {
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Proyecto agregado exitosamente",
    showConfirmButton: false,
    timer: 1000,
  });
}
