import pool from "../config/db.js";

const home = (req, res) => {
  const q = "SELECT * FROM story";
  pool.query(q).then(([datas]) => {
    res.render("home", { datas });
  });
};

const story = (req, res) => {
  // le ? est un placeholder
  const q = "SELECT * FROM story WHERE id = ?";
  pool.execute(q, [req.params.id]).then(([[data]]) => {
    res.render("story", { data });
  });
};

const create = (req, res) => {
  const q = "SELECT * FROM category";
  pool.query(q).then(([categories]) => {
    res.render("story-create", { categories });
  });
};

const notfound = (req, res) => {
  res.render("notfound");
};

export { home, story, create, notfound };
