import { Match } from "./match.js";

export class MatchManager {
  private matches: Map<string, Match>
  constructor() {
    this.matches = new Map<string, Match>();
  }

  // returns match key
  public createMatch(): string {
    return this.generateValidCode()
  }

  private isCodeValid(code: string): boolean {
    this.matches.forEach((val, key) => {
      if (val.code == code) {
        return false
      }
    });

    return true;
  }

  private generateValidCode(): string {
    const cap = 10;
    for (let i = 0; i < cap; i++) {
      let code = Math.random().toString(36).substring(2, 7);
      if (this.isCodeValid(code)){
        return code;
      }
    }

    throw "could not generate valid code"
  }
}