import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import { postRouter } from './router/POST';
import { clientRouter } from "./router/client";
import { authRouter } from "./router/auth";
import { whatsappRouter } from "./router/whatsapp";

dotenv.config();

const app = express();

app.use(cors({ 
  origin: process.env.CORS_ORIGIN || "http://localhost:5173", 
  credentials: true 
}));
app.use(express.json());
app.use(cookieParser());
app.use(postRouter);
app.use("/client", clientRouter);
app.use("/auth", authRouter);
app.use("/webhook", whatsappRouter);

export default app;