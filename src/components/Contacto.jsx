'use client'

import { useState, useEffect } from 'react'
import ContactForm from './formContacto'

export default function Contacto() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className={`text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-12 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Contáctenos
        </h1>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className={`bg-white shadow-2xl rounded-lg overflow-hidden transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                ¿Por qué contactarnos?
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                En nuestro servicio de cuidados paliativos, entendemos que cada momento cuenta. Estamos aquí para:
              </p>
              <ul className="list-none text-gray-600 mb-8 space-y-4">
                {[
                  'Responder a sus preguntas sobre cuidados paliativos',
                  'Ofrecer apoyo emocional a pacientes y familiares',
                  'Proporcionar información sobre nuestros servicios',
                  'Coordinar visitas y atención personalizada'
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3 transition-all duration-300 hover:translate-x-2">
                    <svg className="h-6 w-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Cómo respondemos
              </h3>
              <p className="text-gray-600 mb-4 text-lg">
                Nos comprometemos a responder a todas las consultas dentro de 24 horas hábiles. Puede esperar nuestra respuesta a través de:
              </p>
              <ul className="list-none text-gray-600 space-y-2">
                {['Correo electrónico', 'Llamada telefónica', 'Mensaje de texto (si lo prefiere)'].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3 transition-all duration-300 hover:translate-x-2">
                    <svg className="h-5 w-5 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}