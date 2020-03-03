const express = require("express");
const app = express();
const port = 5000;
let cookieParser = require("cookie-parser");

const posts = {
  Mark: "Wassaaaapppp",
  Ravi: "Sup bro"
};

app.use(cookieParser());

app.use((req, res, next) => {
  console.log(req.cookies);
  next();
});

app.get("/login", (req, res) => {
  const { name } = req.query;
  res.cookie("name", name);
  res.send(name);
});

app.get("/posts"), (req, res) => {};

app.get("/", (req, res) => {
  res.cookie("monster", "blue", { expire: 1000 }).send("Hey there");
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
