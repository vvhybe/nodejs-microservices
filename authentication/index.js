require("dotenv").config()
const express = require("express");
const connect = require("./db/connection");
const loginRoute = require("./routes/login");
const registerRoute = require("./routes/register");

const consoleMiddleware = require("./middlewares");

const microservice = express();

// middlewares
microservice.use(express.json());
microservice.use(express.urlencoded({extended: false}));
microservice.use(consoleMiddleware);

microservice.listen(PORT, ()=> console.log("=> Microservice [AUTH] is running on port", process.env.MICRO_PORT));
connect(process.env.MONGODB_DB_NAME, process.env.MONGODB_DB_URL);

//routes
microservice.post("/login", loginRoute);
microservice.post("/register", registerRoute);
