import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import postRoutes from './routes/posts.js';
import dotenv from 'dotenv';

// initialize application, allowing methods
const app = express();

dotenv.config();

// allowing requests to be sent properly.
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

// allows access to resources outside domain
app.use(cors());

// every route in post routes is going to start with prefix "/posts"
app.use('/posts', postRoutes); 

// MongoDB database url stored and backend port stored in env
const PORT = process.env.PORT || 5000;

// connect to database with options to avoid warnings. If connection is successful console will display message, otherwise error message.
mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));