import { MatchManager } from "./matches/exporter.js";
import problemDataJSON from "../data/leetcode_data.json" assert {type: "json"};
import { WebSocketServer } from "ws";

export interface JSONProblem{
    id : number
    title : string
    titleSlug: string;
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
  cache: JSONProblem[];
}

const matchManger = new MatchManager();
const problemData: JSONProblem[] = (problemDataJSON as ProblemDataJSON).cache;

export default { 
    matchManger: matchManger,
    problemData: problemData,
    wss: new WebSocketServer({noServer:true}),
}