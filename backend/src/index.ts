import http from "http";
import express from "express";
import cors from "cors";
import { Server } from "colyseus";
import { monitor } from "@colyseus/monitor";
import { GameRoom } from "./rooms/GameRoom/GameRoom";
import { clientData } from "./cards";

const port = Number(process.env.PORT || 2567);
const app = express()

app.use(cors({origin: '*',
              methods: 'POST, GET, OPTIONS',
              allowedHeaders: 'Content-Type'}))
app.use(express.json())

const server = http.createServer(app);
const gameServer = new Server({
  server,
});

gameServer.define('game', GameRoom)

// register colyseus monitor AFTER registering your room handlers
app.use("/colyseus", monitor());

app.get('/getCards', function (req, res) {
  res.send(clientData)
})

gameServer.listen(port, "dellfinnlin.fritz.box");
console.log(`Listening on ws://localhost:${ port }`)
