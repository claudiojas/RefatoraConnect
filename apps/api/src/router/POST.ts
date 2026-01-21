import { Router, Request, Response } from "express"; 
import { orchestrator } from "../orchestrator/orchestrator";
import { formatResponse } from "../services/formatResponse";

const postRouter = Router();

/**
 * @openapi
 * /task:
 *   post:
 *     summary: Envia uma pergunta ao assistente de IA.
 *     description: >
 *       Recebe uma pergunta do usuário e um ID de cliente no cabeçalho para processar a solicitação
 *       através do orquestrador de IA e retornar uma resposta formatada.
 *     tags: [Assistant]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: header
 *         name: x-client-id
 *         schema:
 *           type: string
 *           format: uuid
 *         required: true
 *         description: ID do cliente (tenant) para identificar a configuração do assistente.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - question
 *             properties:
 *               question:
 *                 type: string
 *                 description: A pergunta do usuário a ser processada pelo assistente.
 *                 example: "Qual é a história da empresa?"
 *     responses:
 *       '200':
 *         description: Resposta do assistente de IA formatada.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 response:
 *                   type: string
 *                   example: "Nossa empresa foi fundada em 2010..."
 *       '400':
 *         description: Requisição inválida (pergunta ou Client ID ausente).
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       '500':
 *         description: Erro interno do servidor ao processar a requisição.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
postRouter.post('/task', async (req: Request, res: Response) => {
  const { question } = req.body;
  const clientId = req.headers['x-client-id'] as string;

  if (!question || typeof question !== 'string' || !question.trim()) {
    res.status(400).send({ error: 'Question is required and must be a non-empty string!' });
    return;
  }

  if (!clientId) {
    res.status(400).send({ error: 'Client ID is required in the X-Client-ID header!' });
    return;
  }

  try {
    const result = await orchestrator(question, question, clientId);
    const formattedResult = formatResponse(result.message);
    res.status(200).json({ response: formattedResult });
  } catch (error) {
    console.error("Error processing request:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export { postRouter };