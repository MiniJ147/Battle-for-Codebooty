# Welcome to battle-for-codebooty

## Backend

### Rest
```js
//matches 

POST /api/match/create
Header: {
    session:leetcode_session,
}

Response: {
    "matchCode": "string"
}


/*
this talks in reference to the user
are they activily in this session
*/
GET /api/match/{code}/exists
Response: {
    "exists": "boolean"
}
Header: {
    session:leetcode_session,
}


POST /api/match/{code}/join
Headers: {
    session:leetcode_session,
}

Response: {
    "joined":"boolean",
    "token":"string"
}

// actions

POST /api/action/spyglass
Body: {
    "target":"string",
}
Header: {
    "auth":"token"
}

Response: {
    "code":"string"
}

POST /api/action/cannon
Body: {
    "target":"string",
    "line":"number",
}
Header: {
    "auth":"token"
}

Response: {
    "valid": boolean,
}

POST /api/action/raid
Body: {
    "target":string,
    "line": number,
}
Header: {
    "auth":"token"
}

Response: {
    "code":"string"
}

// verfication

/*
Description:
if response is successful you will be able to connect to websocket via AUTH:Username
*/

GET /api/verify/link
Response: {
    "redirect":"string" // auth redirect link
}

GET /api/verify
/*
Description:
This will be hit by the leetcode authenication api  
this will be used to sumbit and run problems  
We are to set the cookie for the CSRF-token and Session Token given from leetcode
*/ 

// submissions
POST /api/problem/run
Body: {
    problemid: number,
    language: string,
    code: string,
    testcase: string
}
headers: {
    csrf:crsf_token_val,
    session:session_token_val,
}

Response:{
    leetcodes_objection
}

POST /api/problem/submit
Body: {
    problemid: number,
    language: string,
    code: string,
}
headers: {
    csrf:crsf_token_val,
    session:session_token_val,
}

Response:{
    leetcodes_objection
}

// errors

Errors:
Response: {
    "errors": ["string"]
}
```

### Websockets
```js
Sending Object: {
    "mode":"string", // given mode 
    "data": { //provding the accourding data object
    }
}

// client websocket modes 

//attempts to make connection to match, but if its invalid it will terminate the socket
Connect: {
    "mode":"connect",
    "data":{
        "token":"string"
    }
}

// server responses

MatchState: {
    "state": 
    //all match data which is unkown right now
}


```