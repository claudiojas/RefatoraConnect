import { Router, Request, Response } from "express";
import { prisma } from "../../DB/prisma.config";

const addConfigRouter = Router({ mergeParams: true });

// Helper function to get the correct config model based on agentType
const getConfigModel = (agentType: string) => {
  switch (agentType) {
    case "contact":
      return prisma.contactConfig;
    case "history":
      return prisma.historyConfig;
    case "memory":
      return prisma.memoryConfig;
    case "pricing":
      return prisma.pricingConfig;
    case "services":
      return prisma.servicesConfig;
    case "smalltalk":
      return prisma.smalltalkConfig;
    default:
      return null;
  }
};

/**
 * @openapi
 * /client/{clientId}/config/{agentType}:
 *   post:
 *     summary: Adiciona a configuração para um tipo de agente
 *     tags: [Client]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: clientId
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: O ID do cliente.
 *       - in: path
 *         name: agentType
 *         required: true
 *         schema:
 *           type: string
 *           enum: [contact, history, memory, pricing, services, smalltalk]
 *         description: O tipo de agente a ser configurado.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             oneOf:
 *               - $ref: '#/components/schemas/ContactConfig'
 *               - $ref: '#/components/schemas/HistoryConfig'
 *               - $ref: '#/components/schemas/MemoryConfig'
 *               - $ref: '#/components/schemas/PricingConfig'
 *               - $ref: '#/components/schemas/ServicesConfig'
 *               - $ref: '#/components/schemas/SmalltalkConfig'
 *           example:
 *             agentDescription: "Descrição do agente de contato"
 *             contactSuggestion: "Sugestão de contato"
 *     responses:
 *       '201':
 *         description: Configuração do agente criada com sucesso.
 *       '400':
 *         description: Tipo de agente inválido.
 *       '404':
 *         description: Cliente não encontrado.
 */
addConfigRouter.post("/", async (req: Request, res: Response) => {
  const { clientId, agentType } = req.params;
  const configData = req.body;

  const configModel = getConfigModel(agentType);
  if (!configModel) {
    return res.status(400).json({ error: `Invalid agent type: ${agentType}` });
  }

  try {
    const clientExists = await prisma.client.findUnique({ where: { id: clientId } });
    if (!clientExists) {
      return res.status(404).json({ error: "Client not found." });
    }

    const newConfig = await (configModel as any).create({
      data: {
        clientId,
        ...configData,
      },
    });
    res.status(201).json(newConfig);
  } catch (error) {
    console.error(`Error adding config for agent ${agentType}:`, error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export { addConfigRouter };
