import React, { useState, useEffect } from 'react';

// Noticias iniciales
const noticiasIniciales = [
  {
    id: 1,
    titulo: "Avances en cuidados paliativos",
    contenido: "Nuevos estudios revelan mejoras significativas en el manejo del dolor en pacientes con enfermedades terminales. Los expertos afirman que estas técnicas innovadoras podrían revolucionar la calidad de vida de los pacientes en cuidados paliativos. Se espera que estos avances se implementen en hospitales y centros de cuidados paliativos en los próximos meses, ofreciendo esperanza a miles de pacientes y sus familias.",
    imagen: "https://placehold.co/600x400?text=Cuidados+Paliativos"
  },
  {
    id: 2,
    titulo: "Evento benéfico recauda fondos récord",
    contenido: "El evento anual de recaudación de fondos de nuestra asociación superó todas las expectativas este año. Gracias a la generosidad de nuestros donantes, podremos expandir nuestros servicios y llegar a más familias necesitadas. Los fondos recaudados se destinarán a la adquisición de equipos médicos especializados y a la formación de personal en técnicas avanzadas de cuidados paliativos.",
    imagen: "https://placehold.co/600x400?text=Evento+Benéfico"
  },
  {
    id: 3,
    titulo: "Nuevo programa de voluntariado",
    contenido: "Lanzamos un innovador programa de voluntariado que busca conectar a personas compasivas con pacientes en cuidados paliativos. Este programa no solo brindará compañía y apoyo emocional a los pacientes, sino que también ofrecerá a los voluntarios una experiencia enriquecedora y transformadora. Las inscripciones para el programa comenzarán el próximo mes.",
    imagen: "https://placehold.co/600x400?text=Voluntariado"
  }
];

// Componente principal de Noticias
export default function Noticias() {
  const [noticias, setNoticias] = useState(noticiasIniciales);
  const [noticiaExpandida, setNoticiaExpandida] = useState(null);
  const [editandoNoticia, setEditandoNoticia] = useState(null);
  const [esAdmin, setEsAdmin] = useState(false);

  useEffect(() => {
    const esComputadoraAdmin = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
    setEsAdmin(esComputadoraAdmin);
  }, []);

  // Función para expandir o contraer la noticia
  const alternarExpandir = (id) => {
    setNoticiaExpandida(noticiaExpandida === id ? null : id);
  };

  // Función para iniciar la edición de una noticia
  const manejarEditar = (id) => {
    setEditandoNoticia(id);
  };

  // Función para guardar los cambios en la noticia
  const manejarGuardar = (id, noticiaActualizada) => {
    setNoticias(noticias.map(item => item.id === id ? noticiaActualizada : item));
    setEditandoNoticia(null);
  };

  // Función para añadir una nueva noticia
  const manejarAñadir = () => {
    const nuevaNoticia = {
      id: noticias.length + 1,
      titulo: "Nueva noticia",
      contenido: "Contenido de la nueva noticia...",
      imagen: "https://placehold.co/600x400?text=Nueva+Noticia"
    };
    setNoticias([...noticias, nuevaNoticia]);
    setEditandoNoticia(nuevaNoticia.id);
  };

  // Función para eliminar una noticia
  const eliminarNoticia = (id) => {
    setNoticias(noticias.filter(item => item.id !== id));
  };
 
  return (
    
    <div className="container mx-auto px-4 py-8  animate-fade-in">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Noticias de Cuidados Paliativos</h1>
      {esAdmin && (
        <button
          onClick={() => {
            manejarAñadir()
            sweetAlertNoticia()
          }
          }
          className="mb-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
        >
          Añadir Noticia
        </button>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-h-200 mx-auto transition-all duration-300 ease-in">
        {noticias.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={item.imagen} alt={item.titulo} className="w-full h-48 object-cover" />
            <div className="p-4">
              {editandoNoticia === item.id ? (
                <FormularioEdicion noticia={item} onGuardar={manejarGuardar} onEliminar={eliminarNoticia} />
              ) : (
                <>
                  <h2 className="text-xl font-semibold mb-2">{item.titulo}</h2>
                  <p className="text-gray-600 mb-4">
                    {noticiaExpandida === item.id ? item.contenido : `${item.contenido.substring(0, 100)}...`}
                  </p>
                  <div className="flex justify-between items-center">
                    <button
                      onClick={() => alternarExpandir(item.id)}
                      className="text-blue-500 hover:text-blue-600"
                    >
                      {noticiaExpandida === item.id ? "Ver menos" : "Ver más"}
                    </button>
                    {esAdmin && (
                      <>
                        <button
                          onClick={() =>{
                            manejarEditar(item.id)
                           
                          }}
                          className="text-green-500 hover:text-green-600 mr-2"
                        >
                          Editar
                        </button>
              
                      </>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
function sweetAlertNoticia(){
  Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Noticia agregada exitosamente",
      showConfirmButton: false,
      timer: 1000
    });
}
// Componente para el formulario de edición
function FormularioEdicion({ noticia, onGuardar, onEliminar }) {
  const [titulo, setTitulo] = useState(noticia.titulo);
  const [contenido, setContenido] = useState(noticia.contenido);

  const manejarSubmit = (e) => {
    e.preventDefault();
    onGuardar(noticia.id, { ...noticia, titulo, contenido });
  };

  return (
    <form onSubmit={manejarSubmit} className="space-y-4">
      <input
        type="text"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        className="w-full p-2 border rounded"
        placeholder="Título"
      />
      <textarea
        value={contenido}
        onChange={(e) => setContenido(e.target.value)}
        className="w-full p-2 border rounded"
        placeholder="Contenido"
        rows={4}
      />
      <div className="flex justify-between">
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" onClick={sweetAlertGuardado()}>
          Guardar
        </button>
        <button
          type="button"
          onClick={() =>{
            onEliminar(noticia.id) 
            sweetAlertEliminado()
          } }
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
        >
          Eliminar
        </button>
      </div>
    </form>
  );
}
function sweetAlertGuardado(){
    Swal.fire('¡Guardado exitosamente!');
}
function sweetAlertEliminado(){
  Swal.fire('Eliminado exitosamente!');
}


