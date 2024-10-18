const User = require("../models/user");

exports.getUserStatus = async (req, res, next) => {
  try {
    const user = await User.findById(req.userId);

    if (!user) {
      const error = new Error("No user Found.");
      error.statusCode = 404;
      throw error;
    }
    res.status(200).json({ status: user.status });
  } catch (err) {
    console.log(err);
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err); // Hnece we're in promise chain throw err dose not work so use next() to pass the err.
  }
};

exports.updateStatus = async (req, res, next) => {
  const userStatus = req.body.status;

  if (!userStatus) {
    const error = new Error("No status Fitched.");
    error.statusCode = 204;
    throw error;
  }

  try {
    const user = await User.findById(req.userId);
    if (!user) {
      const error = new Error("User not found.");
      error.statusCode = 404;
      throw error;
    }

    user.status = userStatus;
    await user.save();
    res
      .status(200)
      .json({ message: "Status updated successfully.", status: userStatus });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err); // Hnece we're in promise chain throw err dose not work so use next() to pass the err.
  }
};
