import express from "express";
import dotenv from "dotenv";
import {connectDB} from "./lib/db.js";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.route.js";
import messageRoute from "./routes/message.route.js";
import { protectRoute } from "./middleware/auth.middleware.js";
import cors from "cors";
import {app,server} from "./lib/socket.js"
import path from "path";
dotenv.config()


const PORT =process.env.PORT || 5001
const __dirname = path.resolve();
app.use(express.json({ limit: "50mb" }));  // Increase JSON body limit
app.use(express.urlencoded({ limit: "50mb", extended: true }));  // Increase form data limit

app.use(express.json())
app.use(cookieParser())
app.use(cors({
  origin:["http://localhost:5173","http://127.0.0.1:5173"],
  credentials:true
}));
app.use(express.urlencoded({ extended: true })); 

app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoute)
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}
server.listen(PORT,()=>{
  console.log("server is running on port:"+ PORT);
  connectDB()
});