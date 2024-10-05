import { MatchManager } from "./matches/exporter.js";
import problemDataJSON from "../data/leetcode_data.json" assert {type: "json"};
import { WebSocketServer } from "ws";

interface Problem{
    titeSlug: string;
    rating: number;
    topics: string[];
    created: number;
    content: string;
    exampleTestcases: string[];
    codeSnippets: {
        lang: string;
        langSlug: string;
        code: string;
    }[];
}

interface ProblemDataJSON {
  cache: Problem[];
}

const matchManger = new MatchManager();
const problemData: Problem[] = (problemDataJSON as ProblemDataJSON).cache;

export default { 
    matchManger: matchManger,
    problemData: problemData,
    wss: new WebSocketServer({noServer:true}),
}