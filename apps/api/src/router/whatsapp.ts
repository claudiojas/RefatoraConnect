import { Router, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { orchestrator } from "../orchestrator/orchestrator";
import { formatResponse } from "../services/formatResponse";
import axios, { AxiosError } from "axios";

function isAxiosError(error: unknown): error is AxiosError {
  return (error as AxiosError).isAxiosError !== undefined;
}

const whatsappRouter = Router();
const prisma = new PrismaClient();

const WHATSAPP_VERIFY_TOKEN = process.env.WHATSAPP_VERIFY_TOKEN;

// GET /webhook/whatsapp - Webhook verification
whatsappRouter.get("/whatsapp", (req: Request, res: Response) => {
  const mode = req.query["hub.mode"];
  const token = req.query["hub.verify_token"];
  const challenge = req.query["hub.challenge"];

  if (mode === "subscribe" && token === WHATSAPP_VERIFY_TOKEN) {
    console.log("Webhook verified successfully!");
    res.status(200).send(challenge);
  } else {
    res.sendStatus(403);
  }
});

// POST /webhook/whatsapp - Handle incoming messages
whatsappRouter.post("/whatsapp", async (req: Request, res: Response) => {
  const body = req.body;

  if (body.object !== "whatsapp_business_account") {
    return res.sendStatus(404);
  }

  try {
    const change = body.entry[0]?.changes[0];
    if (!change || !change.value.messages) {
      return res.sendStatus(200);
    }

    const phoneNumberId = change.value.metadata.phone_number_id;
    const message = change.value.messages[0];
    const from = message.from;
    const text = message.text.body;

    console.log(`Received message from ${from} for number ID ${phoneNumberId}: ${text}`);

    // 1. Identify clientId based on the whatsappPhoneNumberId
    const client = await prisma.client.findFirst({
      where: { whatsappPhoneNumberId: phoneNumberId },
    });

    if (!client || !client.whatsappAccessToken) {
      console.error(`No configured client found for phone number ID: ${phoneNumberId}`);
      return res.sendStatus(200); // Return 200 to prevent webhook disabling
    }

    const clientId = client.id;

    // 2. Call orchestrator
    const result = await orchestrator(text, text, clientId);
    const formattedResponse = formatResponse(result.message);

    // 3. Send the response back using the client-specific token
    await sendWhatsAppMessage(from, formattedResponse, client.whatsappAccessToken, phoneNumberId);

    res.sendStatus(200);
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      console.error("Error processing WhatsApp message:", error.response?.data || error.message);
    } else if (error instanceof Error) {
      console.error("Error processing WhatsApp message:", error.message);
    } else {
      console.error("Error processing WhatsApp message:", "An unknown error occurred.");
    }
    res.sendStatus(200); // Always return 200 to Meta
  }
});

// Helper function to send messages via WhatsApp Cloud API using client-specific credentials
async function sendWhatsAppMessage(to: string, message: string, accessToken: string, fromPhoneNumberId: string) {
  try {
    await axios.post(
      `https://graph.facebook.com/v19.0/${fromPhoneNumberId}/messages`,
      {
        messaging_product: "whatsapp",
        to: to,
        type: "text",
        text: { body: message },
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log(`Message sent to ${to}`);
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      console.error("Error sending WhatsApp message:", error.response?.data || error.message);
    } else if (error instanceof Error) {
      console.error("Error sending WhatsApp message:", error.message);
    } else {
      console.error("Error sending WhatsApp message:", "An unknown error occurred.");
    }
  }
}

export { whatsappRouter };