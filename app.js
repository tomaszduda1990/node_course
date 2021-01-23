const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set("view engine", "pug");
app.set("views", "views");
app.use(express.static(path.join(__dirname, "public")));
const admin = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", admin.routes);
app.use(shopRoutes);
app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "404 page not found!" });
});

app.listen(3000);
