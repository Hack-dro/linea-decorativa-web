import React, { useState, useRef } from 'react';
import { Edit, Upload, X, Check } from 'lucide-react';

interface EditableImageProps {
  id: string;
  src: string;
  alt: string;
  className?: string;
  isEditing: boolean;
  onUpdate: (id: string, newUrl: string) => void;
  aspectRatio?: 'video' | 'square' | 'portrait' | 'auto';
}

export const EditableImage: React.FC<EditableImageProps> = ({
  id,
  src,
  alt,
  className = "",
  isEditing,
  onUpdate,
  aspectRatio = 'auto'
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [tempUrl, setTempUrl] = useState(src);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setTempUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    onUpdate(id, tempUrl);
    setShowModal(false);
  };

  // Styling for aspect ratios
  const aspectClasses = {
    'video': 'aspect-video',
    'square': 'aspect-square',
    'portrait': 'aspect-[3/4]',
    'auto': ''
  };

  return (
    <>
      <div 
        className={`relative group overflow-hidden ${className} ${aspectClasses[aspectRatio]}`}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {isEditing && (
          <div className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 ${isHovering ? 'opacity-100' : 'opacity-0'}`}>
            <button 
              onClick={() => setShowModal(true)}
              className="bg-white text-stone-900 px-4 py-2 rounded-full flex items-center gap-2 font-medium hover:bg-stone-100 transition"
            >
              <Edit size={16} />
              Cambiar Imagen
            </button>
          </div>
        )}
      </div>

      {/* Edit Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6 shadow-2xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-serif font-bold text-stone-800">Editar Imagen</h3>
              <button onClick={() => setShowModal(false)} className="text-stone-500 hover:text-red-500">
                <X size={24} />
              </button>
            </div>

            <div className="space-y-4">
              <div className="aspect-video bg-stone-100 rounded overflow-hidden border border-stone-200">
                <img src={tempUrl} alt="Preview" className="w-full h-full object-contain" />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-500 uppercase mb-1">Opción 1: Pegar URL</label>
                <input 
                  type="text" 
                  value={tempUrl}
                  onChange={(e) => setTempUrl(e.target.value)}
                  className="w-full border border-stone-300 rounded p-2 text-sm focus:ring-2 focus:ring-stone-500 outline-none"
                  placeholder="https://..."
                />
              </div>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-stone-200"></div>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-2 text-stone-500">O subir archivo</span>
                </div>
              </div>

              <div>
                <input 
                  type="file" 
                  accept="image/*"
                  ref={fileInputRef}
                  className="hidden"
                  onChange={handleFileChange}
                />
                <button 
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full border-2 border-dashed border-stone-300 rounded p-4 text-stone-500 hover:bg-stone-50 hover:border-stone-500 transition flex flex-col items-center gap-2"
                >
                  <Upload size={20} />
                  <span className="text-sm">Click para seleccionar archivo local</span>
                </button>
                <p className="text-xs text-orange-600 mt-1">
                  Nota: Los archivos locales se guardan en el navegador. Para GitHub, se recomienda usar URLs externas (ej. Unsplash, Cloudinary).
                </p>
              </div>

              <div className="flex gap-2 mt-6">
                <button 
                  onClick={() => setShowModal(false)}
                  className="flex-1 py-2 text-stone-600 hover:bg-stone-100 rounded"
                >
                  Cancelar
                </button>
                <button 
                  onClick={handleSave}
                  className="flex-1 py-2 bg-stone-800 text-white rounded hover:bg-stone-700 flex items-center justify-center gap-2"
                >
                  <Check size={16} />
                  Aplicar Cambio
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};