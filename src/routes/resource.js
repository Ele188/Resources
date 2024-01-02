import express from "express";

import {GET_ALL_RESOURCES, INSERT_RESOURCE} from "../controllers/resource.js";

const router = express.Router();

router.get("/resources", GET_ALL_RESOURCES);
  
router.get("/resources/:id", GET_ALL_RESOURCES);
  
router.post("/resources", INSERT_RESOURCE);
  
router.put("/resources/:id", GET_ALL_RESOURCES);
  
router.delete("/resources/:id", GET_ALL_RESOURCES);
  
export default router;