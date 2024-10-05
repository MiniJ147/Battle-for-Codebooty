import { Match } from "./match.js";
export class MatchManager {
    matches;
    constructor() {
        this.matches = new Map();
    }
    getMatch(matchCode) {
        return this.matches.get(matchCode);
    }
    // returns success state
    createMatch() {
        try {
            let matchCode = this.generateValidCode();
            this.matches[matchCode] = new Match(matchCode);
        }
        catch (e) {
            return false;
        }
        return true;
    }
    //helper function
    generateValidCode() {
        const cap = 10;
        for (let i = 0; i < cap; i++) {
            let code = Math.random().toString(36).substring(2, 7);
            if (!this.matches.has(code)) {
                return code;
            }
        }
        throw "could not generate valid code";
    }
}
//# sourceMappingURL=matchManager.js.map