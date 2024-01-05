import express from "express";

import {
    GET_ALL_RESOURCES,
    INSERT_RESOURCE, 
    GET_RESOURCE_BY_ID, 
    DELETE_RESOURCE_BY_ID, 
    UPDATE_RESOURCE
} from "../controllers/resource.js";

import auth from "../middleware/auth.js"

const router = express.Router();

router.get("/resources",GET_ALL_RESOURCES);
  
router.get("/resources/:id", auth, GET_RESOURCE_BY_ID);
  
router.post("/resources", INSERT_RESOURCE);
  
router.put("/resources/:id", UPDATE_RESOURCE);
  
router.delete("/resources/:id", DELETE_RESOURCE_BY_ID);
  
export default router;