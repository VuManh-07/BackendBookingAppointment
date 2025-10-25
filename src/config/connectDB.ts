'use strict'
require("dotenv").config()
import { Sequelize } from "sequelize";

const sequelize = new Sequelize(`${process.env.MYSQL_DATABASE}`, `${process.env.MYSQL_USERNAME}`, `${process.env.MYSQL_PASSWORD}`, {
    host: `${process.env.MYSQL_HOST}`,
    port: Number(process.env.MYSQL_PORT) || 33006,
    dialect: "mysql"
})

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the DB: ", error);
    }
}

export default connectDB;