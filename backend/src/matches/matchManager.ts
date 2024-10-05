import { Match } from "./match.js";

export class MatchManager {
  private matches: Map<string, Match>
  
  constructor() {
    this.matches = new Map<string, Match>();
  }

  public getMatch(matchCode : string) : Match {
    return this.matches.get(matchCode);
  }

  // returns success state
  public createMatch(): boolean {
    try{
      let matchCode = this.generateValidCode();
      this.matches[matchCode] = new Match(matchCode);
    }catch(e){
      return false;
    }

    return true;
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