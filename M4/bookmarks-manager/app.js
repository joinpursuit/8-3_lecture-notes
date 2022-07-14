const express = require("express");
const app = express();
const bookmarksController = require("./controllers/bookmarks.controller");

app.get("/", (req, res) => {
  res.send("Hello!");
});

app.use("/bookmarks", bookmarksController);
// If I get a request for any route begining with /bookmarks, I want to pass control to the bookmarksController
// Doesn't matter what HTTP verb is being used.

app.use("*", (req, res) => {
  res.status(404).send("Oops! Nothing to see here.");
});

module.exports = app;
