import * as express from "express";
import { healthController } from "../controller/HealthController";

const router = express.Router();

router.get("/health", healthController.GetHealth);

export const health = router;
