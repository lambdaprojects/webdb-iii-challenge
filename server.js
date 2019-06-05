const express = require("express");
const cohortRouter = require("./data/routers/cohortRouter.js");

const server = express();
server.use(express.json());

server.get("/", (req, res) => {
  res.send(`<h3>You have reached the default page of API Server</h3>`);
});

server.use("/api/cohorts", cohortRouter);
module.exports = server;
