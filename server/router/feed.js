const express = require("express");

const { body } = require("express-validator");

const feedController = require("../controller/feed");

const isAuth = require("../middleware/is-auth");

const router = express.Router();
// GET /feed/posts = is what will be handled by the curr setup
router.get("/posts", isAuth, feedController.getPosts);

router.get("/post/:postId", isAuth, feedController.getSinglePost);

router.post(
  "/post",
  [
    body("title")
      .trim()
      .isLength({ min: 5 }),
    body("content")
      .trim()
      .isLength({ min: 5 }),
  ],
  isAuth,
  feedController.createPost
);

router.put(
  "/post/:postId",
  [
    body("title")
      .trim()
      .isLength({ min: 5 }),
    body("content")
      .trim()
      .isLength({ min: 5 }),
  ],
  isAuth,
  feedController.updatePost
);

router.delete("/post/:postId", isAuth, feedController.deletePost);

module.exports = router;
