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
      url: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=800&auto=format&fit=crop',
      alt: 'Comedor minimalista con sillas verdes',
      title: 'Comedor Minimalista',
      category: 'COMEDOR'
    },
    {
      id: 'gallery-2',
      url: 'https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?q=80&w=800&auto=format&fit=crop',
      alt: 'Habitación luminosa con cama cómoda',
      title: 'Descanso Bohemio',
      category: 'DORMITORIO'
    },
    {
      id: 'gallery-3',
      url: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800&auto=format&fit=crop',
      alt: 'Cocina moderna con isla',
      title: 'Cocina de Mármol',
      category: 'COCINA'
    },
    {
      id: 'gallery-4',
      url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop',
      alt: 'Espacio de trabajo limpio y organizado',
      title: 'Home Office Zen',
      category: 'OFICINA'
    },
    {
      id: 'gallery-5',
      url: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=800&auto=format&fit=crop',
      alt: 'Baño moderno con tina',
      title: 'Santuario Personal',
      category: 'BAÑO'
    },
    {
      id: 'gallery-6',
      url: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?q=80&w=800&auto=format&fit=crop',
      alt: 'Entrada con consola y arte',
      title: 'Entrada Elegante',
      category: 'RECIBIDOR'
    }
  ]
};