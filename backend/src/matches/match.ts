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

  private emptyCnt: number;
  private host: User;

  constructor(matchCode: string, host : User) {
    this.matchCode = matchCode;
    this.users = new Map<string, User>();
    this.state = MatchState.Empty;

    this.users.set(host.username,host);
    this.host=host;
    this.emptyCnt=0;

    console.log(globals.problemData);
    console.log("creating");
  }

  // public shouldKill(lifetimeCap : number): boolean {
  //   this.users.forEach((user,key)=>{
  //     console.log("looping");
  //     if(user.ws || user.ws.OPEN || user.ws.CONNECTING){
  //       this.emptyCnt=0;
  //       console.log("alive",user.ws);
  //       return false;
  //     }
  //   })

  //   console.log(this.emptyCnt);
  //   this.emptyCnt++;
  //   return this.emptyCnt >= lifetimeCap;
  // }

  public newProblem(): Problem {
    return undefined
  }

  public getUser(username : string){
    return this.users[username];
  }

  public getHost() : User {
    return this.host;
  }

  public addUser(user: User): User {
    if (!this.hasUser(user.username)) {
      this.users.set(user.username, user);
    }

    return this.users[user.username];
  }

  public hasUser(username: string): boolean {
    return this.users.has(username);
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