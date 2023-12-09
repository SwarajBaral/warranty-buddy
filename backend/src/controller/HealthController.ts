import { Request, Response } from "express";

class HealthController
{
    public GetHealth(req: Request, res: Response)
    {
        const date = new Date();
        res.json({
            health: "Ok",
            datetime: date.toLocaleString(),
        });
    }
}

export const healthController = new HealthController();
