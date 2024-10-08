const express = require("express");

const feedController = require("../controller/feed");

const router = express.Router();
// GET /feed/posts = is what will be handled by the curr setup
router.get("/posts", feedController.getPosts);

router.post("/post", feedController.createPost);
module.exports = router;
