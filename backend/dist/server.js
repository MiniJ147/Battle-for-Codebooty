import { MatchManager } from "./matches/exporter.js";
import express from 'express';
import http from "http";
import { WebSocketServer } from "ws";
const app = express();
const server = http.createServer(app);
const manager = new MatchManager();
const wss = new WebSocketServer({ server });
wss.on("connection", (ws) => {
    console.log("new client connection");
    ws.on("message", (message) => {
        try {
            console.log(JSON.parse(message.toString()));
        }
        catch (e) {
            console.log(e);
        }
    });
});
app.get('/', (req, res) => {
    res.send({
        "status": "alive"
    });
});
server.listen(3002, () => {
    console.log("listing on port 3002");
});
//# sourceMappingURL=server.js.map