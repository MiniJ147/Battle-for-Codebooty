function generateCode() {
    let cap = 10;
    while (cap > 0) {
        let code = Math.random().toString(36).substring(2, 7);
        console.log(code);
        cap--;
    }
}
export class Lobby {
    test;
    constructor() {
        this.test = "test";
        generateCode();
    }
}
//# sourceMappingURL=lobby.js.map