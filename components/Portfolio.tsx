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
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="mb-6 break-inside-avoid relative overflow-hidden rounded-lg group shadow-md">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-500 flex items-end p-8">
                <div className="text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-sm font-light tracking-widest uppercase">{project.category}</p>
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
