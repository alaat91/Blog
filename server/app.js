const express = require("express");

const feedRoutes = require("./router/feed");
const bodyParser = require("body-parser");

const app = express();

//app.use(bodyParser.urlencoded()); // used when have x-www-form-urlencoded <form>

app.use(bodyParser.json()); // application/json

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Private-Network", "true");

  next();
});

app.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' *"
  );
  next();
});

app.use("/feed", feedRoutes);

app.listen(8080);
