import { Router, Request, Response } from "express";

const metaConfigRouter = Router();

/**
 * @openapi
 * /auth/meta-config:
 *   get:
 *     summary: Retorna a configuração do App da Meta
 *     description: Retorna o ID de configuração e o App ID necessários para o fluxo de "Embedded Signup" da Meta no frontend.
 *     tags: [Auth]
 *     responses:
 *       '200':
 *         description: Configuração retornada com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 configId:
 *                   type: string
 *                 appId:
 *                   type: string
 *       '500':
 *         description: Variáveis de ambiente não configuradas no servidor.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
metaConfigRouter.get("/", (req: Request, res: Response) => {
  const configId = process.env.CONFIG_ID;
  const appId = process.env.META_APP_ID;

  if (!configId || !appId) {
    return res.status(500).json({ error: "Meta configuration not found on server." });
  }

  res.status(200).json({ configId, appId });
});

export { metaConfigRouter };
