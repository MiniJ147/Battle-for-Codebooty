import { WebSocket } from "ws"
import globals, { JSONProblem } from '../global.js'
import { title } from "process"

enum MatchState {
  Empty
}

export class Match {
  public matchCode: string
  public state: MatchState = MatchState.Empty
  public users: Map<string, User>
  public results: Results
  public hostUsername: string

  public inGracePeriod: boolean = true;

  public problemStates: ProblemState[] = []

  private queries: ProblemQuerier
  private problemCnt: number = 1;

  constructor(matchCode: string, hostUsername) {
    this.matchCode = matchCode;
    this.hostUsername = hostUsername;

    this.users = new Map<string, User>();
    this.queries = new ProblemQuerier(900, 200, 100);

    //removing lobby grace period after 1 minute 
    setTimeout(() => {
      console.log("grace period over");
      this.inGracePeriod = false;
    }, 60000);
    console.log("creating");
  }

  // problem things
  public newProblem() {
    this.problemCnt++;

    // clearing the solve times
    this.problemStates.forEach(v => {
      v.solveTime = -1;
    })

    this.queries.newProblem()
  }

  public getProblem(): Problem {
    return this.queries.getCurrentProblem();
  }

  //user things

  public getUser(username: string): User {
    return this.users[username];
  }

  // returns boolean if they are allowed to be added
  // if they are not it will be returned false
  public addUser(user: User): boolean {
    console.log("attempting to add user", this.users);
    const result = this.getUser(user.username);
    if(result){
      return !result.kicked;
    }

    this.users[user.username] = user;
    this.problemStates.push({ username: user.username, solveTime: -1 });
    return true;
  }

  public removeUser(username: string) {
    this.users.delete(username);
    this.problemStates = this.problemStates.filter(v => v.username != username);
  }

  public isEmpty(): boolean {
    return this.users.size == 0
  }

  public hasUser(username: string): boolean {
    return this.users[username] != undefined;
  }
}

// users
export class User {
  public username: string
  public ws: WebSocket
  public kicked: boolean

  private host: boolean

  constructor(ws: WebSocket, username: string, isHost: boolean) {
    this.ws = ws;
    this.username = username;
    this.host = isHost;
    this.kicked = false;
  }

  public isHost(): boolean {
    return this.host;
  }
}



// problem querier

class ProblemQuerier {
  private currProblem: Problem
  private currElo: number
  private eloBuf: number
  private eloInc: number

  private perviousProblemIds: number[]

  constructor(startElo: number, eloBuf: number, eloInc: number) {
    this.currElo = startElo
    this.eloBuf = eloBuf;
    this.eloInc = eloInc;

    this.perviousProblemIds = [];
    this.newProblem();
  }


  public newProblem() {
    console.log("fetching new problem,", this.currElo);
    const JSONProblem = this.fetchJSONProblem()
    // general edge case that I don't have time fixing
    // it should never happen tho
    if (!JSONProblem) {
      return;
    }
    const formated = this.formatJSONProblem(JSONProblem)
    if (!this.currProblem) {
      this.currProblem = formated;
      return;
    }

    this.perviousProblemIds.push(this.currProblem.id)

    this.currElo += this.eloInc;
    this.currProblem = formated;
  }

  public getCurrentProblem(): Problem {
    return this.currProblem;
  }

  private formatJSONProblem(problem: JSONProblem): Problem {
    let res: Problem = {
      id: problem.id,
      title: problem.title,
      titleSlug: problem.titleSlug,
      content: problem.content,
      sampleCases: problem.exampleTestcases.join("\n"),
      templates: new Map<string, string>()
    }

    // translating objects to map
    problem.codeSnippets.forEach((value) => {
      res.templates[value.langSlug] = value.code;
    })

    return res;
  }

  private fetchJSONProblem(): JSONProblem {
    for (let i = 0; i < globals.problemData.length; i++) {
      const val = globals.problemData[i];

      const rating = val.rating;
      const buf = this.eloBuf

      const inRange = rating - buf <= this.currElo && this.currElo <= rating + buf
      const notUsed = !this.perviousProblemIds.includes(val.id);

      console.log(val.title, inRange, notUsed);
      if (inRange && notUsed) {
        console.log("returning ", val)
        return val;
      }
    }

    console.log("couild not find a problem");
    return undefined;
  }
}

type ProblemState = {
  username: string
  solveTime: number
}

export type Problem = {
  id: number,
  title: string
  titleSlug: string,
  content: string,
  templates: Map<string, string>,
  sampleCases: string
}

export type Results = {
  time: number
}