import express from "express";
import bcrypt from "bcryptjs";
import userModel from "../models/userModel.js";
const registerRoute = express.Router();
const salt = bcrypt.genSaltSync(10);

registerRoute.post("/register", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }
  } catch (err) {
    console.log(`Error: ${err.message}`);
  }
  const userData = await userModel.create({
    email: email,
    password: bcrypt.hashSync(password, salt),
  });
  res.status(201).json(userData);
});

export default registerRoute;
