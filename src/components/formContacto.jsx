'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm()
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const onSubmit = (data) => {
    setIsSubmitting(true)
    // Simulate form submission
    setTimeout(() => {
      console.log(data)
      setIsSubmitted(true)
      setIsSubmitting(false)
      reset()
    }, 2000)
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg my-10">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Contáctanos</h2>

      {isSubmitted ? (
        <div className="space-y-6 text-center">
          <div className="p-4 bg-green-100 text-green-700 rounded-lg">
            <p className="text-xl">¡Formulario enviado con éxito!</p>
          </div>
          <button
            onClick={() => setIsSubmitted(false)}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105"
          >
            Enviar otro mensaje
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="relative">
            <input
              id="nombre"
              {...register('nombre', { required: 'El nombre es requerido' })}
              className={`peer w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-500 placeholder-transparent text-lg py-2 transition duration-300 ${errors.nombre ? 'border-red-500' : ''}`}
              placeholder="Nombre"
            />
            <label
              htmlFor="nombre"
              className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-blue-500"
            >
              Nombre
            </label>
            {errors.nombre && <p className="text-red-500 text-xs mt-1">{errors.nombre.message}</p>}
          </div>

          <div className="relative">
            <input
              id="email"
              {...register('email', {
                required: 'El email es requerido',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Email inválido'
                }
              })}
              className={`peer w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-500 placeholder-transparent text-lg py-2 transition duration-300 ${errors.email ? 'border-red-500' : ''}`}
              placeholder="Email"
            />
            <label
              htmlFor="email"
              className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-blue-500"
            >
              Email
            </label>
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>

          <div className="relative">
            <input
              id="telefono"
              {...register('telefono', {
                required: 'El teléfono es requerido',
                pattern: {
                  value: /^\d{9}$/,
                  message: 'El número debe tener 9 dígitos'
                }
              })}
              className={`peer w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-500 placeholder-transparent text-lg py-2 transition duration-300 ${errors.telefono ? 'border-red-500' : ''}`}
              placeholder="Teléfono"
            />
            <label
              htmlFor="telefono"
              className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-blue-500"
            >
              Teléfono
            </label>
            {errors.telefono && <p className="text-red-500 text-xs mt-1">{errors.telefono.message}</p>}
          </div>

          <div className="relative">
            <textarea
              id="mensaje"
              {...register('mensaje', { required: 'El mensaje es requerido', minLength: { value: 10, message: 'El mensaje debe tener al menos 10 caracteres' } })}
              className={`peer w-full border-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-500 placeholder-transparent text-lg p-2 h-32 rounded-md transition duration-300 ${errors.mensaje ? 'border-red-500' : ''}`}
              placeholder="Mensaje"
            />
            <label
              htmlFor="mensaje"
              className="absolute left-2 -top-3 bg-white px-1 text-gray-600 text-sm transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-blue-500"
            >
              Mensaje
            </label>
            {errors.mensaje && <p className="text-red-500 text-xs mt-1">{errors.mensaje.message}</p>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-blue-500 text-white py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {isSubmitting ? 'Enviando...' : 'Enviar'}
          </button>
        </form>
      )}
    </div>
  )
}