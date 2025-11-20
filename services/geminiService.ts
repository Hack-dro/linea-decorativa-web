import { GoogleGenAI } from "@google/genai";

// Safe initialization that warns but doesn't crash if key is missing (handled in UI)
const getAIClient = () => {
  if (!process.env.API_KEY) {
    console.warn("Gemini API Key is missing.");
    return null;
  }
  return new GoogleGenAI({ apiKey: process.env.API_KEY });
};

export const getDesignAdvice = async (prompt: string): Promise<string> => {
  const ai = getAIClient();
  if (!ai) {
    return "Lo siento, la llave de API no está configurada. Por favor verifica tu configuración.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Eres un experto diseñador de interiores de alta gama para 'Línea Decorativa'. 
      Responde de manera breve, elegante y útil a la siguiente consulta del cliente: "${prompt}".
      No uses markdown complejo, solo texto plano o viñetas simples.`,
    });
    
    return response.text || "No pude generar una respuesta en este momento.";
  } catch (error) {
    console.error("Error calling Gemini:", error);
    return "Hubo un error al consultar al asistente de diseño. Intenta nuevamente.";
  }
};