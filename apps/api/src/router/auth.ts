import { Router } from "express";
import { loginRouter } from "./auth/login";
import { registerRouter } from "./auth/register";
import { meRouter } from "./auth/me";
import { logoutRouter } from "./auth/logout";
import { metaConfigRouter } from "./auth/meta-config";
import { whatsappCallbackRouter } from "./auth/whatsapp-callback";

const authRouter = Router();

authRouter.use("/login", loginRouter);
authRouter.use("/register", registerRouter);
authRouter.use("/me", meRouter);
authRouter.use("/logout", logoutRouter);
authRouter.use("/meta-config", metaConfigRouter);
authRouter.use("/whatsapp/callback", whatsappCallbackRouter);

export { authRouter };
