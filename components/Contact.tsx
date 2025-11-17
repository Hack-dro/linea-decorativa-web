
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle form submission, e.g., send to an API
    alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contacto" className="py-20 md:py-32 bg-[#F0EBE3]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-800">Inicia tu Proyecto</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            ¿Listo para transformar tu espacio? Cuéntanos tu idea y empecemos a crear juntos.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-16 bg-white/60 backdrop-blur-sm p-8 md:p-12 rounded-lg shadow-xl">
          <div className="lg:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-gray-500 focus:border-gray-500 transition bg-gray-50"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-gray-500 focus:border-gray-500 transition bg-gray-50"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-gray-500 focus:border-gray-500 transition bg-gray-50"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-gray-800 text-white font-semibold py-3 px-8 rounded-md hover:bg-gray-700 transition-all duration-300"
                >
                  Enviar Mensaje
                </button>
              </div>
            </form>
          </div>
          <div className="lg:w-1/2 text-gray-700 lg:pl-8">
             <h3 className="text-3xl font-semibold mb-6 text-gray-800">Información de Contacto</h3>
             <div className="space-y-5 text-lg">
                <div>
                    <strong className="text-gray-800">Email:</strong><br/> 
                    <a href="mailto:consultaslineadecorativa@hotmail.com" className="text-gray-600 hover:underline">consultaslineadecorativa@hotmail.com</a>
                </div>
                <div>
                    <strong className="text-gray-800">Teléfono:</strong><br/> 
                    <a href="tel:971192209" className="text-gray-600 hover:underline">971 192 209</a>
                </div>
                <div>
                    <strong className="text-gray-800">Horario:</strong><br/> 
                    <span className="text-gray-600">Lunes a Viernes, 9:00 - 19:00</span>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;