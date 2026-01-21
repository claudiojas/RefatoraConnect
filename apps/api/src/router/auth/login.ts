import { Router, Request, Response } from "express";
import { prisma } from "../../DB/prisma.config";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const loginRouter = Router();
const JWT_SECRET = process.env.JWT_SECRET || "supersecretjwtkey";

/**
 * @openapi
 * /auth/login:
 *   post:
 *     summary: Autentica um usuário e retorna um token
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LoginPayload'
 *     responses:
 *       '200':
 *         description: Login bem-sucedido. O token é enviado em um cookie HttpOnly e os dados do usuário são retornados no corpo.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       '400':
 *         description: Dados inválidos.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       '401':
 *         description: Credenciais inválidas.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
loginRouter.post("/", async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required." });
  }

  try {
    const user = await prisma.user.findUnique({ 
      where: { email },
      include: { client: true }
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

    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
      maxAge: 3600000, // 1 hour
    });

    const { password: _, ...userWithoutPassword } = user;
    res.status(200).json(userWithoutPassword);

  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export { loginRouter };
