export class MatchManager {
    matches;
    constructor() {
        this.matches = new Map();
    }
    // returns match key
    createMatch() {
        return this.generateValidCode();
    }
    isCodeValid(code) {
        this.matches.forEach((val, key) => {
            if (val.code == code) {
                return false;
            }
        });
        return true;
    }
    generateValidCode() {
        const cap = 10;
        for (let i = 0; i < cap; i++) {
            let code = Math.random().toString(36).substring(2, 7);
            if (this.isCodeValid(code)) {
                return code;
            }
        }
        throw "could not generate valid code";
    }
}
//# sourceMappingURL=matchManager.js.map