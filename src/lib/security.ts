import {createHash,randomBytes,timingSafeEqual} from "crypto";
export const sha256=(v:string)=>createHash("sha256").update(v).digest("hex");
export const randomToken=()=>randomBytes(32).toString("base64url");
export function safeEqual(a:string,b:string){const x=Buffer.from(a),y=Buffer.from(b); return x.length===y.length&&timingSafeEqual(x,y)}
export function clientFingerprint(req:Request){const ip=req.headers.get("x-forwarded-for")?.split(",")[0]?.trim()||"unknown"; return sha256(`${ip}|${req.headers.get("user-agent")||""}|${process.env.AUTH_SECRET}`)}