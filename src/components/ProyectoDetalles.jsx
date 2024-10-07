import { useParams, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { CalendarIcon, UserIcon } from 'lucide-react';
import { proyectosIniciales } from './Proyectos'; // Array de proyectos iniciales o puedes obtenerlos de una API.

export default function ProyectoDetalles() {
  const { id } = useParams(); // Obtiene el ID del proyecto desde la URL.
  const [proyecto, setProyecto] = useState(null);
  const [loading, setLoading] = useState(true); // Estado para manejar la carga de datos.

  useEffect(() => {
    // Simulamos una carga de datos, en este caso buscamos en el array estático, pero aquí podrías hacer un fetch a una API.
    const proyectoEncontrado = proyectosIniciales.find(proyecto => proyecto.id === parseInt(id));
    if (proyectoEncontrado) {
      setProyecto(proyectoEncontrado);
    }
    setLoading(false); // Cambiamos el estado de carga a falso cuando la búsqueda termina.
  }, [id]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p className="text-center text-2xl text-gray-600">Cargando proyecto...</p>
      </div>
    );
  }

  if (!proyecto) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p className="text-center text-2xl text-gray-600">Proyecto no encontrado</p>
        <Link to="/" className="block text-center text-blue-500 hover:text-blue-600 mt-4">Regresar a la lista de proyectos</Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 w-full md:w-3/4 lg:w-2/3">
      <Link to="/" className="hover:text-blue-600 transition-colors duration-300">Regresar</Link>
      <article className="bg-white rounded-lg shadow-lg overflow-hidden mt-6">
        <img src={proyecto.imagen} alt={proyecto.titulo} className="w-full h-64 md:h-96 object-cover" />
        <div className="p-6">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">{proyecto.titulo}</h1>
          <div className="flex items-center text-sm text-gray-600 mb-6">
            <CalendarIcon className="w-4 h-4 mr-2" />
            <time>{new Date().toLocaleDateString()}</time>
            <UserIcon className="w-4 h-4 ml-6 mr-2" />
            <span>Por Autor del Proyecto</span>
          </div>
          <p className="text-xl text-gray-700 leading-relaxed mb-6">{proyecto.detalles}</p>
        </div>
      </article>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Más información</h2>
        <p className="text-gray-700">
          Aquí iría la información más detallada del proyecto.
        </p>
      </div>
    </div>
  );
}
