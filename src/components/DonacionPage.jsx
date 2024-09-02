// DonacionPage.js
import { useState } from 'react';


function DonacionPage() {
  const [step, setStep] = useState(1);
  const [donante, setDonante] = useState({
    nombre: '',
    apellido: '',
    monto: ''
  });
  const [tarjeta, setTarjeta] = useState({
    numero: '',
    expiracion: '',
    cvv: ''
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
    <div className="p-6 max-w-2xl mx-auto mb-20">
      {step === 1 ? (
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Formulario de Donación</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700">Nombre</label>
              <input
                type="text"
                name="nombre"
                value={donante.nombre}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded"
                placeholder="Tu nombre"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Apellido</label>
              <input
                type="text"
                name="apellido"
                value={donante.apellido}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded"
                placeholder="Tu apellido"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Monto a Donar (UYU)</label>
              <input
                type="number"
                name="monto"
                value={donante.monto}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded"
                placeholder="Monto en UYU"
              />
            </div>
            <button
              type="button"
              onClick={() => setStep(2)}
              className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
            >
              Siguiente
            </button>
          </form>
        </div>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Datos de Tarjeta</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700">Número de Tarjeta</label>
              <input
                type="text"
                name="numero"
                value={tarjeta.numero}
                onChange={handleTarjetaChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded"
                placeholder="Número de tarjeta"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Fecha de Expiración</label>
              <input
                type="text"
                name="expiracion"
                value={tarjeta.expiracion}
                onChange={handleTarjetaChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded"
                placeholder="MM/AA"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">CVV</label>
              <input
                type="text"
                name="cvv"
                value={tarjeta.cvv}
                onChange={handleTarjetaChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded"
                placeholder="CVV"
              />
            </div>
            <button
              type="button"
              onClick={() => setStep(1)}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 mr-4"
            >
              Volver
            </button>
            <button
              type="button"
              className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
            >
              Realizar Pago
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default DonacionPage;
