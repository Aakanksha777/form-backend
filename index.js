const express = require ("express");
const cors = require("cors");
const bodyParser = require("body-parser")
const mongoose = require("mongoose");
require("./db")
const router = require("./router/router")

const server = express();

//middleware
server.use(cors());
server.use(bodyParser.json());
server.use("/api/v1" , router)


server.listen(8080, () =>{
    console.log("server started")
})