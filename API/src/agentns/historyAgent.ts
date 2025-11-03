import { MethodsRepository } from '../repository/methods.repository';
import { callGeminiAgent } from '../services/callGeminiAgent';
import { erroAgente } from '../services/erroAgent';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const repo = new MethodsRepository();

export async function historyAgent(task: string, chat: string, clientId: string ): Promise<{ message: string; }> {

  const config = await prisma.historyConfig.findFirst({
    where: { clientId },
  });

  if (!config) {
    return { message: "Configuração de histórico não encontrada para este cliente." };
  }

  const historyText = config.companyHistory;

  const contentMessage = `
    - Você é um modelo de linguagem artificial que vai responder perguntas sobre a história profissional de uma empresa.
    - Responda de forma breve, amigável e natural, como se estivesse conversando diretamente com um possível cliente no chat.
    - É CRÍTICO que você use APENAS as informações fornecidas no prompt para formular sua resposta. NÃO invente informações.
  `;

  // 1. Tenta encontrar uma pergunta parecida já registrada
  const cached = await repo.findSimilarQuestion({ question: task });
  if (cached) return { message: cached.response }; // category = resposta da pergunta()

  const prompt = `
    - Use as seguintes informações para responder à pergunta do usuário de forma direta e concisa:
    ${config.companyHistory}
    - Pergunta do usuário: "${task}"
    - Responda de forma simpática e profissional, usando apenas as informações fornecidas e SEM fazer perguntas adicionais.
  `;

  try {
    const choice = await callGeminiAgent(contentMessage, prompt, clientId)
   
    if (!choice || choice.length === 0) {
      return { message: "Desculpe, não consegui processar sua pergunta. Tente algo diferente!" };
    }

    // 3. Salva a pergunta e a resposta no banco
    await repo.saveToDatabase({
      question: chat ? chat : "",
      response: choice, 
    });

    return { message: choice };
  } catch (error) {
    erroAgente(error, "historyAgent");
    return { message: "Poxa, não consegui entender direito agora. Você pode tentar perguntar de outro jeito?" };
  }
}