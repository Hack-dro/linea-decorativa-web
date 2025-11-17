// FIX: Import React to provide types for component props.
import React from 'react';

export interface Service {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

export interface Project {
  id: number;
  category: string;
  title: string;
  imageUrl: string;
}

export interface ProcessStep {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    title: string;
    description: string;
}

export interface GalleryImage {
    id: number;
    src: string;
    alt: string;
}
