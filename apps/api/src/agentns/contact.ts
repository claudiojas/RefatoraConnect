import { prisma } from '../DB/prisma.config';
import { MethodsRepository } from '../repository/methods.repository';
import { callGeminiAgent } from '../services/callGeminiAgent';
import { erroAgente } from '../services/erroAgent';

const repo = new MethodsRepository();

export async function contactAgent(task: string, chat: string, clientId: string ): Promise<{ message: string; }> {

  const config = await prisma.contactConfig.findFirst({
    where: { clientId },
  });

  if (!config) {
    return { message: "Configuração de contato não encontrada para este cliente." };
  }

  const historyText = `
    A pessoa esta perguntando sobre como entrar em contato ou agendar uma reunião. Voce vai sugerir
    educadamente que ele ${config.contactSuggestion}.
  `;

  const contentMessage = `
    - Você é um modelo de linguagem artificial que vai ${config.agentDescription}.
    - Responda de forma breve, amigável e natural, como se estivesse conversando diretamente com um possível cliente no chat.
  `;

  const prompt = `
    - Use respostas curtas, seja simpático e sempre direcione as conversas para o lado profissional de uma forma gentil e educada.
    - A pessoa esta perguntando sobre como entrar em contato ou agendar uma reunião. Voce vai sugerir
    educadamente que ele ${config.contactSuggestion}.
    Tarefa: "${task}"
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
    erroAgente(error, "contactAgent");
    return { message: "Poxa, não consegui entender direito agora. Você pode tentar perguntar de outro jeito?" };
  }
}