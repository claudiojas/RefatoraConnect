import { prisma } from '../DB/prisma.config';
import { MethodsRepository } from '../repository/methods.repository';
import { callGeminiAgent } from '../services/callGeminiAgent';
import { erroAgente } from '../services/erroAgent';

const repo = new MethodsRepository();

export async function pricingAgent(task: string, chat: string, clientId: string): Promise<{ message: string; }> {

  const config = await prisma.pricingConfig.findFirst({
    where: { clientId },
  });

  if (!config) {
    return { message: "Configuração de precificação não encontrada para este cliente." };
  }

  const historyText = `  
    ${config.paymentMethods}
    ${config.noPricingInfoText}
  `;

  const contentMessage = `
    Você é um modelo de linguagem treinado para ${config.agentDescription}
  `;

  // 1. Tenta encontrar uma pergunta parecida já registrada
  const cached = await repo.findSimilarQuestion({ question: task });
  if (cached) return { message: cached.response }; // category = resposta da pergunta

  const prompt = `
    Estas são as informações que voce usará para responder: ${historyText}
    Tarefa: "${task}"
  `;
  
  try { 
    const choice = await callGeminiAgent(contentMessage, prompt, clientId)
    if (!choice || choice.length === 0) {
      return { message: "Parece que houve um erro. Pode tentar novamente? Eu estou aqui para ajudar!" };
    }

    // 3. Salva a pergunta e a resposta no banco
    await repo.saveToDatabase({
      question: chat ? chat : "",
      response: choice, 
    });
    
    return { message: choice };
  } catch (error) {
    erroAgente(error, "pricingAgent");
    return { message: "Posso fazer um orçamento com base no seu projeto! Preencha o formulário no site e logo entro em contato 😉" };
  }
}