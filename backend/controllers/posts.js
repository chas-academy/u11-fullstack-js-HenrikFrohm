import mongoose from 'mongoose';
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
}

// extracting renamed id from requered parameters. Checking if _id is a mongoose object. If it is  an async action goes through to get updated post that also gets updated in db. If not, 404 error. 
export const updatePost = async (req, res) => {
    const { id: _id } = req.params;
    const post = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');

    const updatedPost = await PostMessage.findByIdAndUpdate(_id, { ...post, _id }, { new: true });

    res.json(updatedPost);
    }

export const deletePost = async (req, res) => {
    const { id } = req.params;

     if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');

     await PostMessage.findByIdAndRemove(id);

     res.json('Post was deleted');
}

export const likePost = async (req, res) => {
    const { id } = req.params;

     if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');

     const post = await PostMessage.findById(id);
     const updatedPost = await PostMessage.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true });

     res.json(updatedPost);
}