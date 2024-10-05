export class Match {
    code;
    users;
    problem;
    results;
    constructor(code) {
        this.code = code;
        this.users = new Map();
    }
    addUser(user) {
        if (this.users.has(user.username)) {
            return false;
        }
        this.users.set(user.username, user);
        return true;
    }
}
export class User {
    username;
    ws;
    constructor(ws, username) {
        this.ws = ws;
        this.username = username;
    }
}
//# sourceMappingURL=match.js.map