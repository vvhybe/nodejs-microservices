require("dotenv").config()
const express = require("express");
const connect = require("./db/connection");
const addRoute = require("./routes/add");

const consoleMiddleware = require("./middlewares")

const microservice = express();

// middlewares
microservice.use(express.json())
microservice.use(express.urlencoded({extended: false}));
microservice.use(consoleMiddleware);

microservice.listen(PORT, ()=> console.log("=> Microservice [COMMAND] is running on port", process.env.MICRO_PORT));
connect(process.env.MONGODB_DB_NAME, process.env.MONGODB_DB_URL);

//routes
microservice.post("/add", addRoute);