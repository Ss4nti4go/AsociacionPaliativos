'use client';

import { useState } from 'react';

export default function DonationForm() {
  const [step, setStep] = useState(1);
  const [montoValido, setMontoValido] = useState(true);
  const [donante, setDonante] = useState({
    nombre: '',
    apellido: '',
    monto: '50', // Valor inicial hardcodeado en 50
  });
  const [tarjeta, setTarjeta] = useState({
    numero: '',
    expiracion: '',
    cvv: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDonante({ ...donante, [name]: value });
  };

  const handleTarjetaChange = (e) => {
    const { name, value } = e.target;
    setTarjeta({ ...tarjeta, [name]: value });
  };
  const checkMonto = (monto) => {
    if (monto >= 50) {
      setStep(2);
      setMontoValido(true);
    }else{
      setMontoValido(false);
    }
  };

  return (
    <div className="p-10 min-w-sm mx-auto mb-20 ">
      {step === 1 ? (
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300" >
          <h2 className="text-2xl font-bold mb-4">Formulario de Donación</h2>
          <form>
            <div className="mb-4 relative">
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={donante.nombre}
                onChange={handleInputChange}
                className="peer mt-1 p-2 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-orange-500 placeholder-transparent"
                placeholder="Nombre"
                required
              />
              <label
                className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all duration-300 transform peer-placeholder-shown:top-2 peer-placeholder-shown:text-lg peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-orange-500"
                htmlFor="nombre"
              >
                Nombre
              </label>
            </div>
            <div className="mb-4 relative">
              <input
                type="text"
                id="apellido"
                name="apellido"
                value={donante.apellido}
                onChange={handleInputChange}
                className="peer mt-1 p-2 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-orange-500 placeholder-transparent"
                placeholder="Apellido"
                required
              />
              <label
                className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all duration-300 transform peer-placeholder-shown:top-2 peer-placeholder-shown:text-lg peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-orange-500"
                htmlFor="apellido"
              >
                Apellido
              </label>
            </div>
            <div className="mb-4 relative">
              <input
                type="number"
                id="monto"
                name="monto"
                value={donante.monto}
                onChange={handleInputChange}
                min="50" // Monto mínimo de 50
                className="peer mt-1 p-2 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-orange-500 placeholder-transparent"
                placeholder="Monto"
                required
              />
              <label
                className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all duration-300 transform peer-placeholder-shown:top-2 peer-placeholder-shown:text-lg peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-orange-500"
                htmlFor="monto"
              >
                Monto a Donar (UYU)
              </label>
             
            </div>
            <button
              type="button"
              onClick={() => checkMonto(donante.monto)}
              className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition duration-300"
            >
              Siguiente
            </button>
            <p className={`text-sm mt-1 ml-5 transition duration-300 text transform ${montoValido ? "text-gray-500" : "text-red-500  scale-110"}`}>
               El monto mínimo para donar es 50 UYU.
            </p>
          </form>
        </div>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Datos de Tarjeta</h2>
          <form>
            <div className="mb-4 relative">
              <input
                type="text"
                id="numero"
                name="numero"
                value={tarjeta.numero}
                onChange={handleTarjetaChange}
                className="peer mt-1 p-2 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-orange-500 placeholder-transparent"
                placeholder="Número de Tarjeta"
                required
              />
              <label
                className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all duration-300 transform peer-placeholder-shown:top-2 peer-placeholder-shown:text-lg peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-orange-500"
                htmlFor="numero"
              >
                Número de Tarjeta
              </label>
            </div>
            <div className="mb-4 relative">
              <input
                type="text"
                id="expiracion"
                name="expiracion"
                value={tarjeta.expiracion}
                onChange={handleTarjetaChange}
                className="peer mt-1 p-2 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-orange-500 placeholder-transparent"
                placeholder="Fecha de Expiración"
                required
              />
              <label
                className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all duration-300 transform peer-placeholder-shown:top-2 peer-placeholder-shown:text-lg peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-orange-500"
                htmlFor="expiracion"
              >
                Fecha de Expiración (MM/AA)
              </label>
            </div>
            <div className="mb-4 relative">
              <input
                type="text"
                id="cvv"
                name="cvv"
                value={tarjeta.cvv}
                onChange={handleTarjetaChange}
                className="peer mt-1 p-2 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-orange-500 placeholder-transparent"
                placeholder="CVV"
                required
              />
              <label
                className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all duration-300 transform peer-placeholder-shown:top-2 peer-placeholder-shown:text-lg peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-orange-500"
                htmlFor="cvv"
              >
                CVV
              </label>
            </div>
            <button
              type="button"
              onClick={() => setStep(1)}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 mr-4 transition duration-300"
            >
              Volver
            </button>
            <button
              type="button"
              className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition duration-300"
            >
              Realizar Pago
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
