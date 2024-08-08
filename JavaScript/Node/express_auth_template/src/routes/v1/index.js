import express from 'express';
import authRoutes from './AuthRoutes.js';
import userRoutes from './UserRoutes.js';
const router = express.Router();


/**
 * GET v1/status
 */
router.get('/status', (req, res) => res.send('OK'));

/**
 * GET v1/docs
 */
router.use('/auth', authRoutes);
router.use('/users', userRoutes);


export default router;