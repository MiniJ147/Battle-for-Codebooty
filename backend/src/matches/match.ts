import { WebSocket } from "ws"
import globals from '../global.js'

enum MatchState {
  Empty
}

export class Match {
  public matchCode: string
  public state: MatchState
  public users: Map<string, User>
  public results: Results
  public hostUsername: string

 

  constructor(matchCode: string, hostUsername) {
    this.matchCode = matchCode;
    this.users = new Map<string, User>();
    this.state = MatchState.Empty;

    this.hostUsername = hostUsername;

    console.log("creating");
  }

  // problem things

  public newProblem(): Problem {
    
    return undefined
  }

  public getProblem(): Problem {
    return undefined;
  }


  //user things
  
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

class ProblemQuerier {
  private currProblem: Problem
  private currElo : number
  private eloBuf : number
  private eloInc: number

  private perviousProblemIds : number[]

  constructor(startElo : number, eloBuf : number, eloInc : number){
    this.currElo = startElo
    this.eloBuf = eloBuf;
    this.eloInc = eloInc;

    this.perviousProblemIds = [];
  }


  public newProblem(): Problem {
    const newProblem = this.fetchProblem();
    
    // general edge case that I don't have time fixing
    // it should never happen tho
    if(!newProblem){
      return this.currProblem;
    }

    // this.perviousProblemIds.push(this.currProblem.id)
    
    this.currElo+=this.eloInc;
    this.currProblem = newProblem;
    return newProblem;
  }

  public getCurrentProblem(): Problem{
    return this.currProblem;
  }

  private fetchProblem(): Problem{
    globals.problemData.forEach((val,idx)=>{
      const rating = val.rating;
      
      const inRange = rating-this.eloBuf<=this.currElo && rating+this.eloBuf>=this.currElo;
      const notUsed = true //!this.perviousProblemIds.includes(val.id);

      if(inRange && notUsed){
        return val;
      }
    })
  
    return undefined;
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