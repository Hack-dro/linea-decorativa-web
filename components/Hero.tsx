import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="h-screen w-full relative flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
      <img 
        src="https://picsum.photos/seed/interiordesign/1920/1080" 
        alt="Elegante diseño de interior" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-20 text-center text-white p-6">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4">
          El Arte de Vivir con Estilo
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl font-light max-w-3xl mx-auto mb-8">
          Transformamos espacios, creamos hogares. Tu visión, nuestra pasión por el detalle.
        </p>
        <a 
          href="https://w.app/fnoqlh"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-gray-800 font-semibold py-3 px-8 rounded-full text-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
        >
          Contáctanos
        </a>
      </div>
    </section>
  );
};

export default Hero;