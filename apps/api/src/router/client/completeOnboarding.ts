import { Router, Request, Response } from "express";
import { prisma } from "../../DB/prisma.config";

const completeOnboardingRouter = Router({ mergeParams: true });

/**
 * @openapi
 * /client/{clientId}/complete-onboarding:
 *   post:
 *     summary: Marca o onboarding do cliente como completo
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
 *     responses:
 *       '200':
 *         description: Onboarding do cliente completado com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Client'
 *       '404':
 *         description: Cliente não encontrado.
 */
completeOnboardingRouter.post("/", async (req: Request, res: Response) => {
  const { clientId } = req.params;

  try {
    const updatedClient = await prisma.client.update({
      where: { id: clientId },
      data: { onboardingCompleted: true },
    });
    res.status(200).json(updatedClient);
  } catch (error) {
    console.error(`Error completing onboarding for client ${clientId}:`, error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export { completeOnboardingRouter };
