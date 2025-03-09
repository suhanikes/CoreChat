import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { login, logout, signup ,updateProfile,checkAuth} from "../controller/auth.controller.js";
const router = express.Router();

router.post("/signup", (req, res, next) => {
  console.log("Signup route hit", req.body);
  next();
}, signup);

router.post("/login",login);

router.post("/logout",logout);
router.put("/update-profile",protectRoute,updateProfile);
router.get("/check", protectRoute, checkAuth);

export default router;
