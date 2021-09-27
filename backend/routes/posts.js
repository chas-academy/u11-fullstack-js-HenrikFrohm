import express from 'express';
import { getPosts } from '../controllers/posts.js';

const router = express.Router();

// defining router using express methods that correspond to HTTP methodsm like get and post.
router.get('/', getPosts);

export default router;