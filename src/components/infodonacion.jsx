import React from 'react';
export default function InfoDonaciones() {
    return (
      <div className="p-4 bg-green-50 text-center rounded-lg shadow-md h-full hover:shadow-lg transition-all duration-300 ">
        <h2 className="text-xl font-bold text-green-700 mb-4 my-auto">CUIDADOS PALIATIVOS ES:</h2>
        <ul className="list-none">
          <li className="font-bold text-lg">Promover la autonomía del paciente</li>
          <li className="mt-2">Cuidar <span className="font-bold">Apoyar</span></li>
          <li className="mt-2 font-semibold text-green-700">
            Brindar control sintomático con un abordaje integral: físico, emocional, espiritual y social
          </li>
          <li className="mt-2">Evitar sufrimiento innecesario <span className="font-bold">Acompañar</span></li>
        </ul>
  
        <h3 className="text-lg font-bold text-black mt-6">¿Cómo ayudar?</h3>
        <ul className="list-disc text-left ml-4 mt-2 text-black">
          <li>Haciéndote socio por una pequeña suma mensual</li>
          <li>Sumándote al equipo de trabajo</li>
          <li>
            Colaborando con donaciones en la cuenta BROU: 
            <span className="font-bold block mt-1">CAJA DE AHORRO Nº 110713058 - 00001</span>
          </li>
        </ul>
      </div>
       );
}
  
 
  