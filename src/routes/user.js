import express from "express";
import {SIGN_UP, LOGIN} from "../controllers/user.js";

const router = express.Router();

router.post("/user/signUp",SIGN_UP );

router.post("/user/login", LOGIN);
  
export default router;