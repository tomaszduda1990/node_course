const express = require("express");

const app = express();
app.use("/lorem", (req, res, next) => {
  console.log("from lorem");
  res.send("<p>Lorem ipsum</p>");
});

app.use("/", (req, res, next) => {
  console.log("main page");
  res.send("<h2>main page</h2>");
});

app.listen(3000);
