import { Router, Request, Response } from "express";
import { prisma } from "../../DB/prisma.config";
import jwt from "jsonwebtoken";

const meRouter = Router();
const JWT_SECRET = process.env.JWT_SECRET || "supersecretjwtkey";

/**
 * @openapi
 * /auth/me:
 *   get:
 *     summary: Retorna os dados do usuário logado
 *     tags: [Auth]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       '200':
 *         description: Dados do usuário retornados com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       '401':
 *         description: Não autenticado. O token não foi fornecido ou é inválido.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       '404':
 *         description: Usuário não encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
meRouter.get("/", async (req: Request, res: Response) => {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ error: "Not authenticated" });
    }

    try {
      const payload = jwt.verify(token, JWT_SECRET) as { userId: string };
      const user = await prisma.user.findUnique({
        where: { id: payload.userId },
        include: { client: true },
      });

      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      const { password: _, ...userWithoutPassword } = user;
      res.status(200).json(userWithoutPassword);
    } catch (error) {
        console.error("Error fetching user:", error);
        res.status(401).json({ error: "Invalid token" });
    }
});

export { meRouter };
