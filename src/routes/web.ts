import express, { Express, Request, Response } from 'express';

let router = express.Router();

let initWebRouter = (app: Express) => {
    router.get("/", (req: Request, res: Response) => {
        res.render("HomePage.ejs")
    })


    return app.use("/", router)
}

export default initWebRouter;