# Welcome to battle-for-codebooty

## Backend

### Rest
```JSON
//matches 

POST /api/match/create
Body: {
    "username": "string" //host username
}

Response: {
    "matchCode": "string"
}


GET /api/match/{code}/exists
Response: {
    "exists": "boolean"
}


POST /api/match/{code}/join
Body: {
    "username": "string"
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
    "valid": "boolean",
}

POST /api/action/raid
Body: {
    "target"
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

// errors

Errors:
Response: {
    "errors": ["string"]
}
```

### Websockets
```json
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
    //all match data which is unkown right now
}


```