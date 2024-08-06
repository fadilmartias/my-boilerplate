import jwt from "jsonwebtoken";
import { errorRes } from "@/utils/Response.js";

export const verifyToken = (req, res, next) => {
  const authHeader = req?.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return errorRes(res, null, "Access Token Invalid", 403);
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) return errorRes(res, null,  "Access Token Invalid", 403);
    req.email = decoded.email;
    next();
  });
};
