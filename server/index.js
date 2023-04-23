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
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
dotenv.config();
app.options("*", cors());
app.use(
  cors({
    origin: ["http://localhost:5173", "https://pankajktech.netlify.app/"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use("/uploads", express.static(__dirname + "/uploads"));

app.use(registerRoute, loginRouter, profileRouter, logoutRouter, postRouter);

connectMongoDB();
const port = 3000;
app.listen(port, () => {
  console.log("Server running on port 3000");
});
