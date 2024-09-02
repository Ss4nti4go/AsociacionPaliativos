import React, { useState } from 'react';

function DonationForm() {
  const [monto, setMonto] = useState('');
  const [montoPersonalizado, setMontoPersonalizado] = useState('');

  const handleMontoChange = (e) => {
    setMonto(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (monto === 'personalizado' && !montoPersonalizado) {
      alert('Por favor, ingrese un monto personalizado.');
    } else {
      alert('¡Gracias por tu donación!');
    }
  };

  return (
    <section id="donacion" className="bg-white p-8 mx-auto my-8 max-w-lg rounded-lg shadow">
      <h2 className="text-center text-2xl mb-6">Haz una Donación</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="nombre" className="block font-bold mb-2">Nombre:</label>
          <input type="text" id="nombre" name="nombre" required className="w-full p-2 border border-gray-300 rounded" />
        </div>
        <div className="mb-4">
          <label htmlFor="correo" className="block font-bold mb-2">Correo Electrónico:</label>
          <input type="email" id="correo" name="correo" required className="w-full p-2 border border-gray-300 rounded" />
        </div>
        <div className="mb-4">
          <label htmlFor="monto" className="block font-bold mb-2">Monto de la Donación:</label>
          <select id="monto" name="monto" value={monto} onChange={handleMontoChange} className="w-full p-2 border border-gray-300 rounded">
            <option value="10">$10</option>
            <option value="25">$25</option>
            <option value="50">$50</option>
            <option value="100">$100</option>
            <option value="personalizado">Otro Monto</option>
          </select>
        </div>
        {monto === 'personalizado' && (
          <div className="mb-4">
            <label htmlFor="monto-personalizado" className="block font-bold mb-2">Monto Personalizado:</label>
            <input type="number" id="monto-personalizado" name="monto-personalizado" value={montoPersonalizado} onChange={(e) => setMontoPersonalizado(e.target.value)} className="w-full p-2 border border-gray-300 rounded" />
          </div>
        )}
           <button
          type="button"
          onClick={() => alert('¡Gracias por tu donación!')}
          className={`
            bg-orange-500 hover:bg-orange-500 text-white text-lg py-3 px-8 rounded-full
            transition-all duration-300 ease-in-out transform hover:scale-105
            focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50
            justify-center w-full 
          `}
          aria-label="Donar Ahora"
        >
          Donar
        </button>
      </form>
    </section>
  );
}

export default DonationForm;
