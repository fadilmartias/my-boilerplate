import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { generateRandomId } from "../../utils/helper.js";
import { errorRes, successRes } from "../../utils/response.js";
import { db } from "../../config/database.js";

export const Register = async (req, res) => {
  console.log(req.body);
  const { first_name, last_name, email, password, confPassword } = req.body;
  if (password !== confPassword)
    return errorRes(null, `Confirm Password Doesn't Match`, res, 400);
  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(password, salt);

  try {
    const data = {
      id: generateRandomId(16),
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: hashPassword
    };
    const qinsert = `INSERT INTO users SET ?`;
    db.query(qinsert, data, (error, result) => {
      if (error?.code == 'ER_DUP_ENTRY') return errorRes(error, "Email already used", res, 500);
      if (error) return errorRes(error, "Error", res, 500);
      return successRes(result, "Success Register User", res);
    });
  } catch (error) {
    console.log(error);
    return errorRes(error, `Failed to register user`, res, 400);
  }
};

export const Login = (req, res) => {
  try {
    let user;
    const quser = "SELECT * FROM users WHERE email = ?";
    db.query(quser, [req.body.email], async (error, result) => {
      if (error) return errorRes(error, "Error", res, 500);
      if (result.length == 0) {
        return errorRes(error, "Account not found", res, 404);
      } else {
        const match = await bcrypt.compare(
          req.body.password,
          result[0].password
        );
        if (!match) return errorRes(null, "Wrong Password", res, 400);
        user = result[0];
        const allowedProperties = ["id", "name", "email", "refresh_token"];
        const filteredUser = Object.fromEntries(
          Object.entries(user)
            .filter(([key]) => allowedProperties.includes(key))
        );
        const userId = result[0].id;
        const name = result[0].name;
        const email = result[0].email;

        const accessToken = jwt.sign(
          { userId, name, email },
          process.env.ACCESS_TOKEN_SECRET,
          {
            expiresIn: "1d",
          }
        );
        const refreshToken = jwt.sign(
          { userId, name, email },
          process.env.REFRESH_TOKEN_SECRET,
          {
            expiresIn: "1d",
          }
        );
        const qupdate = "UPDATE users SET refresh_token = ? WHERE id = ?";
        db.query(qupdate, [refreshToken, userId], async (error, result) => {
          if (error) return errorRes(error, "Error", res, 500);
          res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000,
            // secure: true // jika https
          });
          return successRes(
            { accessToken: accessToken, user: filteredUser },
            "Success Login User",
            res,
            200
          );
        });
      }
    });
  } catch (error) {
    console.log(error);
    return errorRes(error, "Account not found", res, 404);
  }
};

export const Logout = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  console.log(req.cookies);
  // return;
  if (!refreshToken) return errorRes(null, "Refresh token not found", res, 500);
  const user = `SELECT * FROM users WHERE refresh_token = ?`;
  db.query(user, [refreshToken], (error, result) => {
    if (error) return errorRes(error, "Error DB", res, 500);
    if (result.length == 0) return errorRes(error, "Error Gaada hasil", res, 500);
    const userId = result[0].id;
    const qupdate = `UPDATE users SET refresh_token = ? WHERE id = ?`;
    db.query(qupdate, [null, userId], (error, result) => {
      if (error) return errorRes(error, "Error update", res, 500);
      res.clearCookie("refreshToken");
      return successRes(result, "Success Logout", res, 200);
    });
  });
};

export const refreshToken = async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) return errorRes(null, "Unauthorized", res, 401);
    const user = `SELECT * FROM users WHERE refresh_token = ?`;
    db.query(user, [refreshToken], (error, result) => {
      if (error) return errorRes(error, "Error", res, 500);
      if (result.length == 0) return errorRes(null, "Unauthorized", res, 403);
      jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        (err, decoded) => {
          if (err) return errorRes(null, "Unauthorized", res, 403);
          const userId = result[0].id;
          const name = result[0].name;
          const email = result[0].email;
          const accessToken = jwt.sign(
            { userId, name, email },
            process.env.ACCESS_TOKEN_SECRET,
            {
              expiresIn: "1d",
            }
          );
          return successRes({ accessToken: accessToken }, "Token refreshed", res, 200)
        }
      );
    });
  } catch (error) {
    console.log(error);
    return errorRes(error, "Error", res, 500);
  }
};
