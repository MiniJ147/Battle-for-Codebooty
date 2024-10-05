import express from "express";
const router = express.Router();
import globals from "../global.js";
import {jwtDecode} from "jwt-decode";
import { User } from "../matches/match.js";

router.post("/create",(req,res)=>{
    try{
        const sessionToken = req.headers["session"] as string;
        if(!sessionToken){
            res.status(401).send("invalid");
            return;
        }

        const values = jwtDecode(sessionToken) as any;
        const newMatch = globals.matchManger.createMatch(new User(undefined,values.username,true));
        
        res.send({matchCode:newMatch.matchCode})
    }catch(e){
        console.log(e);
        res.status(400).send({error:e});
        return;
    }
})

router.post("/:matchCode/join",(req,res)=>{
    try{
        const data = jwtDecode(req.cookies.LEETCODE_SESSION) as any;
        const match = globals.matchManger.getMatch(req.params.matchCode);

        const userData = match.addUser(new User(undefined,data.username,false));
        if (userData.kicked){
            res.status(401).send({status:"you have been kicked"})
            return;
        }

        console.log(match);
        res.send({status:"joined"});
        return;
    }catch(e){
        console.log(e);
        res.status(400).send({error:"match does not exists"})
        return;
    }
})

export default router;