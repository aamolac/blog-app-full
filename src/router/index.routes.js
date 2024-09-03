import express from "express";
import pool from "../config/db.js";

const router = express.Router();

router.get("/", (req, res) => {
  const q = "SELECT * FROM story";
  pool.query(q).then(([datas]) => {
    console.log(datas);
    res.render("home", { datas });
  });
});

router.get("/story/:id", (req, res) => {
  // le ? est un placeholder
  const q = "SELECT * FROM story WHERE id = ?";
  pool.execute(q, [req.params.id]).then(([[data]]) => {
    res.render("story", { data });
  });
});

router.get("/create", (req, res) => {
  res.render("story-create");
});

router.get("*", (req, res) => {
  res.render("notfound");
});

export default router;
