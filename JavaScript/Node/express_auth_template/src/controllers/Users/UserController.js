import User from '@/models/User.js';
import { Op } from 'sequelize';
import { successRes, errorRes } from '@/utils/Response.js';

export default class Auth {

action = async (req, res) => {
  try {
    const { id, name, username, email, phone, password } = req.body;
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    const [user, created] = await User.upsert({
      id: id,
      name: name,
      email: email,
      phone: phone,
      username: username,
      password: hashPassword
    });
    return successRes(res, user, created ? 'User was created' : 'User was updated', created ? 201 : 200);
  } catch (error) {
    console.error('Error creating user:', error);
    return errorRes(res, error, 'Error creating user', 500);
  }
};

// Delete User by ID
delete = async (req, res) => {
  try {
    const deleted = await User.destroy({
      where: { id: req.params.id }
    });
    if (!deleted) return errorRes(res, null, 'User not found', 404);
    res.status(204).send(); // No Content
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get All Users with optional query parameters
list = async (req, res) => {
  try {
    const { name, email, username, status, phone } = req.body;
    const filters = {};
    if (name) filters.name = { [Op.like]: `%${name}%` };
    if (email) filters.email = { [Op.like]: `%${email}%` };
    if (username) filters.username = { [Op.like]: `%${username}%` };
    if (status) filters.status = status;
    if (phone) filters.phone = { [Op.like]: `%${phone}%` };
    const users = await User.findAll({ where: filters });
    return successRes(res, users, 'Success fetching users', 200);
  } catch (error) {
    console.error('Error fetching users:', error);
    return errorRes(res, error, 'Error fetching users', 500);
  }
};

}