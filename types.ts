export interface ImageContent {
  id: string;
  url: string;
  alt: string;
  title?: string;
  description?: string;
}

export interface SiteContent {
  hero: ImageContent;
  about: ImageContent;
  gallery: ImageContent[];
}

export enum AIState {
  IDLE,
  LOADING,
  SUCCESS,
  ERROR
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}