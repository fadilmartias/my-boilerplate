import User from '@/models/User.js';
import { Op } from 'sequelize';
import { successRes, errorRes } from '@/utils/Response.js';

export default class Auth {

// Create User
createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    return successRes(res, user, 'User created successfully', 201);
  } catch (error) {
    console.error('Error creating user:', error);
    return errorRes(res, error, 'Error creating user', 500);
  }
};

// Read User by ID
getUserById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    return successRes(res, user, 'User found', 200);
    res.status(200).json(user);
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update User by ID
updateUserById = async (req, res) => {
  try {
    const [updated] = await User.update(req.body, {
      where: { id: req.params.id },
      returning: true
    });
    if (!updated) return res.status(404).json({ error: 'User not found' });
    const updatedUser = await User.findByPk(req.params.id);
    res.status(200).json(updatedUser);
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete User by ID
deleteUserById = async (req, res) => {
  try {
    const deleted = await User.destroy({
      where: { id: req.params.id }
    });
    if (!deleted) return res.status(404).json({ error: 'User not found' });
    res.status(204).send(); // No Content
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get All Users with optional query parameters
getAllUsers = async (req, res) => {
  try {
    const { name, email } = req.query;
    const filters = {};
    if (name) filters.name = { [Op.like]: `%${name}%` };
    if (email) filters.email = { [Op.like]: `%${email}%` };

    const users = await User.findAll({ where: filters });
    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

}