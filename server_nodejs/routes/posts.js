const express = require("express");
const router = express.Router();

// applying MIDDLEWARE to all the routes of a specific type

// remember to place dynamic routes after all the sttaic routes to avoid confusion
router.get("/", (req, res) => {
  res.send("Posts List");
});

router.post("/addpost", (req, res) => {
  res.send("create a post");
});

router.get("/:post_id", (req, res) => {
  let postId = req.params.post_id;
  res.send("get details about post " + postId);
});
router.put("/:post_id", (req, res) => {
  let postId = req.params.post_id;
  res.send("put new post " + postId);
});
router.patch("/:post_id", (req, res) => {
  let postId = req.params.post_id;
  res.send("edit details about post " + postId);
});

router.delete("/:post_id", (req, res) => {
  let postId = req.params.post_id;
  res.send("delete a post " + postId);
});

module.exports = router;
