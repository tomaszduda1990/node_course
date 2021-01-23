const path = require("path");

const express = require("express");

const rootDir = require("../util/path");
const admin = require("./admin");
const router = express.Router();

router.get("/", (req, res, next) => {
  console.log(admin.products);
  res.render("shop", { prods: admin.products, pageTitle: "SHOP", path: "/" });
  //res.sendFile(path.join(rootDir, "views", "shop.pug"));
});

module.exports = router;
