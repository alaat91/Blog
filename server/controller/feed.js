const fs = require("fs");
const path = require("path");

const { validationResult } = require("express-validator");

const io = require("../socket");

const mongoose = require("mongoose");

const Post = require("../models/post");
const User = require("../models/user");

exports.getPosts = (req, res, next) => {
  const currentPage = req.query.page || 1;
  const perPage = 2;
  let totalItems;
  Post.countDocuments()
    .then((count) => {
      totalItems = count;
      return Post.find()
        .populate("creator")
        .sort({ createdAt: -1 })
        .skip((currentPage - 1) * perPage)
        .limit(perPage);
    })
    .then((posts) => {
      return res.status(200).json({
        posts: posts,
        totalItems: totalItems,
      });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.getSinglePost = (req, res, next) => {
  const postId = new mongoose.Types.ObjectId(req.params.postId);
  Post.findOne({ _id: postId })
    .then((post) => {
      if (!post) {
        const error = new Error("Cloud not find post.");
        error.statusCode = 404;
        throw error; // throw works here ciz it pass the err to the catch where there i use next to send to centralized midlware.
      }
      return res.status(200).json({ post: post });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err); // Hnece we're in promise chain throw err dose not work so use next() to pass the err.
    });
};

exports.createPost = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error("Validation faild, entered data is incorrect.");
    error.statusCode = 422;
    throw error;
  }
  if (!req.file) {
    const error = new Error("No image provided.");
    error.statusCode = 422;
    throw error;
  }

  const post = new Post({
    title: req.body.title,
    content: req.body.content,
    imageUrl: req.file.path,
    creator: req.userId,
  });
  try {
    await post.save();
    const user = await User.findOne({
      _id: new mongoose.Types.ObjectId(req.userId),
    });
    user.posts.push(post);
    await user.save();
    io.getIo().emit("posts", {
      action: "create",
      post: { ...post._doc, creator: { _id: req.userId, name: user.name } },
    });
    res.status(201).json({
      message: "Post created successfully!",
      post: post,
      creator: { _id: user._id, name: user.name },
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err); // Hnece we're in promise chain throw err dose not work so use next() to pass the err.
  }
};

exports.updatePost = (req, res, next) => {
  const postId = new mongoose.Types.ObjectId(req.params.postId);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error("Validation faild, entered data is incorrect.");
    error.statusCode = 422;
    throw error;
  }
  const updatedTitle = req.body.title;
  const updatedContent = req.body.content;
  let updatedImage = req.body.image;
  if (req.file) {
    updatedImage = req.file.path;
  }
  if (!updatedImage) {
    const error = new Error("No image picked.");
    error.statusCode = 422;
    throw error;
  }
  Post.findOne({ _id: postId })
    .populate("creator")
    .then((post) => {
      if (!post) {
        const error = new Error("No post found.");
        error.statusCode = 404;
        throw error;
      }
      if (post.creator._id.toString() !== req.userId) {
        const error = new Error("Not authorized.");
        error.statusCode = 403;
        throw error;
      }
      if (updatedImage !== post.imageUrl) {
        clearImage(post.imageUrl);
      }
      post.title = updatedTitle;
      post.content = updatedContent;
      post.imageUrl = updatedImage;
      return post.save();
    })
    .then((updatedPost) => {
      io.getIo().emit("posts", {
        action: "update",
        post: updatedPost,
      });
      return res
        .status(200)
        .json({ message: "Post updated successfully.", post: updatedPost });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err); // Hnece we're in promise chain throw err dose not work so use next() to pass the err.
    });
};

exports.deletePost = async (req, res, next) => {
  const postId = req.params.postId;
  try {
    const post = await Post.findById(postId);

    if (!post) {
      const error = new Error("No post found.");
      error.statusCode = 404;
      throw error;
    }
    // check if it belong to the loggedin user
    if (post.creator.toString() !== req.userId) {
      const error = new Error("No authorized.");
      error.statusCode = 403;
      throw error;
    }
    clearImage(post.imageUrl);
    await Post.findByIdAndDelete(postId);

    const user = await User.findById(req.userId);

    user.posts.pull(postId);
    await user.save();
    io.getIo().emit("posts", {
      action: "delete",
      post: postId,
    });
    res.status(200).json({ message: "post deleted successfully!" });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err); // Hnece we're in promise chain throw err dose not work so use next() to pass the err.
  }
};

// Helper func to delete imagePath from images folder if new image was added
const clearImage = (filePath) => {
  filePath = path.join(__dirname, "..", filePath);
  fs.unlink(filePath, (err) => console.log(err));
};
