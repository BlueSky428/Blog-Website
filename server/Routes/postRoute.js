import express from "express";
const postRouter = express.Router();
import multer from "multer";
import fs from "fs";
import postModel from "../models/postModel.js";

const uploadMiddleware = multer({
  dest: "uploads/",
});

postRouter.post("/post", uploadMiddleware.single("file"), async (req, res) => {
  const { originalname, path } = req.file;
  const partname = originalname.split(".");
  const extension = partname[partname.length - 1];
  const newpath = path + "." + extension;
  fs.renameSync(path, newpath);

  const { title, summary, content } = req.body;
  const newPost = await postModel.create({
    title,
    summary,
    content,
    cover: newpath,
  });
  res.json(newPost);
});

postRouter.get("/posts", async (req, res) => {
  const posts = await postModel.find();
  res.json(posts);
});

postRouter.get("/post/:id", async (req, res) => {
  const { id } = req.params;
  const post = await postModel.findById(id);
  res.json(post);
});

export default postRouter;
