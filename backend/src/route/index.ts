import * as core from "express-serve-static-core";
import { health } from "./health";

export const RegisterRoutes = (app: core.Express) =>
{
    app.use("/api/v1", health);
};
