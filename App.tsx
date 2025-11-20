import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Facebook, Twitter, Mail, Phone } from 'lucide-react';
import { INITIAL_CONTENT } from './constants';
import { SiteContent, ImageContent } from './types';
import { EditableImage } from './components/EditableImage';
import { AdminPanel } from './components/AdminPanel';
import { AIChat } from './components/AIChat';

const App: React.FC = () => {
  // Content state initialization logic
  const [content, setContent] = useState<SiteContent>(() => {
    // IMPORTANT: Changed version to v5 to force reload of new images
    const saved = localStorage.getItem('linea-decorativa-content-v5');
    return saved ? JSON.parse(saved) : INITIAL_CONTENT;
  });

  const [isEditing, setIsEditing] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Persist changes locally whenever content changes
  useEffect(() => {
    localStorage.setItem('linea-decorativa-content-v5', JSON.stringify(content));
  }, [content]);

  // Handlers
  const resetContent = () => {
    if (window.confirm('¿Estás seguro de que deseas volver al diseño original? Se perderán los cambios no exportados.')) {
      setContent(INITIAL_CONTENT);
      localStorage.removeItem('linea-decorativa-content-v5');
    }
  };

  const updateImage = (id: string, newUrl: string) => {
    const newContent = { ...content };
    
    // Helper to check and update object
    const updateIfMatch = (item: ImageContent) => {
      if (item.id === id) item.url = newUrl;
    };

    // Check hero
    updateIfMatch(newContent.hero);
    // Check about
    updateIfMatch(newContent.about);
    // Check gallery
    newContent.gallery.forEach(updateIfMatch);

    setContent(newContent);
  };

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col">
      {/* Navigation */}
      <nav className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="text-2xl font-serif font-bold tracking-wider text-stone-900">
              LÍNEA <span className="text-amber-700">DECORATIVA</span>
            </div>
            
            <div className="hidden md:flex space-x-8 text-sm font-medium tracking-widest text-stone-600 uppercase">
              <a href="#inicio" className="hover:text-amber-700 transition">Inicio</a>
              <a href="#nosotros" className="hover:text-amber-700 transition">Nosotros</a>
              <a href="#galeria" className="hover:text-amber-700 transition">Galería</a>
              <a href="#contacto" className="hover:text-amber-700 transition">Contacto</a>
            </div>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-stone-800">
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-stone-100 py-4">
            <div className="flex flex-col space-y-4 text-center text-stone-600 uppercase text-sm font-medium">
               <a href="#inicio" onClick={() => setMobileMenuOpen(false)}>Inicio</a>
               <a href="#nosotros" onClick={() => setMobileMenuOpen(false)}>Nosotros</a>
               <a href="#galeria" onClick={() => setMobileMenuOpen(false)}>Galería</a>
               <a href="#contacto" onClick={() => setMobileMenuOpen(false)}>Contacto</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative h-[85vh]">
        <div className="absolute inset-0">
          <EditableImage 
            id={content.hero.id}
            src={content.hero.url}
            alt={content.hero.alt}
            isEditing={isEditing}
            onUpdate={updateImage}
            className="h-full w-full"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 animate-fade-in-up">
            {content.hero.title}
          </h1>
          <p className="text-lg md:text-xl font-light tracking-wide max-w-2xl animate-fade-in-up delay-200">
            {content.hero.description}
          </p>
          <a 
            href="https://wa.link/37j0bh"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 px-8 py-3 border border-white text-white uppercase tracking-widest text-xs hover:bg-white hover:text-stone-900 transition duration-300 animate-fade-in-up delay-300"
          >
            Cotiza con nosotros
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
             <div className="relative p-4 border border-stone-200">
               <EditableImage 
                 id={content.about.id}
                 src={content.about.url}
                 alt={content.about.alt}
                 isEditing={isEditing}
                 onUpdate={updateImage}
                 aspectRatio="portrait"
                 className="w-full"
               />
             </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-sm font-bold tracking-widest text-amber-700 uppercase mb-3">Sobre Nosotros</h2>
            <h3 className="text-4xl font-serif text-stone-900 mb-6">{content.about.title}</h3>
            <div className="w-20 h-1 bg-amber-700 mb-8"></div>
            <p className="text-stone-600 leading-relaxed mb-6 text-lg">
              {content.about.description}
            </p>
            <p className="text-stone-600 leading-relaxed mb-8">
              Desde hace más de una década, nos dedicamos a curar los elementos más exquisitos para el hogar. Nuestro enfoque combina la calidez de los materiales naturales con la sofisticación del diseño contemporáneo.
            </p>
            <div className="grid grid-cols-2 gap-8 text-center">
              <div className="bg-white p-6 shadow-sm border border-stone-100">
                <span className="block text-3xl font-serif text-amber-700 mb-1">150+</span>
                <span className="text-xs uppercase tracking-wider text-stone-500">Proyectos</span>
              </div>
              <div className="bg-white p-6 shadow-sm border border-stone-100">
                <span className="block text-3xl font-serif text-amber-700 mb-1">12</span>
                <span className="text-xs uppercase tracking-wider text-stone-500">Años Exp.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section id="galeria" className="py-24 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-4">Nuestros Espacios</h2>
            <p className="text-stone-500 max-w-2xl mx-auto">Una selección curada de nuestros proyectos más recientes de interiorismo.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.gallery.map((item) => (
              <div key={item.id} className="bg-white p-3 shadow-sm hover:shadow-md transition duration-500">
                <EditableImage
                  id={item.id}
                  src={item.url}
                  alt={item.alt}
                  isEditing={isEditing}
                  onUpdate={updateImage}
                  aspectRatio="square"
                  className="w-full mb-4"
                />
                <h4 className="text-center font-serif text-stone-800 text-lg">{item.title}</h4>
                <p className="text-center text-xs text-stone-400 uppercase tracking-widest mt-1">
                  {item.category || 'INTERIORISMO'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact/Footer */}
      <footer id="contacto" className="bg-stone-900 text-stone-300 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Column 1: Brand */}
            <div>
              <h3 className="text-2xl font-serif text-white mb-6">Línea Decorativa</h3>
              <p className="text-stone-400 mb-6">
                Creando espacios que cuentan historias. Diseño interior de alta gama para hogares que buscan distinción.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-amber-600 transition"><Instagram size={20} /></a>
                <a href="#" className="hover:text-amber-600 transition"><Facebook size={20} /></a>
                <a href="#" className="hover:text-amber-600 transition"><Twitter size={20} /></a>
              </div>
            </div>
            
            {/* Column 2: Contact Info */}
            <div>
              <h4 className="text-white uppercase tracking-widest text-sm font-bold mb-6">Contacto</h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <Mail className="text-amber-700 flex-shrink-0" size={18} />
                  <span className="break-all">consultaslineadecorativa@hotmail.com</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="text-amber-700 flex-shrink-0" size={18} />
                  <span>971 192 209</span>
                </li>
              </ul>
            </div>

            {/* Column 3: Schedule */}
            <div>
              <h4 className="text-white uppercase tracking-widest text-sm font-bold mb-6">Horario</h4>
              <ul className="space-y-2 text-stone-400">
                <li className="flex flex-col gap-1">
                  <span className="text-white font-medium">Lunes a Viernes</span>
                  <span>9:00 - 19:00</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-stone-800 mt-12 pt-8 text-center text-xs text-stone-500">
            &copy; {new Date().getFullYear()} Línea Decorativa. Todos los derechos reservados.
          </div>
        </div>
      </footer>

      {/* Floating Components */}
      <AdminPanel 
        isEditing={isEditing} 
        toggleEditing={() => setIsEditing(!isEditing)} 
        content={content}
        onReset={resetContent}
      />
      
      {!isEditing && <AIChat />}
    </div>
  );
}

export default App;