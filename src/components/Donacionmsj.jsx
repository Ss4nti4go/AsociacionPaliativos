import React from 'react';
import { Heart } from 'lucide-react';

const DonationMSJ = () => {


  return (
    <div className="p-6 bg-green-50 rounded-lg shadow-md h-full flex flex-col justify-between hover:shadow-lg transition-all duration-300">
      <div>
        <h2 className="text-2xl font-bold text-green-700 mb-4 flex items-center">
   
          Haz una Donación Hoy
        </h2>
        <p className="text-gray-700 mb-6">
          Tu generosidad puede marcar la diferencia en la vida de quienes más lo necesitan. Cada donación, sin importar su tamaño, contribuye a mejorar la calidad de vida de nuestros pacientes.
        </p>
      </div>
      <div className="space-y-4">
        <h4
          className="w-full bg-green-600 text-white font-bold py-2 px-4 rounded hover:bg-green-700 transition duration-300 flex items-center justify-center"
        ><Heart className="w-6 h-6 mr-2 text-green-500" />
          ¡Muchas Gracias!  
        </h4>
        <div className="text-sm text-gray-600 text-center">
          Todas las donaciones son deducibles de impuestos
        </div>
      </div>
    </div>
  );
};

export default DonationMSJ;