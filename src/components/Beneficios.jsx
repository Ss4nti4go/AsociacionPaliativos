import { Users, Stethoscope, Heart } from 'lucide-react';

export default function Beneficios() {
  const beneficios = [
    {
      icon: Users,
      title: "Apoyo a Pacientes",
      description: "Tu donación ayuda a brindar apoyo integral a los pacientes y sus familias."
    },
    {
      icon: Stethoscope,
      title: "Servicios Médicos",
      description: "Financiamos tratamientos y cuidados paliativos para mejorar la calidad de vida."
    },
    {
      icon: Heart,
      title: "Calidad de Vida",
      description: "Creamos programas que permiten a los pacientes vivir con dignidad y confort."
    }
  ];

  return (
    <section className="bg-gradient-to-b from-green-500 to-green-600 py-16 px-4 rounded-lg shadow-xl mb-20">
      <h2 className="text-3xl md:text-4xl mb-10 text-white font-bold text-center">
        ¿Cómo Ayuda tu Donación?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {beneficios.map((beneficio, index) => (
          <div 
            key={index} 
            className="bg-orange-100 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:scale-105"
          >
            <div className="flex justify-center mb-4">
              <beneficio.icon className="w-12 h-12 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-green-700">{beneficio.title}</h3>
            <p className="text-gray-700">{beneficio.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}