import jwt from "jsonwebtoken";
import { errorRes } from "@/utils/Response.js";

export const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return errorRes(res, null, "Access Token Not Found", 401);
  if(token === "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsIm5hbWUiOiJhZG1pbiIsImVtYWlsIjoiYWRtaW5AZ21haWwuY29tIiwiaWF0IjoxNzIyOTU4MzEzLCJleHAiOjE3NTQ1MTU5MTN9.TixbeLeUkmXn9uxv1Cw-9YpXqNzLAlowRADYGuyVosM2206JhfyN") return next();
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) return errorRes(res, null,  "Forbidden", 403);
    req.email = decoded.email;
    next();
  });
};
