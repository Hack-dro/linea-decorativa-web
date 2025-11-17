
import React from 'react';
import { FacebookIcon, InstagramIcon, PinterestIcon } from './icons/SocialIcons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-center md:text-left mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Línea Decorativa. Todos los derechos reservados.
        </p>
        <div className="flex space-x-6">
          <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white transition-colors duration-300"><FacebookIcon /></a>
          <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-white transition-colors duration-300"><InstagramIcon /></a>
          <a href="#" aria-label="Pinterest" className="text-gray-400 hover:text-white transition-colors duration-300"><PinterestIcon /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
