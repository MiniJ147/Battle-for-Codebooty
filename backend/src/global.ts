import { MatchManager } from "./matches/exporter.js";
import problemData from "../data/leetcode_data.json" assert {type: "json"};
import { WebSocketServer } from "ws";
const matchManger = new MatchManager()


export default { 
    matchManger: matchManger,
    problemData: problemData,
    wss: new WebSocketServer({noServer:true}),
}