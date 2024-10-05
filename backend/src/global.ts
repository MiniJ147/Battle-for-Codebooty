import { MatchManager } from "./matches/exporter.js";
import problemData from "../data/leetcode_data.json" assert {type: "json"};
const matchManger = new MatchManager()


export default { 
    matchManger: matchManger,
    problemData: problemData,
}