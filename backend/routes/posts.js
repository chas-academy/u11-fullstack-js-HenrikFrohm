import express from "express";
import {
  getPosts,
  getPostsBySearch,
  createPost,
  updatePost,
  deletePost,
  likePost,
} from "../controllers/posts.js";
import auth from "../middleware/auth.js";
const router = express.Router();

// Defining router using express methods that correspond to HTTP methods, like get, post and update/patch.
// Restricting certain actions to auth users
router.get("/", getPosts);
router.get("/search", getPostsBySearch);
router.post("/", auth, createPost);
router.patch("/:id", auth, updatePost);
router.delete("/:id", auth, deletePost);
router.patch("/:id/likePost", auth, likePost);

export default router;
