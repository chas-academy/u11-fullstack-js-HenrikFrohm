import express from 'express';
import { getPosts, createPost, updatePost, deletePost } from '../controllers/posts.js'

const router = express.Router();

// Defining router using express methods that correspond to HTTP methods, like get, post and update/patch.
router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);

export default router;