
import React from 'react';
import { services } from '../constants';
import type { Service } from '../types';

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center">
    <div className="bg-[#F0EBE3] p-4 rounded-full mb-6">
       <service.icon className="w-10 h-10 text-gray-700" />
    </div>
    <h3 className="text-2xl font-semibold text-gray-800 mb-3">{service.title}</h3>
    <p className="text-gray-600 leading-relaxed">{service.description}</p>
  </div>
);

const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-20 md:py-32 bg-[#F0EBE3]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-800">Servicios a tu Medida</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Desde la concepción de una idea hasta el último detalle de la instalación, te acompañamos en cada paso.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
