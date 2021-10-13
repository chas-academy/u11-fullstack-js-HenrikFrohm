import express from "express";
import { signin, signup } from "../controllers/user.js";

// Creating instance of router
const router = express.Router();

// Sending data from signin to backend with post.
router.post("/signin", signin);
router.post("/signup", signup);

export default router;
