
import type { Service, Project, ProcessStep, GalleryImage } from './types';
import { DesignIcon, RemodelingIcon, FurnitureIcon, CurtainsIcon, ConsultingIcon, MaintenanceIcon } from './components/icons/ServiceIcons';
import { ConsultationIcon, DesignPhaseIcon, ExecutionIcon, DeliveryIcon } from './components/icons/ProcessIcons';

export const services: Service[] = [
  {
    icon: DesignIcon,
    title: 'Diseño de Interiores',
    description: 'Creamos espacios estéticos y funcionales que reflejan tu personalidad y estilo de vida.',
  },
  {
    icon: RemodelingIcon,
    title: 'Remodelación Integral',
    description: 'Transformamos y modernizamos tus espacios, desde una habitación hasta una propiedad completa.',
  },
  {
    icon: FurnitureIcon,
    title: 'Mobiliario a Medida',
    description: 'Diseñamos y fabricamos muebles exclusivos para cocinas, salas, dormitorios y más.',
  },
  {
    icon: CurtainsIcon,
    title: 'Cortinas y Persianas',
    description: 'Ofrecemos una amplia gama de cubiertas para ventanas, con instalación profesional incluida.',
  },
  {
    icon: ConsultingIcon,
    title: 'Asesoramiento de Espacios',
    description: 'Te guiamos en la selección de colores, materiales y distribución para optimizar tus ambientes.',
  },
  {
    icon: MaintenanceIcon,
    title: 'Mantenimiento Experto',
    description: 'Cuidamos de tus muebles, alfombras y acabados para preservar su belleza y durabilidad.',
  },
];

export const projects: Project[] = [
  { id: 1, category: 'Cocina', title: 'Cocina de Mármol y Nogal', imageUrl: 'https://picsum.photos/seed/kitchen-marble/800/1000' },
  { id: 2, category: 'Sala', title: 'Sala de Estar de Doble Altura', imageUrl: 'https://picsum.photos/seed/living-room-loft/800/1000' },
  { id: 3, category: 'Dormitorio', title: 'Santuario Minimalista', imageUrl: 'https://picsum.photos/seed/bedroom-minimal/800/1000' },
  { id: 4, category: 'Baño', title: 'Baño Spa con Vistas', imageUrl: 'https://picsum.photos/seed/bathroom-spa/800/1000' },
  { id: 5, category: 'Sala', title: 'Rincón de Lectura Acogedor', imageUrl: 'https://picsum.photos/seed/reading-nook/800/1000' },
  { id: 6, category: 'Cocina', title: 'Cocina Abierta Estilo Industrial', imageUrl: 'https://picsum.photos/seed/industrial-kitchen/800/1000' },
];

export const processSteps: ProcessStep[] = [
    {
        icon: ConsultationIcon,
        title: "01. Consulta y Visión",
        description: "Comenzamos con una conversación profunda para entender tus sueños, necesidades y el potencial de tu espacio.",
    },
    {
        icon: DesignPhaseIcon,
        title: "02. Diseño y Conceptualización",
        description: "Nuestro equipo creativo desarrolla un concepto a medida, presentando planos, renders 3D y muestras de materiales.",
    },
    {
        icon: ExecutionIcon,
        title: "03. Ejecución y Manufactura",
        description: "Coordinamos a todos los profesionales y fabricamos el mobiliario, cuidando cada detalle con la máxima precisión.",
    },
    {
        icon: DeliveryIcon,
        title: "04. Instalación y Entrega",
        description: "Materializamos el diseño en tu hogar, realizando una instalación impecable y revelando tu nuevo espacio transformado.",
    }
];

export const galleryImages: GalleryImage[] = [
    { id: 1, src: 'https://picsum.photos/seed/gallery-1/800/800', alt: 'Diseño de sala de estar minimalista y moderna' },
    { id: 2, src: 'https://picsum.photos/seed/gallery-2/800/800', alt: 'Interior de apartamento acogedor con mucha luz' },
    { id: 3, src: 'https://picsum.photos/seed/gallery-3/800/800', alt: 'Sala de estar espaciosa con sofá y decoración elegante' },
    { id: 4, src: 'https://picsum.photos/seed/gallery-4/800/800', alt: 'Dormitorio moderno con cama y detalles en madera' },
    { id: 5, src: 'https://picsum.photos/seed/gallery-5/800/800', alt: 'Interior luminoso con sillones y vista al exterior' },
    { id: 6, src: 'https://picsum.photos/seed/gallery-6/800/800', alt: 'Silla de diseño en un rincón de lectura minimalista' },
    { id: 7, src: 'https://picsum.photos/seed/gallery-7/800/800', alt: 'Oficina en casa con escritorio y decoración moderna' },
    { id: 8, src: 'https://picsum.photos/seed/gallery-8/800/800', alt: 'Detalle de decoración en una sala de estar elegante' },
];
