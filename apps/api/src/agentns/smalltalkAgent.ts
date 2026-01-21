import { prisma } from '../DB/prisma.config';
import { MethodsRepository } from '../repository/methods.repository';
import { callGeminiAgent } from '../services/callGeminiAgent';
import { erroAgente } from '../services/erroAgent';

const repo = new MethodsRepository();

export async function smalltalkAgent(task: string, chat: string, clientId: string): Promise<{ message: string; }> {

  const config = await prisma.smalltalkConfig.findFirst({
    where: { clientId },
  });

  if (!config) {
    return { message: "Configuração de smalltalk não encontrada para este cliente." };
  }

  const historyText = config.smalltalkGuidelines;

  const contentMessage = `
    - Você é um modelo de linguagem artificial que vai ${config.agentDescription}.
    - Responda de forma breve, amigável e natural, como se estivesse conversando diretamente com um possível cliente no chat.
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
    erroAgente(error, "smalltalkAgent");
    return { message: "Haha, boa pergunta! 😄" };
  }
}