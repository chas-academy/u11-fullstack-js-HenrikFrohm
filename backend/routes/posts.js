import express from 'express';
import { getPosts, createPost } from '../controllers/posts.js'

const router = express.Router();

// Defining router using express methods that correspond to HTTP methodsm like get and post.
router.get('/', getPosts);
router.post('/', createPost);

export default router;