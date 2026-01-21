import { Router, Request, Response } from "express";
import { prisma } from "../../DB/prisma.config";

const createClientRouter = Router();

/**
 * @openapi
 * /client:
 *   post:
 *     summary: Cria um novo cliente (tenant)
 *     tags: [Client]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateClientPayload'
 *     responses:
 *       '201':
 *         description: Cliente criado com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Client'
 *       '400':
 *         description: Dados inválidos.
 *       '409':
 *         description: Cliente com este e-mail já existe.
 */
createClientRouter.post("/", async (req: Request, res: Response) => {
  const { name, companyName, email } = req.body;

  if (!name || !companyName || !email) {
    return res.status(400).json({ error: "Name, companyName, and email are required." });
  }

  try {
    const existingClient = await prisma.client.findUnique({ where: { email } });
    if (existingClient) {
      return res.status(409).json({ error: "Email already registered." });
    }

    const newClient = await prisma.client.create({
      data: {
        name,
        companyName,
        email,
      },
    });
    res.status(201).json(newClient);
  } catch (error) {
    console.error("Error creating client:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export { createClientRouter };
