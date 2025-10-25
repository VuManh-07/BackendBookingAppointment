import express, { Express, Request, Response } from 'express';

let router = express.Router();

let initWebRouter = (app: Express) => {
    router.get("/", (req: Request, res: Response) => {
        return res.send("Hello world!")
    })


    return app.use("/", router)
}

export default initWebRouter;