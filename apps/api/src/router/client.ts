import { Router } from "express";
import { createClientRouter } from "./client/create";
import { addConfigRouter } from "./client/addConfig";
import { updateConfigRouter } from "./client/updateConfig";
import { deleteConfigRouter } from "./client/deleteConfig";
import { completeOnboardingRouter } from "./client/completeOnboarding";

const clientRouter = Router();

clientRouter.use("/", createClientRouter); // Handles POST /client
clientRouter.use("/:clientId/config/:agentType", addConfigRouter); // Handles POST /client/:clientId/config/:agentType
clientRouter.use("/:clientId/config/:agentType/:configId", updateConfigRouter); // Handles PUT /client/:clientId/config/:agentType/:configId
clientRouter.use("/:clientId/config/:agentType/:configId", deleteConfigRouter); // Handles DELETE /client/:clientId/config/:agentType/:configId
clientRouter.use("/:clientId/complete-onboarding", completeOnboardingRouter); // Handles POST /client/:clientId/complete-onboarding

export { clientRouter };
