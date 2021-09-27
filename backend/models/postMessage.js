import mongoose from 'mongoose';

// specifying that each post should meet a certain criteria
const postSchema = mongoose.Schema({
    title: String,
    message: String,
    author: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
});

// mongooose model will be used later for CRUD operations
const PostMessage = mongoose.model('PostMessage', postSchema)

export default PostMessage;