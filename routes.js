const express = require("express");
const app = express();
const port = 3000;
const passport = require("passport");
const session = require("express-session");

const githubAuth = require("./githubAuth");

app.use(express.json());
app.use(session({ secret: "secret", resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.use(githubAuth);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
