import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, Send, X, Sparkles, Minimize2 } from 'lucide-react';
import { getDesignAdvice } from '../services/geminiService';
import { ChatMessage, AIState } from '../types';

export const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hola. Soy tu asistente de diseño de Línea Decorativa. ¿Buscas inspiración para algún espacio en particular?' }
  ]);
  const [state, setState] = useState<AIState>(AIState.IDLE);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || state === AIState.LOADING) return;

    const userMsg: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setState(AIState.LOADING);

    const responseText = await getDesignAdvice(input);
    
    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    setState(AIState.SUCCESS);
  };

  return (
    <>
      {/* Trigger Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-40 p-4 rounded-full shadow-xl transition-all duration-300 flex items-center gap-2 ${isOpen ? 'bg-white text-stone-800 translate-y-20 opacity-0 pointer-events-none' : 'bg-stone-800 text-white hover:bg-stone-700'}`}
      >
        <Sparkles size={20} />
        <span className="font-medium hidden md:inline">Asistente de Diseño</span>
      </button>

      {/* Chat Window */}
      <div 
        className={`fixed z-50 bg-white shadow-2xl rounded-2xl overflow-hidden transition-all duration-500 ease-in-out border border-stone-200
        ${isOpen ? 'bottom-6 right-6 w-[90vw] md:w-96 h-[600px] opacity-100 translate-y-0' : 'bottom-0 right-6 w-0 h-0 opacity-0 translate-y-10'}`}
      >
        {/* Header */}
        <div className="bg-stone-900 text-white p-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-amber-600 rounded-lg">
              <Sparkles size={16} className="text-white" />
            </div>
            <div>
              <h3 className="font-serif font-medium text-sm">Asistente IA</h3>
              <p className="text-xs text-stone-400">Powered by Gemini</p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-stone-400 hover:text-white">
            <Minimize2 size={18} />
          </button>
        </div>

        {/* Messages Area */}
        <div className="h-[460px] overflow-y-auto p-4 bg-stone-50 space-y-4">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div 
                className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm
                ${msg.role === 'user' 
                  ? 'bg-stone-800 text-white rounded-tr-none' 
                  : 'bg-white text-stone-700 border border-stone-100 rounded-tl-none'}`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {state === AIState.LOADING && (
            <div className="flex justify-start animate-pulse">
              <div className="bg-stone-200 h-8 w-12 rounded-full flex items-center justify-center gap-1">
                <div className="w-1.5 h-1.5 bg-stone-400 rounded-full animate-bounce"></div>
                <div className="w-1.5 h-1.5 bg-stone-400 rounded-full animate-bounce delay-75"></div>
                <div className="w-1.5 h-1.5 bg-stone-400 rounded-full animate-bounce delay-150"></div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="absolute bottom-0 left-0 right-0 bg-white p-3 border-t border-stone-100">
          <div className="relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Pregunta sobre colores, estilos..."
              className="w-full bg-stone-100 border-0 rounded-full pl-4 pr-12 py-3 text-sm focus:ring-2 focus:ring-stone-400 focus:outline-none placeholder-stone-400"
            />
            <button 
              onClick={handleSend}
              disabled={state === AIState.LOADING || !input.trim()}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-stone-800 text-white rounded-full hover:bg-stone-700 disabled:opacity-50 transition"
            >
              <Send size={14} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};