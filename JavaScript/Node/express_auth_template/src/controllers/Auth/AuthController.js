import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { errorRes, successRes } from "@/utils/Response.js";
import { db } from "@/config/database.js";

export default class Auth {
  // constructor() {}

  register = async (req, res) => {
    const { name, username, email, phone, password } =
      req.body;
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    const data = {
      name: name,
      email: email,
      phone: phone,
      username: username,
      password: hashPassword,
    };
    try {
      const [rows] = await db.execute(`INSERT INTO users SET name = ?, email = ?, phone = ?, username = ?, password = ?`, [name, email, phone, username, hashPassword]);
      return successRes(res, rows, "Success Register User", 201);
    } catch (err) {
      console.log(err);
      if (err.code == "ER_DUP_ENTRY")
        return errorRes(res, err.message, "Email/username already used");
      return errorRes(res, err.message, `Failed to register user`, 400);
    }
  };

  login = async (req, res) => {
    let user;
    try {
      const [rows] = await db.execute("SELECT * FROM users WHERE email = ?", [
        req.body.credential,
      ]);
      if (rows.length == 0) {
        return errorRes(res, null, "Account not found", 404);
      }
      user = rows[0];
      const match = await bcrypt.compare(req.body.password, user.password);
      if (!match) return errorRes(res, null, "Wrong Password", 400);
      const userId = user.id;
      const name = user.name;
      const email = user.email;
      const username = user.username;
      const status = user.status;

      const accessToken = jwt.sign(
        { userId, name, email, username, status },
        process.env.ACCESS_TOKEN_SECRET,
        {
          expiresIn: "1y",
        }
      );
      const refreshToken = jwt.sign(
        { userId, name, email, username, status },
        process.env.REFRESH_TOKEN_SECRET,
        {
          expiresIn: "1y",
        }
      );
      await db.execute("UPDATE users SET refreshToken = ? WHERE id = ?", [
        refreshToken,
        userId,
      ]);
      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        maxAge: 365 * 24 * 60 * 60 * 1000,
        // secure: true // jika https
      });
      let formattedUser = {};
      formattedUser.id = user.id;
      formattedUser.email = user.email;
      formattedUser.name = user.name;
      formattedUser.phone = user.phone;
      formattedUser.username = user.username;
      formattedUser.refreshToken = user.refreshToken;
      formattedUser.role = user.role;
      return successRes(
        res,
        { accessToken: accessToken, user: formattedUser },
        "Success Login User",
        200
      );
    } catch (err) {
      console.log(err);
      return errorRes(res, err.message, "Error DB", 404);
    }
  };

  logout = async (req, res) => {
    const refreshToken = req.cookies.refreshToken;
    // console.log(req.cookies.refreshToken);
    // return;
    if (!refreshToken)
      return errorRes(res, null, "Refresh token not found", 404);
    try {
      const [rows] = await db.execute(
        `SELECT * FROM users WHERE refreshToken = ?`,
        [refreshToken]
      );
      if (rows.length == 0)
        return errorRes(res, null, "Can't get current user", 500);
      const userId = rows[0].id;
      await db.execute(`UPDATE users SET refreshToken = ? WHERE id = ?`, [
        null,
        userId,
      ]);
      res.clearCookie("refreshToken");
      return successRes(res, null, "Success Logout", 200);
    } catch (err) {
      console.log(err);
      return errorRes(res, err.message);
    }
  };
  refreshToken = async (req, res) => {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) return errorRes(res, null, "Unauthorized", 401);
    try {
      const [rows] = await db.execute(
        `SELECT * FROM users WHERE refreshToken = ?`,
        [refreshToken]
      );
      if (rows.length == 0) return errorRes(res, null, "Forbidden", 403);
      const decoded = jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET
      );

      // Mendapatkan informasi yang diperlukan dari decoded token
      const userId = decoded.userId;
      const name = decoded.name;
      const email = decoded.email;
      const username = decoded.username;
      const status = decoded.status;

      // Membuat access token baru
      const accessToken = jwt.sign(
        { userId, name, email, username, status },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "1y" }
      );

      return successRes(
        res,
        { accessToken: accessToken },
        "Token refreshed",
        200
      );
    } catch (err) {
      console.log(err);
      return errorRes(res, err.message, "Error", 500);
    }
  };
}
