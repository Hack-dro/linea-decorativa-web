
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
  { id: 1, category: 'Cocina', title: 'Cocina de Mármol y Nogal', imageUrl: 'https://images.unsplash.com/photo-1617093259469-cbf1a7a0b5a3?q=80&w=800&h=1000&fit=crop' },
  { id: 2, category: 'Sala', title: 'Sala de Estar de Doble Altura', imageUrl: 'https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=800&h=1000&fit=crop' },
  { id: 3, category: 'Dormitorio', title: 'Santuario Minimalista', imageUrl: 'https://images.unsplash.com/photo-1595526114035-0d45ed16433d?q=80&w=800&h=1000&fit=crop' },
  { id: 4, category: 'Baño', title: 'Baño Spa con Vistas', imageUrl: 'https://images.unsplash.com/photo-1583845112123-b1d34c1a4b56?q=80&w=800&h=1000&fit=crop' },
  { id: 5, category: 'Sala', title: 'Rincón de Lectura Acogedor', imageUrl: 'https://images.unsplash.com/photo-1544336336-9c8e1a8a3a3d?q=80&w=800&h=1000&fit=crop' },
  { id: 6, category: 'Cocina', title: 'Cocina Abierta Estilo Industrial', imageUrl: 'https://images.unsplash.com/photo-1600210492493-454199542060?q=80&w=800&h=1000&fit=crop' },
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
    { id: 1, src: 'https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=800&h=800&fit=crop', alt: 'Diseño de sala de estar minimalista y moderna' },
    { id: 2, src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=800&h=800&fit=crop', alt: 'Interior de apartamento acogedor con mucha luz' },
    { id: 3, src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&h=800&fit=crop', alt: 'Sala de estar espaciosa con sofá y decoración elegante' },
    { id: 4, src: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=800&h=800&fit=crop', alt: 'Dormitorio moderno con cama y detalles en madera' },
    { id: 5, src: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=800&h=800&fit=crop', alt: 'Interior luminoso con sillones y vista al exterior' },
    { id: 6, src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&h=800&fit=crop', alt: 'Silla de diseño en un rincón de lectura minimalista' },
    { id: 7, src: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=800&h=800&fit=crop', alt: 'Oficina en casa con escritorio y decoración moderna' },
    { id: 8, src: 'https://images.unsplash.com/photo-1567016432779-1fee84583969?q=80&w=800&h=800&fit=crop', alt: 'Detalle de decoración en una sala de estar elegante' },
];
