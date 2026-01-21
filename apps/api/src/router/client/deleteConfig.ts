import { Router, Request, Response } from "express";
import { prisma } from "../../DB/prisma.config";

const deleteConfigRouter = Router({ mergeParams: true });

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
 *   delete:
 *     summary: Deleta a configuração de um agente
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
 *     responses:
 *       '204':
 *         description: Configuração deletada com sucesso.
 *       '400':
 *         description: Tipo de agente inválido.
 *       '404':
 *         description: Configuração ou cliente não encontrado.
 */
deleteConfigRouter.delete("/", async (req: Request, res: Response) => {
  const { clientId, agentType, configId } = req.params;

  const configModel = getConfigModel(agentType);
  if (!configModel) {
    return res.status(400).json({ error: `Invalid agent type: ${agentType}` });
  }

  try {
    await (configModel as any).delete({
      where: { id: configId, clientId },
    });
    res.status(204).send(); // No content
  } catch (error) {
    console.error(`Error deleting config for agent ${agentType}:`, error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export { deleteConfigRouter };
