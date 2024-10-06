import express from 'express';
import http from "http"
import { WebSocket, WebSocketServer } from "ws";
import VerifyAuth from './middleware/auth.js';
import globals from './global.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();
app.use(cors(),cookieParser());

const server = http.createServer(app);
globals.wss = new WebSocketServer({server});
globals.wss.on("connection",(ws,req)=>{
  handleWebSocket(ws,req,{
    matchManager: globals.matchManger
  });
});

import actionRouter from './routes/actions.js';
app.use("/api/actions",VerifyAuth,actionRouter);

import matchRouter from './routes/match.js';
app.use("/api/match",VerifyAuth,matchRouter);

import problemRouter from './routes/problem.js';
app.use("/api/problem",VerifyAuth,problemRouter);

import verifyRouter from './routes/verify.js';
import handleWebSocket from './routes/websocket.js';
app.use("/api/verify",verifyRouter);


app.get('/', (req, res) => {
  res.send({
    "status": "alive"
  })
})

// globals.matchManger.runLifetime();

server.listen(3002, () => {
  console.log("listing on port 3002")
});


