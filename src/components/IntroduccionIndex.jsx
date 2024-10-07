import React from 'react';

function Introduction() {
  return (
    <section id="inicio" className="text-center p-8 md:p-16 bg-gradient-to-b from-gray-800 to-gray-900 text-white mt-30vw">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-orange-400 animate-fade-in">
          Apoya a nuestra misión de cuidados paliativos
        </h1>
        <p className="text-lg mb-8 animate-fade-in-delay">
          Tu donación puede hacer una gran diferencia en la vida de quienes más lo necesitan.
        </p>
        <button
          className="bg-orange-500 hover:bg-orange-400 text-white font-semibold py-2 px-4 rounded-full animate-fade-in-delay  hover:scale-110 active:scale-95 transition-all duration-300"  
          onClick={() => window.location.href = '/donacion'}
       
          aria-controls="quienes-somos-section"
        >
          Contribuir
        </button>
      </div>

      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }
        .animate-fade-in-delay {
          animation: fadeIn 1s ease-out 0.5s both;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}

export default Introduction;