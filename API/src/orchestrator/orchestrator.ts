import { classifyTask } from "../services/classifyService";
import { historyAgent } from "../agentns/historyAgent";
import { servicesAgent } from "../agentns/servicesAgent";
import { memoryAgent } from "../agentns/memoryAgent";
import { smalltalkAgent } from "../agentns/smalltalkAgent";
import { pricingAgent } from "../agentns/pricingAgent";
import { contactAgent } from "../agentns/contact";

export const orchestrator = async (task: string, chat: string, clientId: string) => {
  const category = await classifyTask(chat, clientId);

  const agentMap: { [key: string]: (chat: string, task: string, clientId: string) => Promise<{ message: string }> } = {
    history: historyAgent,
    services: servicesAgent,
    memory: memoryAgent,
    other: smalltalkAgent,
    pricing: pricingAgent,
    contacts: contactAgent,
  };

  const agent = agentMap[category] || (async () => ({ message: "Desculpe, não entendi. Pode reformular a pergunta?" }));

  return agent(chat, chat, clientId);
};