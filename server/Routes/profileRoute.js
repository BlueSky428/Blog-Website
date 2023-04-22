import express from "express";
import jwt from "jsonwebtoken";
const profileRouter = express.Router();

profileRouter.get("/profile", (req, res) => {
  const { token } = req.cookies;
  jwt.verify(token, process.env.JWT_SECRET, {}, (err, info) => {
    if (err) {
      res.status(401).json("Not authorized");
    }
    res.json(info);
  });
});

export default profileRouter;
