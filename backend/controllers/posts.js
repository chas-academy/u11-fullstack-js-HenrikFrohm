import PostMessage from '../models/postMessage.js';

// Functions, some asynchronous, for routes, separating logic from routes/posts.js to avoid clutter when more routes get added.
// Appropriate HTTP status code responses shows up based on try-catch statements.
export const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find();
        
        res.status(200).json(postMessages);

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPost = async (req, res) => {
    const post = req.body;
    const newPost = new PostMessage(post);

    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
        
    }
    res.send('Create Post');
}