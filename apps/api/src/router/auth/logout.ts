import { Router, Request, Response } from "express";

const logoutRouter = Router();

/**
 * @openapi
 * /auth/logout:
 *   post:
 *     summary: Faz logout do usuário
 *     tags: [Auth]
 *     responses:
 *       '200':
 *         description: Logout bem-sucedido. O cookie do token é limpo.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Logged out successfully."
 */
logoutRouter.post("/", (req: Request, res: Response) => {
  res.clearCookie('token');
  res.status(200).json({ message: "Logged out successfully." });
});

export { logoutRouter };
