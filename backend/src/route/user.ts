import * as express from "express";
import { userController } from "../controller/UserController";

const router = express.Router();

router.get("/user/warranty-list", userController.GetWarrantyList);

export const userRoutes = router;
