import { SiteContent } from './types';

// =====================================================================
// INSTRUCCIONES PARA EL USUARIO (HOW TO UPDATE):
// 1. Use the "Export Config" button in the website Admin panel.
// 2. Copy the JSON text generated.
// 3. Replace the content of the `INITIAL_CONTENT` variable below.
// =====================================================================

export const INITIAL_CONTENT: SiteContent = {
  hero: {
    id: 'hero-main',
    url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop',
    alt: 'Sala de estar moderna con iluminación natural',
    title: 'Diseño que Inspira',
    description: 'Transformamos espacios en experiencias de vida.'
  },
  about: {
    id: 'about-img',
    url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000&auto=format&fit=crop',
    alt: 'Diseñadora de interiores trabajando',
    title: 'Nuestra Esencia',
    description: 'Creemos en la armonía entre funcionalidad y estética.'
  },
  gallery: [
    {
      id: 'gallery-1',
      url: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?q=80&w=800&auto=format&fit=crop',
      alt: 'Comedor minimalista',
      title: 'Comedor Minimalista'
    },
    {
      id: 'gallery-2',
      url: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=800&auto=format&fit=crop',
      alt: 'Habitación estilo bohemio',
      title: 'Descanso Bohemio'
    },
    {
      id: 'gallery-3',
      url: 'https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=800&auto=format&fit=crop',
      alt: 'Cocina moderna de mármol',
      title: 'Cocina de Mármol'
    },
    {
      id: 'gallery-4',
      url: 'https://images.unsplash.com/photo-1616137466211-f939a420be84?q=80&w=800&auto=format&fit=crop',
      alt: 'Oficina en casa',
      title: 'Home Office Zen'
    },
    {
      id: 'gallery-5',
      url: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=800&auto=format&fit=crop',
      alt: 'Baño de lujo',
      title: 'Santuario Personal'
    },
    {
      id: 'gallery-6',
      url: 'https://images.unsplash.com/photo-1617103996702-96ff29b1c467?q=80&w=800&auto=format&fit=crop',
      alt: 'Recibidor elegante',
      title: 'Entrada Elegante'
    }
  ]
};