import { WebSocket } from "ws"
import globals from '../global.js'

enum MatchState {
  Empty
}

export class Match {
  public matchCode: string
  public state: MatchState
  public users: Map<string, User>
  public problem: Problem
  public results: Results
  public hostUsername: string

  constructor(matchCode: string, hostUsername) {
    this.matchCode = matchCode;
    this.users = new Map<string, User>();
    this.state = MatchState.Empty;

    this.hostUsername = hostUsername;

    console.log("creating");
  }

  public newProblem(): Problem {
    return undefined
  }

  public getUser(username : string): User{
    return this.users[username];
  }

  public addUser(user: User): User {
    console.log("attempting to add user",this.users);
    if(this.hasUser(user.username)){
      return this.getUser(user.username);
    }

    this.users[user.username] = user;
    return user;
  }

  public hasUser(username: string): boolean {
    return this.users[username]!=undefined;
  }
}

export class User {
  public username: string
  public ws: WebSocket
  public kicked: boolean
  private host: boolean

  constructor(ws: WebSocket, username: string, isHost: boolean) {
    this.ws = ws;
    this.username = username;
    this.host = isHost;
    this.kicked = false;
  }

  public isHost(): boolean {
    return this.host;
  }
}

export type Problem = {
  id: number,
  titleSlug: string,
  description: string,
  templates: Map<string, string>,
  sampleCases: string
}

export type Results = {
  time: number
}