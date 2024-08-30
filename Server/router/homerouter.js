import express from "express";
import upload from "../config/multer.js";

import {
  homeGet,
  signupGet,
  signupPost,
} from "../controller/homeController.js";

const homeRouter = express.Router();

homeRouter.get("/", homeGet);

homeRouter.get("/signup", signupGet);

homeRouter.post("/signup", upload.single("resume"), signupPost);

export default homeRouter;
