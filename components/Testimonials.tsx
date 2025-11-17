
import React from 'react';
import { testimonials } from '../constants';
import { QuoteIcon } from './icons/QuoteIcon';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonios" className="py-20 md:py-32 bg-[#F0EBE3]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-800">Lo que Dicen Nuestros Clientes</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg flex flex-col">
                <QuoteIcon className="w-10 h-10 text-gray-300 mb-4" />
                <p className="text-gray-600 italic leading-relaxed flex-grow mb-6">"{testimonial.quote}"</p>
                <div>
                    <p className="font-bold text-gray-800">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
