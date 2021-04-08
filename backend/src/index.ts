import http from "http";
import express from "express";
import cors from "cors";
import { Server } from "colyseus";
import { monitor } from "@colyseus/monitor";
import { GameRoom } from "./rooms/GameRoom/GameRoom";
import { clientStartGameData } from "./cards";
import basicAuth from "express-basic-auth";
import servers from "./servers";

require("dotenv").config();

const port = Number(process.env.PORT || 2567);
const host = String(process.env.HOST || "0.0.0.0");
const app = express()

app.use(cors({
  origin: '*',
  methods: 'POST, GET, OPTIONS',
  allowedHeaders: 'Content-Type'
}))
app.use(express.json())

const server = http.createServer(app);
const gameServer = new Server({
  server,
});

gameServer.define('game', GameRoom)

// register colyseus monitor AFTER registering your room handlers
const basicAuthMiddleware = basicAuth({
  // list of users and passwords
  users: {
    "admin": process.env.ADMIN_PASS,
  },
  // sends WWW-Authenticate header, which will prompt the user to fill
  // credentials in
  challenge: true
});
app.use("/colyseus", basicAuthMiddleware, monitor());

app.get('/getCards', function (req, res) {
  res.send(clientStartGameData)
})

app.get('/getServerList', function (req, res) {
  res.send(servers)
})

gameServer.listen(port, host);
console.log(`Listening on ws://localhost:${port}`)
