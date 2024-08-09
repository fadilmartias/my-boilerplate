import model from "@/models/index.js";
import { Op } from "sequelize";
import { successRes, errorRes } from "@/utils/Response.js";
import bcrypt from "bcrypt";

const User = model.User;
export default class UserController {
  action = async (req, res) => {
    try {
      const { id, name, username, email, phone, password } = req.body;
      const salt = await bcrypt.genSalt();
      const hashPassword = await bcrypt.hash(password, salt);
      const idUser = id == "" ? null : id;
      const data = {
        id: idUser,
        name: name,
        email: email,
        phone: phone,
        username: username,
        password: hashPassword,
      };
      const user = await User.findOne({
        where: { id: data.id },
        attributes: ["id"],
      });
      if (user) {
        await user.update(data);
      } else {
        if (data.id === null) {
          await User.create(data);
        } else {
          return errorRes(res, null, "User not found", 404);
        }
      }
      return successRes(
        res,
        user,
        !user ? "User was created" : "User was updated",
        !user ? 201 : 200
      );
    } catch (error) {
      if (error.errors)
        return errorRes(res, error.errors, "Error creating user", 500);
      return errorRes(res, error.message, "Error creating user", 500);
    }
  };

  // Delete User by ID
  delete = async (req, res) => {
    try {
      const deleted = await User.destroy({
        where: { id: req.params.id },
      });
      if (!deleted) return errorRes(res, null, "User not found", 404);
      return successRes(res, null, "User deleted", 200);
    } catch (error) {
      console.error("Error deleting user:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };

  list = async (req, res) => {
    // console.log(req.user);
    const page = parseInt(req.query.page) || 1; // Halaman saat ini, default ke halaman 1
    const pageSize = parseInt(req.query.limit) || 10; // Jumlah data per halaman, default 10
    const { id, name, email, username, status, phone } = req.query;
    const filters = {};
    try {
      if (id) filters.id = { [Op.like]: `%${id}%` };
      if (name) filters.name = { [Op.like]: `%${name}%` };
      if (email) filters.email = { [Op.like]: `%${email}%` };
      if (username) filters.username = { [Op.like]: `%${username}%` };
      if (status) filters.status = status;
      if (phone) filters.phone = { [Op.like]: `%${phone}%` };
      const { count, rows } = await User.findAndCountAll({
        limit: pageSize,
        offset: (page - 1) * pageSize,
        where: filters,
      });
      const totalPages = Math.ceil(count / pageSize);
      const pagination = {
        totalItems: count,
        currentPage: page,
        pageSize: pageSize,
        totalPages: totalPages,
      };
      return successRes(res, rows, "Success fetching users", 200, pagination);
    } catch (error) {
      console.error("Error fetching users:", error);
      return errorRes(res, error, "Error fetching users", 500);
    }
  };

  updateStatus = async (req, res) => {
    try {
      const { id } = req.params;
      const { status } = req.body;
      const user = await User.findOne({ where: { id: id } });
      if (user) {
        await user.update({ status: status });
      } else {
        return errorRes(res, null, "User not found", 404);
      }
      return successRes(res, user, "User status updated", 200);
    } catch (error) {
      console.error("Error updating user status:", error);
      return errorRes(res, error, "Error updating user status", 500);
    }
  };
}
