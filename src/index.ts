require("dotenv").config();
import express from "express";
import bodyParser from "body-parser";
import viewEngine from './config/viewEngine';
import initWebRoutes from './routes/web';

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
initWebRoutes(app);

let port = process.env.PORT || 3031;
app.listen(port, () => {
    console.log("Server run with port: ", port)
})