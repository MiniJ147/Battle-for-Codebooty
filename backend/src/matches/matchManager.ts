import { Match, User } from "./match.js";

export class MatchManager {
  private matches: Map<string, Match>
  
  constructor() {
    this.matches = new Map<string, Match>();
  }

  // throws error if match does not exists
  public getMatch(matchCode : string) : Match {
    const result = this.matches[matchCode];
    if (!result){
      throw "match does not exists"
    }
    
    return result;
  }

  // returns success state
  public createMatch(host : User): Match {
    let matchCode = this.generateValidCode();
    this.matches[matchCode] = new Match(matchCode,host);

    return this.matches[matchCode];
  }

  // public async runLifetime(){
  //   console.log(new Date().getTime()/1000, "running lifetime check",this.matches);
  //   this.matches.forEach((match,key)=>{
  //     if(match.shouldKill(5)){
  //       this.matches.delete(match.matchCode);
  //     }
  //   })

  //   setTimeout(this.runLifetime.bind(this),1000)
  // }

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