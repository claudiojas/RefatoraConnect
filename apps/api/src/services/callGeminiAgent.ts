// import { GoogleGenerativeAI } from "@google/generative-ai";
import { GoogleGenAI } from "@google/genai";
import { checkEnvironmentVariable } from "./checkEnvironmentVariable";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY ||'';

const genAI = new GoogleGenAI({apiKey:GEMINI_API_KEY});


export const callGeminiAgent = async ( systemPrompt: string, userPrompt: string, clientId: string ) => {
  checkEnvironmentVariable();
  try {
    const model ="gemini-1.5-flash";

    const response = await genAI.models.generateContent({
      model:model,
      contents: `${systemPrompt}, ${userPrompt}`,
    });

    let textResponse = '';

    if(response.candidates && response.candidates.length > 0 && response.candidates[0].content && response.candidates[0].content.parts && response.candidates[0].content.parts.length > 0) {
      textResponse = response.candidates[0].content.parts[0].text || '';
    }    return textResponse;
  } catch (error) {
    console.error('Erro ao gerar conteúdo:', error); 
    return null;
  }
}