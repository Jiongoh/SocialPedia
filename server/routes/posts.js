import express from "express";
import { getFeedPosts, getUserPosts, likePost, commentPost } from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

// 读
router.get("/", verifyToken, getFeedPosts);
router.get("/:userId/posts", verifyToken, getUserPosts);

// 更新
router.patch("/:id/like", verifyToken, likePost);

// 写入
router.post("/:id/comment", verifyToken, commentPost)

export default router;