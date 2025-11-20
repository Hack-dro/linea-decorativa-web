import React, { useState } from 'react';
import { Lock, Unlock, Download, RotateCcw, Copy, Check } from 'lucide-react';
import { SiteContent } from '../types';

interface AdminPanelProps {
  isEditing: boolean;
  toggleEditing: () => void;
  content: SiteContent;
  onReset: () => void;
}

export const AdminPanel: React.FC<AdminPanelProps> = ({ isEditing, toggleEditing, content, onReset }) => {
  const [showExport, setShowExport] = useState(false);
  const [copied, setCopied] = useState(false);

  const generateExportJSON = () => {
    // We pretty print the JSON so it's easy to paste into constants.ts
    const jsonString = JSON.stringify(content, null, 2);
    return `export const INITIAL_CONTENT: SiteContent = ${jsonString};`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateExportJSON());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {/* Toggle Button */}
      <button 
        onClick={toggleEditing}
        className={`fixed bottom-6 left-6 z-40 p-3 rounded-full shadow-lg transition-all duration-300 ${isEditing ? 'bg-amber-600 text-white' : 'bg-white text-stone-400 hover:text-stone-800'}`}
        title={isEditing ? "Salir del modo edición" : "Entrar modo administrador"}
      >
        {isEditing ? <Unlock size={20} /> : <Lock size={20} />}
      </button>

      {/* Admin Toolbar */}
      {isEditing && (
        <div className="fixed bottom-6 left-20 z-40 flex gap-2 animate-fade-in">
          <button 
            onClick={() => setShowExport(true)}
            className="bg-stone-800 text-white px-4 py-3 rounded-full shadow-lg hover:bg-stone-700 flex items-center gap-2 text-sm font-medium transition"
          >
            <Download size={16} />
            Exportar Configuración
          </button>
          <button 
            onClick={onReset}
            className="bg-white text-red-600 px-4 py-3 rounded-full shadow-lg hover:bg-red-50 border border-red-100 flex items-center gap-2 text-sm font-medium transition"
          >
            <RotateCcw size={16} />
            Reset
          </button>
        </div>
      )}

      {/* Export Modal */}
      {showExport && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full p-8 shadow-2xl">
            <h2 className="text-2xl font-serif font-bold text-stone-800 mb-2">Actualizar Web en GitHub</h2>
            <p className="text-stone-600 mb-6">
              Para hacer tus cambios permanentes en Netlify, sigue estos pasos:
              <br/>1. Copia el código de abajo.
              <br/>2. Ve a tu repositorio en GitHub.
              <br/>3. Abre el archivo <code className="bg-stone-100 px-1 rounded text-sm">constants.ts</code>.
              <br/>4. Reemplaza todo el contenido con este código.
            </p>

            <div className="relative bg-stone-900 rounded-lg p-4 mb-6 group">
              <pre className="text-green-400 font-mono text-xs overflow-x-auto h-64 whitespace-pre-wrap">
                {generateExportJSON()}
              </pre>
              <button 
                onClick={handleCopy}
                className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white p-2 rounded transition"
              >
                {copied ? <Check size={18} className="text-green-400" /> : <Copy size={18} />}
              </button>
            </div>

            <div className="flex justify-end">
              <button 
                onClick={() => setShowExport(false)}
                className="px-6 py-2 bg-stone-200 text-stone-800 rounded hover:bg-stone-300 transition font-medium"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};