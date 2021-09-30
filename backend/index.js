import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import postRoutes from './routes/posts.js';

// initialize application, allowing methods
const app = express();

// every route in post routes is going to start with prefix "/posts"
app.use('/posts', postRoutes);

// allowing requests to be sent properly.
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));


// allows access to resources outside domain
app.use(cors());

// MongoDB database, when connected to Heroku the env will be populate env
const CONNECTION_URL = 'mongodb+srv://u11user:u11pass123@cluster0.c8nhz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

// connect to database with options to avoid warnings. If connection is successful console will display message, otherwise error message.
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

// doesn't work for latest version, so it's skipped
//mongoose.set('useFindAndModify', false);