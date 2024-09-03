import express from "express";
import pool from "../config/db.js";

import { home, story, notfound, create } from "../controler/view.js";

const router = express.Router();

router.get("/", home);

router.get("/story/:id", story);

router.get("/create", create);

router.post("/create", (req, res) => {
  console.log(req.body);
});

router.get("*", notfound);

export default router;
