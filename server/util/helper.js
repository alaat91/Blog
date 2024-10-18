const path = require("path");
const fs = require("fs");

// Helper func to delete imagePath from images folder if new image was added
const clearImage = (filePath) => {
  filePath = path.join(__dirname, "..", filePath);
  fs.unlink(filePath, (err) => console.log(err));
};

exports.clearImage = clearImage;
