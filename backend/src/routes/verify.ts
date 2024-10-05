import express from "express";
import {Request, Response} from "express";
const router = express.Router();

const auth = "https://leetcode.com/authorize-login/http/?path=localhost:3002/api/verify"

//GET /api/verify/link
router.get("/link", (req: Request, res: Response) => {
    res.json({ redirect: auth})
})

//GET /api/verify
router.get("/", (req: Request, res: Response) => {
    const cookieParam = req.query.cookie as string;
    if(!cookieParam){
        res.status(400).json({error:"invalid cookie"});
        return;
    }

    // const cookies = cookieParam.split(";").reduce((acc, cookie) => {
    //     const [key, value] = cookie.split("=");
    //     acc[key.trim()] = value ? value.trim() : "";
    //     return acc;
    // }, {} as Record<string, string>);

    "SESSION=val;CSRFTOKEN=val"
    const cookies = cookieParam.split(";");
    if (cookies.length!=2){
        res.status(400).json({error:"cookie needs to have 2 values"});
        return;
    }

    const session = cookies[0].split("=");
    const token = cookies[1].split("=");

    try{
        res.send({LEETCODE_SESSION:session[1],CSRF_TOKEN:token[1]})
    }catch(e){
        res.send({error:"token malformed failed to parse val at ="})
    }
});


export default router;


