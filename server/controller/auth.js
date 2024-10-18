const fs = require("fs");
const path = require("path");

const { validationResult } = require("express-validator");

const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

// const mongoose = require("mongoose");

// const Post = require("../models/post");
const User = require("../models/user");

exports.signup = (req, res, next) => {
  bcrypt
    .hash(req.body.password, 12)
    .then((hashedPw) => {
      const user = new User({
        email: req.body.email,
        password: hashedPw,
        name: req.body.name,
      });
      return user.save();
    })
    .then((user) => {
      if (!user) {
        const error = new Error("No user found.");
        error.statusCode = 404;
        throw error;
      }
      res.status(201).json({ message: "New user created!", userId: user._id });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err); // Hnece we're in promise chain throw err dose not work so use next() to pass the err.
    });
};

exports.login = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  let loadedUser;
  User.findOne({ email: email })
    .then((user) => {
      if (!user) {
        const error = new Error("No user found.");
        error.statusCode = 401;
        throw error;
      }
      loadedUser = user;
      return bcrypt.compare(password, user.password);
    })
    .then((isEqual) => {
      if (!isEqual) {
        const error = new Error("Wrong password.");
        error.statusCode = 401;
        throw error;
      }
      const token = jwt.sign(
        {
          email: loadedUser.email,
          userId: loadedUser._id.toString(),
        },
        "superSecretSecret",
        { expiresIn: "1h" }
      );

      res.status(200).json({
        message: "Access grantied",
        token: token,
        userId: loadedUser._id.toString(),
      });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err); // Hnece we're in promise chain throw err dose not work so use next() to pass the err.
    });
};

// exports.getUserStatus = (req, res, next) => {
//   console.log("userID:", req.userId);
//   User.findById(req.userId)
//     .then((user) => {
//       console.log("Status:", user.status);
//       if (!user) {
//         const error = new Error("No user Found.");
//         error.statusCode = 404;
//         throw error;
//       }
//       return res.status(200).json({ status: user.status });
//     })
//     .catch((err) => {
//       console.log(err);
//       if (!err.statusCode) {
//         err.statusCode = 500;
//       }
//       next(err); // Hnece we're in promise chain throw err dose not work so use next() to pass the err.
//     });
// };
