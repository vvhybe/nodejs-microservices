require("dotenv").config()
const express = require("express");
const proxy = require("express-http-proxy");

const consoleMiddleware = require("./middlewares")

const router = express();

// middlewares
router.use(express.json())
router.use(express.urlencoded({extended: false}));
router.use(consoleMiddleware);

router.listen(PORT, ()=> console.log("=> [ROUTER] is running on port", process.env.MICRO_PORT));
connect(process.env.MONGODB_DB_NAME, process.env.MONGODB_DB_URL);

// forwrod the url to the right microservice using proxy
router.use("/auth", proxy(process.env.MICRO_AUTH_URL));
router.use("/command", proxy(process.env.MICRO_COMMAND_URL));
router.use("/product", proxy(process.env.MICRO_PRODUCT_URL));