import { jwtDecode } from "jwt-decode";

export default function VerifyAuth(req, res, next) {
    try {
        const SESSION = req.headers["leetcode-session"];
        const CSRF_TOKEN = req.headers["csrf-token"];

       
        console.log(req.headers,SESSION,CSRF_TOKEN);
        if (SESSION && CSRF_TOKEN) {
            const decoded = jwtDecode(SESSION) as any;
            decoded.username;
            next();
            return;
        }
        throw "invalid cookie";
    } catch (e) {
        console.log("failed auth")
        res.clearCookie("LEETCODE_SESSION");
        res.clearCookie("CSRF_TOKEN");

        res.status(401).send({status:"auth cookies not set or are in invalid, please sign in again"});
    }
}