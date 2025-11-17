import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <div className="md:w-1/2">
            <img 
              src="https://picsum.photos/seed/about-interior/800/900" 
              alt="Elegante diseño de interior mostrando la calidad del trabajo de la empresa"
              className="rounded-lg shadow-2xl w-full h-full object-cover"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-800 mb-6">Sobre la empresa</h2>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              En Línea Decorativa, creemos que un gran diseño va más allá de la estética; se trata de crear ambientes que inspiren, funcionen y enriquezcan la vida diaria. Cada proyecto es un lienzo en blanco donde fusionamos la visión de nuestros clientes con nuestra experiencia y creatividad.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Nuestra pasión es la atención al detalle, la selección de materiales de la más alta calidad y la creación de espacios atemporales que cuentan una historia: la tuya.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;