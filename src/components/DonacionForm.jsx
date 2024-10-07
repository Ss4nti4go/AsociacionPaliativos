'use client';

import { useState } from 'react';

function DonationForm() {
  const [monto, setMonto] = useState('');
  const [montoPersonalizado, setMontoPersonalizado] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleMontoChange = (e) => {
    setMonto(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      if (monto === 'personalizado' && !montoPersonalizado) {
        alert('Por favor, ingrese un monto personalizado.');
      } else {
        setIsSubmitted(true);
      }
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg my-10">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Contáctanos</h2>
      {isSubmitted ? (
        <div className="space-y-6 text-center">
          <div className="p-4 bg-green-100 text-green-700 rounded-lg">
            <p className="text-xl">¡Gracias por tu donación!</p>
          </div>
          <button
            onClick={() => setIsSubmitted(false)}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105"
          >
            Hacer otra donación
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Nombre */}
          <div className="relative">
            <input
              id="nombre"
              name="nombre"
              required
              className="peer w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-500 placeholder-transparent text-lg py-2 transition duration-300"
              placeholder="Nombre"
            />
            <label
              htmlFor="nombre"
              className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-blue-500"
            >
              Nombre
            </label>
          </div>
          {/* Email */}
          <div className="relative">
            <input
              id="correo"
              type="email"
              name="correo"
              required
              className="peer w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-500 placeholder-transparent text-lg py-2 transition duration-300"
              placeholder="Correo Electrónico"
            />
            <label
              htmlFor="correo"
              className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-blue-500"
            >
         
            </label>
          </div>
          {/* Teléfono */}
          <div className="relative">
            <input
              id="telefono"
              type="tel"
              name="telefono"
              required
              className="peer w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-500 placeholder-transparent text-lg py-2 transition duration-300"
              placeholder="Teléfono"
            />
            <label
              htmlFor="telefono"
              className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-blue-500"
            >
            
            </label>
          </div>
          {/* Mensaje */}
          <div className="relative">
            <textarea
              id="mensaje"
              name="mensaje"
              required
              className="peer w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-500 placeholder-transparent text-lg py-2 transition duration-300"
              placeholder="Mensaje"
            />
            <label
              htmlFor="mensaje"
              className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-blue-500"
            >
             
            </label>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-blue-500 text-white py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {isSubmitting ? 'Procesando...' : 'Enviar'}
          </button>
        </form>
      )}
    </div>
  );
}

export default DonationForm;
