import { WebSocket } from "ws";
import url from 'url';
import { jwtDecode } from "jwt-decode";
import http from "http";
import { User } from "../matches/match.js";
import { MatchManager } from "../matches/matchManager.js";

interface Message {
  type: string;
  data: any;
}

function getTokens(req: http.IncomingMessage): {
  session: string;
  csrf: string;
} {
  let cookies = new Map<string,string>();
  try {
    const parsed = req.headers.cookie.split(";");

    parsed.forEach((value) => {
      const valueParsed = value.split("=");
      cookies[valueParsed[0].trim()] = valueParsed[1].trim();
    });

    // validates cookie
    jwtDecode(cookies["LEETCODE_SESSION"]);
  } catch (e) {
    return {session:undefined,csrf:undefined}
  }

  return { session: cookies["LEETCODE_SESSION"], csrf: cookies["CSRF_TOKEN"]};
}

function connectToMatch(ws : WebSocket, sessionToken : string, matchCode : string, matchManager : MatchManager) : boolean {
    try{
        const data = jwtDecode(sessionToken) as any;
        const match = matchManager.getMatch(matchCode);
        if(!match){
          throw "match does not exists";
        }
        console.log(match);

        const userData = match.addUser(new User(ws,data.username,false));
    }catch(e){
        console.log(e);
        return false;
    }

    return true;
}

// handles incoming connection
function handleWebSocket(ws: WebSocket, req: http.IncomingMessage, config: {matchManager : MatchManager}) {
  console.log("incoming connection");
  
  const parsedUrl = url.parse(req.url,true);
  const matchCode = parsedUrl.query.matchCode as string;

  const tokens = getTokens(req);
  
  if(!tokens.csrf || !tokens.session || !matchCode){
    console.log("closing connection");
    ws.close(1008,"tokens are invalid or matchCode was not provided");
    return;
  }

  const connected = connectToMatch(ws,tokens.session,matchCode,config.matchManager)
  if(!connected){
    console.log("failed to connect to match");
    ws.close(1008,"failed to connect to match");
    return;
  }

  ws.on("message", (data) => {
    const message: Message = JSON.parse(data.toString());

    ws.send(message.type);
  });
}

export default handleWebSocket;
