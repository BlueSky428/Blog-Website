import express from "express";
const postRouter = express.Router();
import postModel from "../models/postModel.js";

postRouter.post("/post", async (req, res) => {
  const { title, summary, content, img } = req.body;

  const newPost = await postModel.create({
    title,
    summary,
    content,
    img,
  });
  res.json(newPost);
});

postRouter.get("/posts", async (req, res) => {
  const posts = await postModel.find().sort({ createdAt: -1 });
  res.json(posts);
});

postRouter.get("/post/:id", async (req, res) => {
  const { id } = req.params;
  const post = await postModel.findById(id);
  res.json(post);
});

export default postRouter;
