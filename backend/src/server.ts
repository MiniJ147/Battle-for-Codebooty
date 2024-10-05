import express from 'express';
import http from "http"
import { WebSocket, WebSocketServer } from "ws";

const app = express();
const server = http.createServer(app);

// type Event = {
//   status: string
// }

// const wss = new WebSocketServer({ server });
// wss.on("connection", (ws: WebSocket) => {
//   console.log("new client connection");

//   ws.on("message", (message) => {
//     try {
//       console.log(JSON.parse(message.toString()))
//     } catch (e) {
//       console.log(e);
//     }
//   })
// })

import actionRouter from './routes/actions.js';
app.use("/api/actions",actionRouter);

import matchRouter from './routes/match.js';
app.use("/api/match",matchRouter);

import problemRouter from './routes/problem.js';
app.use("/api/problem",problemRouter);

import verifyRouter from './routes/verify.js';
app.use("/api/verify",verifyRouter);


app.get('/', (req, res) => {
  res.send({
    "status": "alive"
  })
})

server.listen(3002, () => {
  console.log("listing on port 3002")
});
