import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/users.js";
import dotenv from "dotenv";
import AdminBro from "admin-bro";
import AdminBroExpressjs from "admin-bro-expressjs";
import AdminBroMongoose from "admin-bro-mongoose";

import userSchema from "./models/user.js";

AdminBro.registerAdapter(AdminBroMongoose);

// initialize application, allowing methods
const app = express();
dotenv.config();

// allowing requests to be sent properly.
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

// allows access to resources outside domain
app.use(cors());

// every route in post routes is going to start with prefix "/posts"
app.use("/posts", postRoutes);

app.use("/user", userRoutes);

app.get("/", (req, res) => {
  res.send("APP IS RUNNING");
});

// pass configuration settings to AdminBro
const adminBro = new AdminBro({
  resources: [userSchema],
  rootPath: "/admin",
});

// router which will handle all AdminBro routes
const router = AdminBroExpressjs.buildRouter(adminBro);
app.use(adminBro.options.rootPath, router);

// MongoDB database url stored and backend port stored in env
const PORT = process.env.PORT || 5000;

// connect to database with options to avoid warnings. If connection is successful console will display message, otherwise error message.
mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));
