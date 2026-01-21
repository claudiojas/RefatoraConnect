import { Router, Request, Response } from "express";
import { prisma } from "../../DB/prisma.config";
import axios, { AxiosError } from 'axios';

const whatsappCallbackRouter = Router();

interface GranularScope {
  scope: string;
  target_ids: string[];
}

function isAxiosError(error: unknown): error is AxiosError {
  return (error as AxiosError).isAxiosError !== undefined;
}

/**
 * @openapi
 * /auth/whatsapp/callback:
 *   post:
 *     summary: Callback para o "Embedded Signup" do WhatsApp
 *     description: |
 *       Recebe o código de autorização da Meta, troca por um token de acesso de longa duração,
 *       e salva as credenciais do WhatsApp (Token, Phone Number ID, Business ID) para o cliente.
 *       Requer que o `clientId` seja enviado no corpo para associar as credenciais ao tenant correto.
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - code
 *               - clientId
 *             properties:
 *               code:
 *                 type: string
 *                 description: O código de autorização retornado pela Meta.
 *               clientId:
 *                 type: string
 *                 format: uuid
 *                 description: O ID do cliente (tenant) para associar as credenciais.
 *     responses:
 *       '200':
 *         description: Conexão com WhatsApp realizada com sucesso.
 *       '400':
 *         description: Erro nos dados da requisição ou falha ao obter credenciais.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       '500':
 *         description: Erro interno do servidor.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
whatsappCallbackRouter.post("/", async (req: Request, res: Response) => {
    const { code, clientId } = req.body;

  if (!code || !clientId) {
    return res.status(400).json({ error: "Authorization code and clientId are required." });
  }

  const APP_ID = process.env.META_APP_ID;
  const APP_SECRET = process.env.META_APP_SECRET;

  try {
    const tokenResponse = await axios.get(`https://graph.facebook.com/v19.0/oauth/access_token`, {
      params: {
        client_id: APP_ID,
        client_secret: APP_SECRET,
        code: code,
      },
    });
    const userAccessToken = tokenResponse.data.access_token;

    if (!userAccessToken) {
      return res.status(400).json({ error: "Failed to retrieve access token." });
    }

    const longLivedTokenResponse = await axios.get(`https://graph.facebook.com/oauth/access_token`, {
        params: {
            grant_type: 'fb_exchange_token',
            client_id: APP_ID,
            client_secret: APP_SECRET,
            fb_exchange_token: userAccessToken
        }
    });
    const longLivedAccessToken = longLivedTokenResponse.data.access_token;

    const debugTokenResponse = await axios.get(`https://graph.facebook.com/debug_token`, {
      params: {
        input_token: longLivedAccessToken,
        access_token: `${APP_ID}|${APP_SECRET}`
      }
    });

    const businessId = debugTokenResponse.data.data.granular_scopes.find((scope: GranularScope) => scope.scope === 'whatsapp_business_management').target_ids[0];

    if (!businessId) {
      return res.status(400).json({ error: "WhatsApp Business Account not found or permissions not granted." });
    }

    const wabaResponse = await axios.get(`https://graph.facebook.com/v19.0/${businessId}/phone_numbers`, {
      params: {
        access_token: longLivedAccessToken
      }
    });

    const phoneNumber = wabaResponse.data.data[0];
    if (!phoneNumber || !phoneNumber.id) {
      return res.status(400).json({ error: "No phone numbers found for this WhatsApp Business Account." });
    }

    const phoneNumberId = phoneNumber.id;

    await prisma.client.update({
      where: { id: clientId },
      data: {
        whatsappAccessToken: longLivedAccessToken,
        whatsappPhoneNumberId: phoneNumberId,
        whatsappBusinessId: businessId,
      },
    });

    res.status(200).json({ message: "WhatsApp connected successfully." });

  } catch (error: unknown) {
    if (isAxiosError(error)) {
      console.error("Error during WhatsApp callback:", error.response?.data || error.message);
    } else if (error instanceof Error) {
      console.error("Error during WhatsApp callback:", error.message);
    } else {
      console.error("Error during WhatsApp callback:", "An unknown error occurred.");
    }
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export { whatsappCallbackRouter };
