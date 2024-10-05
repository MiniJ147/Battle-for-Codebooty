import { MatchManager, User } from "./matches/exporter.js";
import express from 'express';
import http from "http"
import { WebSocket, WebSocketServer } from "ws";

const app = express();
const server = http.createServer(app);
const manager = new MatchManager()

type Event = {
  status: string
}

const wss = new WebSocketServer({ server });
wss.on("connection", (ws: WebSocket) => {
  console.log("new client connection");

  ws.on("message", (message) => {
    try {
      console.log(JSON.parse(message.toString()))
    } catch (e) {
      console.log(e);
    }
  })
})

app.get('/', (req, res) => {
  res.send({
    "status": "alive"
  })
})

server.listen(3002, () => {
  console.log("listing on port 3002")
});
