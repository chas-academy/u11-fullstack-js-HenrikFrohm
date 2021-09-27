import express from 'express';

const router = express.Router();

// express methods to define routing corresponding to HTTP request methods like get and post.
router.get('/', (req, res) => {
    res.send('SUCCESS!');
});

export default router;