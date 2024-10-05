import { WebSocket } from "ws"
import globals from '../global.js'


export class Match {
  public matchCode: string
  public users: Map<string, User>
  public problem: Problem
  public results: Results 

  constructor(matchCode: string) {
    this.matchCode = matchCode;
    this.users = new Map<string, User>();
    console.log(globals.problemData);
    console.log("creating");
  }

  public newProblem() : Problem {
    
    return undefined
  }

  public addUser(user : User) : boolean {
    if(this.users.has(user.username)){
      return false;
    }
    
    this.users.set(user.username,user);
    return true;
  }
}

export class User {
  public username : string 
  public ws : WebSocket


  constructor(ws : WebSocket, username : string) {
    this.ws=ws;
    this.username=username;
  }
}

export type Problem = {
  id: number,
  titleSlug: string,
  description: string,
  templates: Map<string,string>,
  sampleCases: string
}

export type Results = {
  time : number
}