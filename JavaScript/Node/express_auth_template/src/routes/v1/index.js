import express from 'express';
import authRoutes from './AuthRoutes.js';

const router = express.Router();

/**
 * GET v1/status
 */
router.get('/status', (req, res) => res.send('OK'));

/**
 * GET v1/docs
 */
router.use('/docs', express.static('docs'));

router.use('/auth', authRoutes);

export default router;