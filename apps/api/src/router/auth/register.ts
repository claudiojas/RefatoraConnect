import { Router, Request, Response } from "express";
import { prisma } from "../../DB/prisma.config";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const registerRouter = Router();
const JWT_SECRET = process.env.JWT_SECRET || "supersecretjwtkey";

/**
 * @openapi
 * /auth/register:
 *   post:
 *     summary: Registra um novo usuário e um novo cliente (tenant)
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RegisterPayload'
 *     responses:
 *       '201':
 *         description: Usuário registrado com sucesso.
 *       '400':
 *         description: Dados inválidos.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       '409':
 *         description: E-mail já cadastrado.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
registerRouter.post("/", async (req: Request, res: Response) => {
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

    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
      maxAge: 3600000, // 1 hour
    });

    res.status(201).json({ message: "User registered successfully." });
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export { registerRouter };
