import "dotenv/config";
import express from "express";
import path from "path";

import router from "./router/index.routes.js";

import pool from "./config/db.js";

// configuration du moteur de template
const app = express();
const PORT = process.env.LOCAL_PORT;

app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "src/views"));

// configuration du dossier static
app.use("/css", express.static(path.join(process.cwd(), "public/css")));
app.use("/images", express.static(path.join(process.cwd(), "public/images")));

//  ROUTES
app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
