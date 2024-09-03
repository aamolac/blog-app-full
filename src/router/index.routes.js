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
  const q = "SELECT * FROM category";
  pool.query(q).then(([categories]) => {
    res.render("story-create", { categories });
  });
});

router.post("/create", (req, res) => {
  console.log(req.body);
  const q =
    "INSERT INTO story (title, content, publishDate, img, category_id) VALUES (?, ?, NOW(), ?, ?)";
  pool
    .execute(q, [
      req.body.title,
      req.body.content,
      req.body.img,
      req.body.category_id,
    ])
    .then(() => {
      res.redirect("/");
    })
    .catch((error) => console.log(error));
});

router.get("*", (req, res) => {
  res.render("notfound");
});

export default router;
