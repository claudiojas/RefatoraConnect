import { Router, Request, Response } from "express";
import { prisma } from "../../DB/prisma.config";

const updateConfigRouter = Router({ mergeParams: true });

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
 * /client/{clientId}/config/{agentType}/{configId}:
 *   put:
 *     summary: Atualiza a configuração de um agente
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
 *       - in: path
 *         name: agentType
 *         required: true
 *         schema:
 *           type: string
 *           enum: [contact, history, memory, pricing, services, smalltalk]
 *       - in: path
 *         name: configId
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
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
 *     responses:
 *       '200':
 *         description: Configuração atualizada com sucesso.
 *       '400':
 *         description: Tipo de agente inválido.
 *       '404':
 *         description: Configuração ou cliente não encontrado.
 */
updateConfigRouter.put("/", async (req: Request, res: Response) => {
  const { clientId, agentType, configId } = req.params;
  const configData = req.body;

  const configModel = getConfigModel(agentType);
  if (!configModel) {
    return res.status(400).json({ error: `Invalid agent type: ${agentType}` });
  }

  try {
    const updatedConfig = await (configModel as any).update({
      where: { id: configId, clientId },
      data: configData,
    });
    res.status(200).json(updatedConfig);
  } catch (error) {
    console.error(`Error updating config for agent ${agentType}:`, error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export { updateConfigRouter };
