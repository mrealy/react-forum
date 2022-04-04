import express from 'express';
import postEndpoints from './posts/post-endpoints.js';

const router = express.Router();

router.use('/posts/', postEndpoints);

export default router;