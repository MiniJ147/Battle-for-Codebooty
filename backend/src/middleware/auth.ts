import { jwtDecode } from "jwt-decode";

export default function VerifyAuth(req, res, next) {
    try {
        if (req.cookies.LEETCODE_SESSION && req.cookies.CSRF_TOKEN) {
            const decoded = jwtDecode(req.cookies.LEETCODE_SESSION) as any;
            decoded.username;
            next();
            return;
        }
        throw "invalid cookie";
    } catch (e) {
        res.clearCookie("LEETCODE_SESSION");
        res.clearCookie("CSRF_TOKEN");

        res.status(401).send({status:"auth cookies not set or are in invalid, please sign in again"});
    }
}