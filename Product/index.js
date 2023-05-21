require("dotenv").config()
const express = require("express");
const connect = require("./db/connection");
const addRoute = require("./routes/add");
const buyRoute = require("./routes/buy");

const consoleMiddleware = require("./middlewares");

const microservice = express();

// middllewres
microservice.use(express.json());
microservice.use(express.urlencoded({extended: false}));
microservice.use(consoleMiddleware);

microservice.listen(PORT, ()=> console.log("=> Microservice [PRODUCT] is running on port", process.env.MICRO_PORT));
connect(process.env.MONGODB_DB_NAME, process.env.MONGODB_DB_URL);

//routes
microservice.post("/add", addRoute);
microservice.get("/buy", buyRoute);