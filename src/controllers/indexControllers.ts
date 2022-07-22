import { Request, Response } from "express";

class IndexControllers {
    public index(req: Request, res: Response) {
        res.json({ text: "API Is /api/empleados" });
    }
}

export const indexControllers = new IndexControllers();
