import { Match, User } from "./match.js";

export class MatchManager {
  private matches: Map<string, Match>
  
  constructor() {
    this.matches = new Map<string, Match>();
  }

  // throws error if match does not exists
  public getMatch(matchCode : string) : Match {
    return this.matches[matchCode]
  }

  // returns success state
  public createMatch(hostName: string): Match {
    // this.matches.forEach((match,key)=>{
    //   if(match.hostUsername==hostName){
    //     throw "user has already created match"
    //   }
    // });

    let matchCode = this.generateValidCode();
    this.matches[matchCode] = new Match(matchCode,hostName);

    return this.matches[matchCode];
  }

  //helper function
  private generateValidCode(): string {
    const cap = 10;
    for (let i = 0; i < cap; i++) {
      let code = Math.random().toString(36).substring(2, 7);
      if (!this.matches.has(code)){
        return code;
      }
    }

    throw "could not generate valid code"
  }
}