import express from 'express';
<<<<<<< HEAD

const router = express.Router();

// express methods to define routing corresponding to HTTP request methods like get and post.
router.get('/', (req, res) => {
    res.send('SUCCESS!');
});
=======
import { getPosts, createPost, updatePost, deletePost, likePost } from '../controllers/posts.js'

const router = express.Router();

// Defining router using express methods that correspond to HTTP methods, like get, post and update/patch.
router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);
>>>>>>> develop

export default router;