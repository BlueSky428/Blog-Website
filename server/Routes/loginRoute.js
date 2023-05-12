import express from "express";
import bcrypt from "bcryptjs";
import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
const loginRouter = express.Router();

loginRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const userDoc = await userModel.findOne({ email });

  const pass = bcrypt.compareSync(password, userDoc.password);
  if (pass) {
    jwt.sign(
      { email, id: userDoc._id },
      process.env.JWT_SECRET,
      (err, token) => {
        if (err) {
          throw err;
        }
        res.cookie("token", token).json({
          id: userDoc._id,
          email,
        });
      }
    );
  }
});

export default loginRouter;
