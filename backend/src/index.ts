import * as express from "express";
import { RegisterRoutes } from "./route";

const app = express();

RegisterRoutes(app);

app.listen(3080, () =>
{
    console.log("Listening on 3000");
});
