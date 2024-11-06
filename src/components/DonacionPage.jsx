import { useState } from 'react';
import Beneficios from './Beneficios';
import DonationForm from './DonacionForm.jsx';
import InfoDonaciones from './infodonacion.jsx';
import DonacionMSJ from './Donacionmsj.jsx';
export default function DonacionPage() {
  return (
    <div className="min-h-20 py-12 px-4 sm:px-6 lg:px-8 max-h-1xl mx-auto">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-green-800 text-center mb-12 transition-all duration-1000 ease-out py-8 bg-gradient-to-b from-green-50 to-green-90">Cuidados Paliativos: Tu Ayuda Importa</h1>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden ">
            <InfoDonaciones />
          </div>
          <div className="bg-white rounded-lg overflow-hidden ">
              <DonacionMSJ/>
          </div>
        </div>
        <Beneficios />
      </div>
    </div>
  );
}