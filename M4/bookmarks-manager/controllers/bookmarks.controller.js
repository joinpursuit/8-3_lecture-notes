const express = require("express");
const bookmarks = express.Router(); // a "sub-application"
const bookmarksArray = require("../models/bookmark.model");

bookmarks.get("/bookmarks"); // WRONG!
bookmarks.get("/", (req, res) => {
  res.json(bookmarksArray);
});

module.exports = bookmarks;
