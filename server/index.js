import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import loginRouter from "./Routes/loginRoute.js";
import registerRoute from "./Routes/registerRoute.js";
import profileRouter from "./Routes/profileRoute.js";
import connectMongoDB from "./Database/conn.js";
import logoutRouter from "./Routes/logoutRoute.js";
import postRouter from "./Routes/postRoute.js";

dotenv.config();
const app = express();

const url = process.env.ORIGIN_URL;

app.use(
  cors({
    origin: [url, "http://localhost:5173"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.use(registerRoute, loginRouter, profileRouter, logoutRouter, postRouter);

app.get("/", (req, res) => {
  res.send("Welcome to PankajKTech's Blog API");
});

const PORT = 3000;

connectMongoDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
