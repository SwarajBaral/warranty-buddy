import * as core from "express-serve-static-core";
import { health } from "./health";
import { userRoutes } from "./user";

export const RegisterRoutes = (app: core.Express) =>
{
    app.use("/api/v1", health);
    app.use("/api/v1", userRoutes);
};
