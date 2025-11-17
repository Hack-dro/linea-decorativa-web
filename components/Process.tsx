
import React from 'react';
import { processSteps } from '../constants';

const Process: React.FC = () => {
  return (
    <section id="proceso" className="py-20 md:py-32 bg-[#F0EBE3]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-800">Nuestro Proceso Creativo</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Un viaje colaborativo en cuatro fases para convertir tu visión en una realidad tangible y excepcional.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {processSteps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6">
              <div className="relative mb-6">
                <div className="bg-white p-5 rounded-full shadow-sm">
                  <step.icon className="w-12 h-12 text-gray-700" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;