import { Router, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import axios from 'axios'; // Importação corrigida

const authRouter = Router();
const prisma = new PrismaClient();

const JWT_SECRET = process.env.JWT_SECRET || "supersecretjwtkey";

// POST /auth/register - Register a new user and create a client
authRouter.post("/register", async (req: Request, res: Response) => {
  const { name, email, password, companyName } = req.body;

  if (!name || !email || !password || !companyName) {
    return res.status(400).json({ error: "Name, email, password, and companyName are required." });
  }

  try {
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(409).json({ error: "Email already registered." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newClient = await prisma.client.create({
      data: {
        name: companyName,
        companyName,
        email: `client-${email}`,
      },
    });

    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        clientId: newClient.id,
        role: "admin",
      },
    });

    const token = jwt.sign(
      { userId: newUser.id, clientId: newClient.id, role: newUser.role },
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    // Em desenvolvimento local (HTTP), pode ser necessário usar: secure: false, sameSite: 'lax'
    // Em produção (HTTPS), o ideal é: secure: true, sameSite: 'strict'
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 3600000, // 1 hour
    });

    res.status(201).json({ message: "User registered successfully." });
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    await prisma.$disconnect();
  }
});

// POST /auth/login - Authenticate a user
authRouter.post("/login", async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required." });
  }

  try {
    const user = await prisma.user.findUnique({ 
      where: { email },
      include: { client: true } // Inclui os dados do cliente
    });
    if (!user) {
      return res.status(401).json({ error: "Invalid credentials." });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid credentials." });
    }

    const token = jwt.sign(
      { userId: user.id, clientId: user.clientId, role: user.role },
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    // Set token in an HttpOnly cookie
    // Em desenvolvimento local (HTTP), use: secure: false, sameSite: 'lax'
    // Em produção (HTTPS), use: secure: true, sameSite: 'strict'
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 3600000, // 1 hour
    });

    // Return user data (without password) to the frontend
    const { password: _, ...userWithoutPassword } = user;
    res.status(200).json(userWithoutPassword);

  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    await prisma.$disconnect();
  }
});

// GET /auth/me - Get the current logged-in user
authRouter.get("/me", async (req: Request, res: Response) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ error: "Not authenticated" });
  }

  try {
    const payload = jwt.verify(token, JWT_SECRET) as { userId: string };
    const user = await prisma.user.findUnique({
      where: { id: payload.userId },
      include: { client: true }, // Inclui os dados do cliente
    });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const { password: _, ...userWithoutPassword } = user;
    res.status(200).json(userWithoutPassword);
  } catch (error) {
    res.status(401).json({ error: "Invalid or expired token" });
  } finally {
    await prisma.$disconnect();
  }
});

// POST /auth/logout
authRouter.post("/logout", (req: Request, res: Response) => {
  res.clearCookie('token');
  res.status(200).json({ message: "Logged out successfully." });
});


// POST /auth/whatsapp/callback - Handle WhatsApp Embedded Signup callback
authRouter.post("/whatsapp/callback", async (req: Request, res: Response) => {
  const { code, clientId } = req.body; // clientId should be sent from the frontend

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

    const businessId = debugTokenResponse.data.data.granular_scopes.find(scope => scope.scope === 'whatsapp_business_management').target_ids[0];

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

  } catch (error) {
    console.error("Error during WhatsApp callback:", error.response?.data || error.message);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    await prisma.$disconnect();
  }
});

export { authRouter };