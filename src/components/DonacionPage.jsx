// DonacionPage.js
import { useState } from 'react';
import Beneficios from './Beneficios.jsx';

function DonacionPage() {
  const [step, setStep] = useState(1);
  const [donante, setDonante] = useState({
    nombre: '',
    apellido: '',
    monto: '',
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

  return (
    <>
      <div className="p-6 max-w-2xl mx-auto mb-20">
        {step === 1 ? (
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Formulario de Donación</h2>
            <form>
              <div className="mb-4 relative">
                <input
                  type="text"
                  name="nombre"
                  value={donante.nombre}
                  onChange={handleInputChange}
                  className="peer mt-1 p-2 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-orange-500 placeholder-transparent"
                  placeholder=""
                  required
                />
                <label className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all duration-300 transform peer-placeholder-shown:top-2 peer-placeholder-shown:text-lg peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-orange-500" htmlFor='nombre'>
                  Nombre
                </label>
              </div>
              <div className="mb-4 relative">
                <input
                  type="text"
                  name="apellido"
                  value={donante.apellido}
                  onChange={handleInputChange}
                  className="peer mt-1 p-2 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-orange-500 placeholder-transparent"
                  placeholder=" "
                  required
                />
                <label className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all duration-300 transform peer-placeholder-shown:top-2 peer-placeholder-shown:text-lg peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-orange-500" htmlFor='apellido'>
                  Apellido
                </label>
              </div>
              <div className="mb-4 relative">
                <input
                  type="number"
                  name="monto"
                  value={donante.monto}
                  onChange={handleInputChange}
                  className="peer mt-1 p-2 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-orange-500 placeholder-transparent"
                  placeholder=" "
                  required
                />
                <label className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all duration-300 transform peer-placeholder-shown:top-2 peer-placeholder-shown:text-lg peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-orange-500" htmlFor='monto'>
                  Monto a Donar (UYU)
                </label>
              </div>
              <button
                type="button"
                onClick={() => setStep(2)}
                className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition duration-300"
              >
                Siguiente
              </button>
            </form>
          </div>
        ) : (
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Datos de Tarjeta</h2>
            <form>
              <div className="mb-4 relative">
                <input
                  type="text"
                  name="numero"
                  value={tarjeta.numero}
                  onChange={handleTarjetaChange}
                  className="peer mt-1 p-2 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-orange-500 placeholder-transparent"
                  placeholder=" "
                  required
                />
                <label className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all duration-300 transform peer-placeholder-shown:top-2 peer-placeholder-shown:text-lg peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-orange-500" htmlFor='numero'>
                  Número de Tarjeta
                </label>
              </div>
              <div className="mb-4 relative">
                <input
                  type="text"
                  name="expiracion"
                  value={tarjeta.expiracion}
                  onChange={handleTarjetaChange}
                  className="peer mt-1 p-2 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-orange-500 placeholder-transparent"
                  placeholder=""
                  required
                />
                <label className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all duration-300 transform peer-placeholder-shown:top-2 peer-placeholder-shown:text-lg peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-orange-500" htmlFor='expiracion' >
                Fecha de Expiración (MM/AA) 
                </label>
              </div>
              <div className="mb-4 relative">
                <input
                  type="text"
                  name="cvv"
                  value={tarjeta.cvv}
                  onChange={handleTarjetaChange}
                  className="peer mt-1 p-2 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-orange-500 placeholder-transparent"
                  placeholder=" "
                  required
                />
                <label className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all duration-300 transform peer-placeholder-shown:top-2 peer-placeholder-shown:text-lg peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-orange-500" htmlFor='cvv'>
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
      <Beneficios />
    </>
  );
}

export default DonacionPage;
