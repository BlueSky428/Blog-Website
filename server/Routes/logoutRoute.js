import express from "express";
const logoutRouter = express.Router();

logoutRouter.post("/logout", (req, res) => {
  res.cookie("token", "").json("Logged out");
});

export default logoutRouter;
