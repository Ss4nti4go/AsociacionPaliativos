import React from 'react';

function Beneficios() {
  return (
    <section id="beneficios" className="bg-green-600 p-16 text-center mb-20">
      <h2 className="text-4xl mb-6 text-white font-bold font-sans">¿Cómo Ayuda tu Donación?</h2>
      <div className="flex flex-wrap justify-between">
        <div className="flex-1 m-4 p-8 bg-white rounded-lg shadow bg-orange-100">
          <h3 className="text-xl mb-4">Apoyo a Pacientes</h3>
          <p className="text-gray-700">Tu donación ayuda a brindar apoyo integral a los pacientes y sus familias.</p>
        </div>
        <div className="flex-1 m-4 p-8 bg-white rounded-lg shadow bg-orange-100">
          <h3 className="text-xl mb-4">Servicios Médicos</h3>
          <p className="text-gray-700">Financiamos tratamientos y cuidados paliativos para mejorar la calidad de vida.</p>
        </div>
        <div className="flex-1 m-4 p-8 bg-white rounded-lg shadow bg-orange-100">
          <h3 className="text-xl mb-4">Calidad de Vida</h3>
          <p className="text-gray-700">Creamos programas que permiten a los pacientes vivir con dignidad y confort.</p>
        </div>
      </div>
    </section>
  );
}

export default Beneficios;
