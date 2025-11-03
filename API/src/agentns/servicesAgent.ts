import { MethodsRepository } from '../repository/methods.repository';
import { callGeminiAgent } from '../services/callGeminiAgent';
import { erroAgente } from '../services/erroAgent';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const repo = new MethodsRepository();

export async function servicesAgent(task: string, chat: string, clientId: string): Promise<{ message: string; }> {

  const config = await prisma.servicesConfig.findFirst({
    where: { clientId },
  });

  if (!config) {
    return { message: "Configuração de serviços não encontrada para este cliente." };
  }

  const historyText = config.servicesOffered;

  const contentMessage = `
    - Você é um modelo de linguagem artificial que vai tirar dúvidas sobre os serviços oferecidos pela agência que cria soluções tecnologicas para empresas, escolas, pessoas fissicas etc.
    - Responda de forma breve, amigável e natural, como se estivesse conversando diretamente com um possível cliente no chat.
    ${config.conversationStyle}
  `;

  // 1. Tenta encontrar uma pergunta parecida já registrada
  const cached = await repo.findSimilarQuestion({ question: task });
  if (cached) return { message: cached.response }; // category = resposta da pergunta

  const prompt = `
    - Use respostas curtas, seja simpático e sempre direcione as conversas para o lado profissional de uma forma gentil e educada.
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
    erroAgente(error, "servicesAgent");
    return { message: "Poxa, não consegui entender direito agora. Você pode tentar perguntar de outro jeito?" };
  }
}