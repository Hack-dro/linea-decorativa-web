
import type { Service, Project, ProcessStep, Testimonial } from './types';
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
  { id: 1, category: 'Cocina', title: 'Cocina de Mármol y Nogal', imageUrl: 'https://picsum.photos/seed/kitchen1/800/600' },
  { id: 2, category: 'Sala', title: 'Sala de Estar de Doble Altura', imageUrl: 'https://picsum.photos/seed/livingroom1/800/1000' },
  { id: 3, category: 'Dormitorio', title: 'Santuario Minimalista', imageUrl: 'https://picsum.photos/seed/bedroom1/800/600' },
  { id: 4, category: 'Baño', title: 'Baño Spa con Vistas', imageUrl: 'https://picsum.photos/seed/bathroom1/800/1000' },
  { id: 5, category: 'Sala', title: 'Rincón de Lectura Acogedor', imageUrl: 'https://picsum.photos/seed/livingroom2/800/600' },
  { id: 6, category: 'Cocina', title: 'Cocina Abierta Estilo Industrial', imageUrl: 'https://picsum.photos/seed/kitchen2/800/1000' },
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

export const testimonials: Testimonial[] = [
    {
        quote: "Línea Decorativa transformó nuestra casa en un hogar de ensueño. Su atención al detalle y su gusto exquisito superaron todas nuestras expectativas. ¡Un equipo increíblemente profesional!",
        author: "Familia Torres",
        location: "Ciudad de México",
    },
    {
        quote: "El proceso de diseño de nuestra nueva cocina fue una experiencia maravillosa. Comprendieron nuestra visión a la perfección y el resultado es tanto funcional como espectacularmente bello.",
        author: "Ana y Carlos Mendoza",
        location: "Monterrey",
    },
    {
        quote: "Desde el asesoramiento inicial hasta la instalación final de las cortinas, todo fue impecable. La calidad de los materiales y el servicio al cliente son de primer nivel.",
        author: "Sofía Hernández",
        location: "Guadalajara",
    }
];
