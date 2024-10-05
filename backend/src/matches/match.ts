import { WebSocket } from "ws"

export class Match {
  public code: string
  public users: Map<string, User>
  public problem: Problem
  public results: Results 

  constructor(code: string) {
    this.code = code;
    this.users = new Map<string, User>();
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
  id : number,
}

export type Results = {
  time : number
}