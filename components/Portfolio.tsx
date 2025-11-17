import React from 'react';
import { projects } from '../constants';

const Portfolio: React.FC = () => {
  return (
    <section id="proyectos" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-800">Proyectos que Inspiran</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Explora una selección de nuestros trabajos y descubre cómo la creatividad y la funcionalidad pueden coexistir en perfecta armonía.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="relative overflow-hidden rounded-lg group shadow-lg hover:shadow-2xl transition-shadow duration-300 aspect-[4/5]"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Text Content */}
              <div className="absolute inset-0 flex items-end p-8 text-white">
                <div className="transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                  <p className="text-sm font-light tracking-widest uppercase opacity-80">{project.category}</p>
                  <h3 className="text-2xl font-semibold">{project.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;