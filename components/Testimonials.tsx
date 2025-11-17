
import React from 'react';
import { galleryImages } from '../constants';

const ImageGallery: React.FC = () => {
  return (
    <section id="galeria" className="py-20 md:py-32 bg-[#FDFDFB]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-800">Galería de Inspiración</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Visualiza las posibilidades y encuentra la inspiración para tu próximo proyecto en nuestra cuidada selección de ambientes.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {galleryImages.map((image) => (
            <div key={image.id} className="overflow-hidden rounded-lg shadow-lg group aspect-square">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
